import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import NavigationBar from "./Navbar";

const Header = ({ footerRef }) => {
  const [disableSticky, setDisableSticky] = useState(false);

  useEffect(() => {
    if (!footerRef?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setDisableSticky(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, [footerRef]);

  return (
    <div
      style={{
        position: disableSticky ? "relative" : "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "#fff",
        transition: "position 0.3s ease-in-out",
      }}
    >
      <NavigationBar />
    </div>
  );
};

export default Header;
