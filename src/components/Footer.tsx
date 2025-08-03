import React from "react";
function Footer() {

return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <div style={{ marginTop: "1rem" }}>
        <a href="/contact" style={{ margin: "0 1rem" }}>
          Contact Us
        </a>
        <a href="/contact" style={{ margin: "0 1rem" }}>
          Contact
        </a>
        <a href="/privacy" style={{ margin: "0 1rem" }}>
          Privacy Policy
        </a>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Boston University Chess Club. All rights reserved.</p>
      </div>
    </footer>
)

}
export default Footer;
