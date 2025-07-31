import ShrinkOnScroll from "./components/ShrinkOnScroll";
import terrier from "./assets/terrier.png";

function Home() {
  return (
    <>
      <div style={{ height: "50vh" }}></div>
      <ShrinkOnScroll
        threshold={300}
        largeSize="350px"
        smallSize="115px"
        className="d-flex align-items flex-row align-items-center justify-content-end"
      >
        <img src={terrier} alt="logo" style={{ height: "50%" }} />
        <span style={{ fontSize: "30%" }}>BU CHESS</span>
      </ShrinkOnScroll>
      <div style={{ height: "85vh" }}></div>
    </>
  );
}

export default Home;