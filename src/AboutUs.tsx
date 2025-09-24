// shell page for about us
import ShrinkOnScroll from "./components/ShrinkOnScroll";
import terrier from "./assets/bu-chess-logo.png";
import cassarole from "./assets/cassarole.jpg";
import chesspiece from "./assets/chesspiece.jpg";

// Define member images array for reuse
const memberImages = [
  cassarole,  
  terrier,    
  chesspiece,
  cassarole,  
  terrier,    
  cassarole,  
  terrier,    
  cassarole   
];

function AboutUs() {
  return (
    <>
      <ShrinkOnScroll
        threshold={300}
        largeSize="350px"
        smallSize="100px"
        className="d-flex flex-row justify-content-end"
        shrink={false}
      >
        <img src={terrier} alt="logo" style={{ height: "50%" }} />
        <span style={{ fontSize: "30%" }}>BU CHESS</span>
      </ShrinkOnScroll>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem", width: "100%" }}>
        {/* Large rectangular card */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "#f8f8f8",
          borderRadius: "20px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          width: "880px",
          maxWidth: "120vw",
          minHeight: "180px",
          marginTop: "100px", 
          marginBottom: "3.5rem",
          overflow: "hidden"
        }}>
          <img src={terrier} alt="profile-large" style={{ width: "200px", height: "180px", objectFit: "cover", borderRadius: "20px 0 0 20px" }} />
          <div style={{
            background: "#fff",
            borderRadius: "0 20px 20px 0",
            padding: "2rem",
            width: "100%",
            boxSizing: "border-box",
            textAlign: "left",
            fontSize: "1.2rem",
            color: "#333",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "180px"
          }}>
            <strong style={{ fontSize: "1.5rem" }}>BU Chess Club</strong>
            <p style={{ marginTop: "1rem" }}>Welcome to the BU Chess Club! We are passionate about chess and building a vibrant community. Join us for tournaments, events, and more. (Dummy text)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>

          </div>
        </div>
        {/* E board cards: 2 rows of 3, 1 row of 1 */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {/* First row */}
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
            {[1,2,3].map((i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#f8f8f8",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                width: "280px",
                padding: "1.5rem"
              }}>
                <img src={memberImages[i-1]} alt={`profile-${i}`} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }} />
                <div style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1rem",
                  width: "100%",
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "#333"
                }}>
                  <strong>Member {i}</strong>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
                </div>
              </div>
            ))}
          </div>
          {/* Second row */}
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
            {[4,5,6].map((i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#f8f8f8",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                width: "280px",
                padding: "1.5rem"
              }}>
                <img src={memberImages[i-1]} alt={`profile-${i}`} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }} />
                <div style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1rem",
                  width: "100%",
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "#333"
                }}>
                  <strong>Member {i}</strong>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
                </div>
              </div>
            ))}
          </div>
          {/* Third row: one card left-aligned */}
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#f8f8f8",
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              width: "280px",
              padding: "1.5rem"
            }}>
              <img src={memberImages[6]} alt="profile-7" style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }} />
              <div style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "1rem",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "center",
                fontSize: "1rem",
                color: "#333"
              }}>
                <strong>Member 7</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;