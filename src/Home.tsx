import ShrinkOnScroll from "./components/ShrinkOnScroll";
import terrier from "./assets/bu-chess-logo.png";
import Landing from "./components/landing";

function Home() {
  return (
    <>
    <Landing />
      <div style={{ height: "70vh" }}></div>
      <ShrinkOnScroll
        threshold={400}
        largeSize="350px"
        smallSize="100px"
        className="d-flex flex-row justify-content-end"
      >
        <img src={terrier} alt="logo" style={{ height: "50%" }} />
        <span style={{ fontSize: "30%" }}>BU CHESS</span>
      </ShrinkOnScroll>
      <div style={{ height: "85vh" }}></div>
    </>
  );
}

export default Home;