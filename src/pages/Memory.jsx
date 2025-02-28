import React, { useState, useEffect } from 'react';
import '../Styles/Memory.css';
import dumbbells from "../assets/dumbbells.webp";
import yoga from "../assets/yoga.jpg";
import runningShoes from "../assets/runningShoes.png";
import medit from "../assets/medit.jpg";
import jumpingJack from "../assets/jumpingJack.png";
import squat from "../assets/squat.png";
import whiteCard from "../assets/whiteCard.png";

const Memory = ({ userWorkoutsCompleted }) => { 
  const workoutImages = [
    dumbbells, yoga, runningShoes, medit, jumpingJack, squat,
    dumbbells, yoga, runningShoes, medit, jumpingJack, squat
  ];

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const [memoryCards, setMemoryCards] = useState([]);
  const [flippedMemoryCards, setFlippedMemoryCards] = useState([]);
  const [memoryMoves, setMemoryMoves] = useState(0);
  const [memoryTimer, setMemoryTimer] = useState(0);
  const [memoryGameOver, setMemoryGameOver] = useState(false);
  const [memoryBestScore, setMemoryBestScore] = useState(() => {
    const savedBestScore = localStorage.getItem('memoryBestScore');
    return savedBestScore ? parseInt(savedBestScore, 10) : null;
  });

  const restartGame = () => {
    const shuffledCards = shuffleArray([...workoutImages]);
    setMemoryCards(shuffledCards.map((img, index) => ({ id: index, img, flipped: false })));
    setFlippedMemoryCards([]);
    setMemoryMoves(0);
    setMemoryTimer(0);
    setMemoryGameOver(false);
  };

  useEffect(() => {
    const shuffledCards = shuffleArray([...workoutImages]);
    setMemoryCards(shuffledCards.map((img, index) => ({ id: index, img, flipped: false })));
  }, []);

  useEffect(() => {
    let interval;
    if (!memoryGameOver) {
      interval = setInterval(() => {
        setMemoryTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [memoryGameOver]);

  useEffect(() => {
    if (flippedMemoryCards.length === 2) {
      setMemoryMoves((prev) => prev + 1);
      const [firstCard, secondCard] = flippedMemoryCards;

      if (firstCard.img === secondCard.img) {
        setMemoryCards((prevCards) =>
          prevCards.map((card) =>
            card.img === firstCard.img ? { ...card, flipped: true } : card
          )
        );
        setFlippedMemoryCards([]);
      } else {
        setTimeout(() => {
          setMemoryCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedMemoryCards([]);
        }, 1000);
      }
    }
  }, [flippedMemoryCards]);

  const handleMemoryCardClick = (card) => {
    if (card.flipped || flippedMemoryCards.length === 2 || memoryGameOver) return;

    const newCards = memoryCards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    setMemoryCards(newCards);
    setFlippedMemoryCards((prev) => [...prev, card]);

    if (flippedMemoryCards.length === 1) {
      const [firstCard] = flippedMemoryCards;
      if (firstCard.img === card.img) {
        setFlippedMemoryCards([]);
      } else {
        setTimeout(() => {
          setMemoryCards((prevCards) =>
            prevCards.map((c) =>
              c.id === firstCard.id || c.id === card.id ? { ...c, flipped: false } : c
            )
          );
          setFlippedMemoryCards([]);
        }, 1000);
      }
    }

    setMemoryMoves((prevMoves) => {
      const updatedMoves = prevMoves + 1;
      if (newCards.every((c) => c.flipped)) {
        setMemoryGameOver(true);
        if (memoryBestScore === null || updatedMoves < memoryBestScore) {
          setMemoryBestScore(updatedMoves);
          localStorage.setItem('memoryBestScore', updatedMoves.toString());
        }
      }
      return updatedMoves;
    });
  };

  useEffect(() => {
    if (userWorkoutsCompleted >= 5) {
      alert("Congratulations on completing 5 workouts! Take a break and try the Workout Memory Game!");
    }
  }, [userWorkoutsCompleted]);

  return (
    <div className="memory-game-container">
      <h1>Workout Memory Game</h1>
      <div className="memory-scoreboard">
        <button className="memory-bestscore-btn" onClick={() => {
          localStorage.removeItem('memoryBestScore');
          setMemoryBestScore(null);
        }}>
          Reset Score
        </button>
        <button className="memory-restart-btn" onClick={restartGame}>
          Restart Game
        </button>

        <div className="memory-timer pe-2">Time: {memoryTimer}s</div>
        <div className="memory-moves pe-2">Moves: {memoryMoves}</div>
        <div className="memory-best-score pe-2">
           Score: {memoryBestScore !== null ? memoryBestScore : "N/A"}
        </div>
      </div>

      <div className="memory-card-grid">
        {memoryCards.map((card) => (
          <div
            key={card.id}
            className={`memory-card ${card.flipped ? 'memory-flipped' : ''}`}
            onClick={() => handleMemoryCardClick(card)}
          >
            <img src={card.flipped ? card.img : whiteCard} alt="Workout Icon" style={{width:"110px"}} />
          </div>
        ))}
      </div>

      {memoryGameOver && (
        <div className="memory-game-over-banner">
          🎉 Game Over! You matched all pairs! 🎉
          <button className="memory-restart-btn" onClick={restartGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};  

export default Memory;
