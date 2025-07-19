import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs.tsx";
import Tournament from "./Tournament.tsx";
import ContactUs from "./ContactUs.tsx";
import Home from "./Home.tsx";



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tournaments" element={<Tournament />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App;