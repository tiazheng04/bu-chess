import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs.tsx";
import Tournament from "./Tournament.tsx";
import ContactUs from "./ContactUs.tsx";
import Home from "./Home.tsx";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Router>
      <Navbar onNavStateChange={setNavOpen} />
      <div
        id="main-content"
        style={{
          filter: navOpen ? "blur(2.5px)" : "none",
          transition: "filter 0.3s",
        }}
      >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tournaments" element={<Tournament />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;