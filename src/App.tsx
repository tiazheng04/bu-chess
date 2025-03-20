import ShrinkOnScroll from "./components/ShrinkOnScroll"
import logo from "./assets/logo.png";


function App() {

  return (
    <>
    <div style={{height: "50vh"}}></div>
<ShrinkOnScroll threshold={300} largeSize="350px" smallSize="115px">
  <img src={logo} alt="logo" style={{ height: "100%" }} />
</ShrinkOnScroll>
<div style={{height: "85vh"}}></div>

    </>
  )
}

export default App
