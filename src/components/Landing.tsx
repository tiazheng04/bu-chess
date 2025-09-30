import React from "react";
import { ReactTyped }  from 'react-typed';

type LandingProps = {
  stroke?: string;
  strokeWidth?: number;
  imageUrl?: string;
};

const Landing: React.FC<LandingProps> = ({
stroke = "red",
strokeWidth = 1,
imageUrl,
}) => {
  return (
<svg
      width="100vw"
      height="100vh"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block", position: "absolute" }}         // avoids scrollbars from inline gaps
    >
    <defs>
        {/* Define the upper triangle region */}
        <clipPath id="upper-triangle">
          <polygon points="0,0 105,8.5 -5,100 0,100" />
        </clipPath>
                {/* Define the lowertriangle region */}
        <clipPath id="lower-triangle">
          <polygon points=" 100,8.5 0,100 100,100" />
        </clipPath>
        <clipPath id="logo-box">
          <polygon points=" 40,69.5, 59.5,40 95,40 95,97 40,97" />
        </clipPath>

            <style>
      {`:root{ --bu-dark:#1f2937; --bu-light:#ffffff; --bu-red:#cc2b2b; }`}
    </style>

    {/* ADDED: chessboard pattern (responsive, crisp) */}
    <pattern
      id="chessboard"              /* ADDED */
      x="0" y="0"
      width="4" height="4"         /* each tile = 4x4 viewBox units */
      patternUnits="userSpaceOnUse"
    >
      <rect x="0" y="0" width="4" height="4" fill="var(--bu-light)" />
      <rect x="0" y="0" width="2" height="2" fill="var(--bu-dark)" />
      <rect x="2" y="2" width="2" height="2" fill="var(--bu-dark)" />
    </pattern>

    {/* ADDED: soft fade so pattern doesn't fight the headline */}
    <linearGradient id="board-fade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"  stopColor="white" stopOpacity="0.0" />
      <stop offset="55%" stopColor="white" stopOpacity="0.0" />
      <stop offset="100%" stopColor="white" stopOpacity="1.0" />
    </linearGradient>
    <mask id="board-mask">        {/* ADDED */}
      <rect x="0" y="0" width="100" height="100" fill="url(#board-fade)" />
    </mask>

        {/* === ADDED: dark overlay gradient for readability === */}
        <linearGradient id="hero-overlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.35" />
        </linearGradient>
    </defs>

    {/* Image in the upper triangle*/}
      {imageUrl && (
        <image
          href={imageUrl}
          x = "-3"
          y= "-4"
          width="85"
          height="115"
          clipPath="url(#upper-triangle)"
          style={{
          opacity: 0.9,          // transparency
           filter: "saturate(0.8)" // lower saturation
           
  }}
        />

        )}   
      <rect
        x="0" y="0" width="100" height="115"
        clipPath="url(#upper-triangle)"
        fill="url(#hero-overlay)"                 /* ADDED */
        pointerEvents="none"                      /* ADDED: don't block clicks */
      />
          <rect
    x="0" y="0" width="100" height="100"
    fill="black"             /* ADDED */
    clipPath="url(#lower-triangle)"     /* keeps it inside triangle */
    mask="url(#board-mask)"             /* soft fade to the corner */
    opacity="0.25"                      /* tone it down; 0.2–0.35 works well */
    style={{ vectorEffect: "non-scaling-stroke" }}
  />


    {/* Diagonal line from top-left to bottom-right */}
    <line
        x1="105" y1="8.5"                    // top-right
        x2="-5"   y2="100"                  // bottom-left
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"  // keeps stroke width constant on resize

    />
        <line
          x1="42" y1="45"
          x2="61" y2="45"
          opacity="0.7"
          stroke="white" 
          strokeWidth="0.15"

        />
        <line
          x1="61" y1="45"
          x2="95" y2="45"
          opacity = "0.5"
          stroke="black" 
          strokeWidth="0.15"

        />
        <line
          x1="42" y1="45"
          x2="42" y2="61"
          opacity="0.7"
          stroke="white" 
          strokeWidth="0.15"

        />
        <line
          x1="42" y1="61"
          x2="42" y2="74.5"
          opacity = "0.5"
          stroke="black" 
          strokeWidth="0.15"
        />

        <line
          x1="42" y1="74.5"
          x2="50" y2="74.5"
          opacity = "0.5"
          stroke="black" 
          strokeWidth="0.15"
        />   
        <line
          x1="95" y1="39"
          x2="95" y2="51"
          opacity = "0.5"
          stroke="black" 
          strokeWidth="0.15"

        />
        <line
          x1="95" y1="51"
          x2="88" y2="55"
          opacity = "0.5"
          stroke="black" 
          strokeWidth="0.15"

        />
        {/* <line
          x1="95" y1="39"
          x2="88" y2="35"
          opacity = "0.5"
          stroke="black" 
          strokeWidth="0.15"

        /> */}
        <text
        x="69" y="44"               /* position in viewBox units */
        fontSize="0.25vh"            /* responsive to height */
        fill="#111827"
        >
          Wednesday | 7-10pm
        </text>     

        <text
          x="65" y="47"               /* position in viewBox units */
          fontSize="0.25vh"            /* responsive to height */
          fill="#111827"
        >
          GSU Academy Room (GSU 124)
        </text>     

        <foreignObject
            x="58" 
            y="41" 
            width="100" 
            height="100" 
        >
            <ReactTyped 
            strings={[
              'Welcome to',
              'Since 2025',
              'Join Us @'
  ]}
            typeSpeed={200} 
            backSpeed={100}
            startDelay={50}
            loop = {true}
            style={{ fontSize: "0.75vh",  }}
            />
        </foreignObject>


    </svg>
  );
};

export default Landing;
