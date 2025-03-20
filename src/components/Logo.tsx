import { useState, useEffect } from "react";
import logo from "../assets/react.svg";

function Logo() {
  const [small, setSmall] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="d-flex align-items-center transition-all"
      style={{
        height: small ? "40px" : "80px",
        transition: "0.3s",
        
      }}
    >
      <img src={logo} alt="logo" style={{ height: "100%" }} />
    </div>
  );
}

export default Logo;
