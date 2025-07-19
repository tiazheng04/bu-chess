import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          background: "#ffcccc", 
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Box */}
      {!isCollapsed && (
        <nav
          className="navbar"
          style={{
            position: "fixed",
            top: "120px", 
            left: "1rem",
            height: "300px", 
            width: "200px",
            padding: "1rem",
            backgroundColor: "#ffcccc",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <ul className="navbar-nav flex-column" style={{ width: "100%" }}>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tournaments">
                Tournaments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;