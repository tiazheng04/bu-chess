import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs.tsx";
import Tournament from "./Tournament.tsx";
import ContactUs from "./ContactUs.tsx";
import Home from "./Home.tsx";
import Footer from "./components/Footer.tsx";
// import PersistentLogo from "./components/PersistentLogo.tsx";
// import { useLocation } from "react-router-dom";


function App() {
  const [navOpen, setNavOpen] = useState(false);
  // Height of the footer (adjust as needed)
  const FOOTER_HEIGHT = 120;
  // const isHome = location.pathname === "/";
  return (
    <div style={{ minHeight: "100vh", width: "100vw", position: "relative" }}>
      <Router>
        {/* Topbar/Navbar always above blur, with high z-index */}
        <div style={{ position: "sticky", top: 0, zIndex: 100, width: "100%", background: "#f5f5f5" }}>
          <Navbar onNavStateChange={setNavOpen} />
            {/* <div style={{ display: isHome ? "none" : "block" }}>
              <PersistentLogo />
            </div> */}
        </div>
        {/* Main content is blurred when navOpen, logo inside can scroll up and visually join topbar */}
        <div
          id="main-content"
          style={{
            width: "100%",
            minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
            marginBottom: FOOTER_HEIGHT,
            background: "#fff",
            boxSizing: "border-box",
            filter: navOpen ? "blur(2.5px)" : "none",
            transition: "filter 0.3s",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div style={{ flex: 1, width: "100%" }}>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/tournaments" element={<Tournament />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;