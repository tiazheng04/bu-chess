import ListGroup from "./components/ListGroup"
import Logo from "./components/Logo"
import ShrinkOnScroll from "./components/ShrinkOnScroll"
import react from "./assets/react.svg";


function App() {

  return (
    <>
<Logo/>
<div><ListGroup/></div>
<ShrinkOnScroll>
  <img src={react} alt="logo" style={{ height: "100%" }} />
</ShrinkOnScroll>
<div style={{height: "100vh"}}></div>

    </>
  )
}

export default App
