import { useState, useEffect, ReactNode } from "react"; // import React hooks and types

// props are kinda like varariables that you pass through the component (like the value you pass into functions)
type Props = {
  children: ReactNode; // content inside the component that we want to resize
  threshold?: number; // scroll distance in px where max shrinking is gonna be
  largeSize?: string; // starting height of the object size before any scroll
  smallSize?: string; // ending height of the object after reaching threshold scroll distance
  className?: string;
};

function ShrinkOnScroll({
  //default values for props if none are provided
  children,
  threshold = 200,
  largeSize = "80px",
  smallSize = "40px",
  className = "d-flex align-items flex-row align-items-center",
  
}: Props) {
  // state to store the current height of the component as a string
  const [height, setHeight] = useState(largeSize);

  // helper function to convert "80px" => 80 (strip "px" and parse as number), we need this to calculate the dynamic distance below,,,,
  const parsePx = (value: string) => parseInt(value.replace("px", ""));

  // alright so the component is loaded and this is the stuff that should be happening with the component at each moment
  useEffect(() => {
    // function that will run whenever user scrolls
    const handleScroll = () => {
      const scrollY = window.scrollY; // how far down the page we've scrolled (in px)
      const maxScroll = threshold; // the max scroll position we care about (we rly dont need this variaable but wtevs)

      // parsing for math
      const large = parsePx(largeSize);
      const small = parsePx(smallSize);

      // clamp scrollY between 0 and maxScroll (so we don't go past limits)
      //alright i think  this is so that we don't get negative values for the reminaing pixel distance values when doing math
      const clampedScroll = Math.min(Math.max(scrollY, 0), maxScroll);

      // 0 = top of page, 1 = reached threshold
      //little percentage equation to calculate the progress of the scroll
      const progress = clampedScroll / maxScroll;

      // calculate new height by doing math (just look at the math equation, i'm sure dont need to explain it)
      // the more you scroll, the closer it gets to "small" size
      const newHeight = large - (large - small) * progress;

      // update the height state with the calculated height, we got our beautiful pixels string back
      setHeight(`${newHeight}px`);
    };

    // add scroll event listener to window, and so every time we scroll, we are gonna call the handleScroll function (i love copilot autofill)
    window.addEventListener("scroll", handleScroll);

    // call handleScroll right away so it sets initial size based on current scroll position
    handleScroll();

    //ok so when this component is out of the screen view, it unmounts i think which means we need to remove the event listener so we don't get memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, largeSize, smallSize]); //these are dependencies that will trigger the useEffect function to run again if they change

  return (
    // return the div with the dynamic height
    <div
      className = {className} // bootstrap
      style={{
        height: height, // set dynamic height based on scroll
        fontSize: height, // set font size to match height for dynamic scaling
      }}
    >
      {children}
    </div>
  );
}

export default ShrinkOnScroll;
