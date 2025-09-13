import terrier from "../assets/bu-chess-logo.png";

// These values should match the 'small' values from ShrinkOnScroll as this is the persistent state that remains on the other pages
const SMALL_HEIGHT = 40; // px, from ShrinkOnScroll default
const SMALL_FONT_SIZE = 40; // px, matches height for scaling
const SMALL_PADDING_RIGHT = 2; // vw, from ShrinkOnScroll default

function PersistentLogo() {
  return (
    <div
      style={{
        height: `${SMALL_HEIGHT}px`,
        fontSize: `${SMALL_FONT_SIZE}px`,
        paddingRight: `${SMALL_PADDING_RIGHT}vw`,
        display: "flex",
        alignItems: "center",
        width: "fit-content",
      }}
    >
      <img
        src={terrier}
        alt="logo"
        style={{ height: "50%", maxHeight: "100%", objectFit: "contain" }}
      />
      <span style={{ fontSize: "30%", marginLeft: 8 }}>BU CHESS</span>
    </div>
  );
}

export default PersistentLogo;
