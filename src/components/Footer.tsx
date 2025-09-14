import instaLogo from "../assets/insta.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "4.5vh",
        textAlign: "center",
        borderTop: "1px solid red",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.125vh", marginTop: "1.9vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.125vh" }}>
          <a
            href="https://www.instagram.com/buchessclub/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#ff6666", // light red
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.color = "#d32f2f")}
            onMouseOut={e => (e.currentTarget.style.color = "#ff6666")}
          >
            <img src={instaLogo} alt="Instagram" style={{ width: "22px", height: "22px", marginRight: "1.125vh" }} />
            Instagram
          </a>
          <span style={{ marginLeft: "3.35vw" }}>chessbu@bu.edu</span>
        </div>
        <div>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Boston University Chess Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
