import { useState } from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
  onNavStateChange?: (open: boolean) => void;
};

// Allow Navbar to be collapsed or expanded and allow parent comonent to add blur on expansion
function Navbar({ onNavStateChange } : NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(prev => {
      const next = !prev;
      if (onNavStateChange) {
        onNavStateChange(next); 
      }
      return next;
    });
  };

  // Close navbar when a link is clicked
  const handleNavLinkClick = () => {
    setIsOpen(false);
    if (onNavStateChange) {
      onNavStateChange(false);
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "9vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f2f2f2",
          borderBottom: "1px solid red", 
          
        }}
      >
        {/* hamburger icon which remains fixed on the top left corner */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          style={{
            position: "fixed",
            top: "1.5vh",
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
            flexDirection: "column", 
            gap: "4px",              
            padding: 0,  
            
                      
          }}
        >
          {/* Lines to create the icon itself */}
          <span
            style={{
              display: "block",
              width: "22px",
              height: "3px",
              background: "#333",
              borderRadius: "2px",
              transition: "0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "3px",
              background: "#333",
              borderRadius: "2px",
              transition: "0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "3px",
              background: "#333",
              borderRadius: "2px",
              transition: "0.3s",
            }}
          />
        </button>
      </div>
      {/* Pop up navigation bar */}
      {isOpen && (
        <nav
          className="navbar"
          style={{
            position: "fixed",
            top: "160px", 
            left: "1rem",
            height: "300px", 
            width: "180px",
            padding: "1rem",
            backgroundColor: "#ffcccc",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            zIndex: 1100,
          }}
        >
          <ul className="navbar-nav flex-column" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tournaments" onClick={handleNavLinkClick}>
                Tournaments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus" onClick={handleNavLinkClick}>
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