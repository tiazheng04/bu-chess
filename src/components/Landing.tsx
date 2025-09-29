import React from "react";

type LandingProps = {
  stroke?: string;
  strokeWidth?: number;
  imageUrl?: string;
};

const Landing: React.FC<LandingProps> = ({
stroke = "black",
strokeWidth = 2,
imageUrl,
}) => {
  return (
<svg
      width="100vw"
      height="100vh"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ display: "block", position: "absolute" }}         // avoids scrollbars from inline gaps
    >
      <line
        x1="100" y1="8.5"                    // top-right
        x2="0"   y2="100"                  // bottom-left
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"  // keeps stroke width constant on resize
      />
    </svg>
  );
};

export default Landing;
