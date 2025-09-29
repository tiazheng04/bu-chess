import { useState, useEffect, ReactNode } from "react"; // import React hooks and types

// props are kinda like varariables that you pass through the component (like the value you pass into functions)
type Props = {
  children: ReactNode; // content inside the component that we want to resize
  threshold?: number; // scroll distance in px where max shrinking is gonna be
  largeSize?: string; // starting height of the object size before any scroll
  smallSize?: string; // ending height of the object after reaching threshold scroll distance
  className?: string;
  largePadding?: string; // padding when the component is large
  smallPadding?: string; // padding when the component is small
  shrink?: boolean,
};

function ShrinkOnScroll({
  //default values for props if none are provided
  children,
  threshold = 200,
  largeSize = "80px",
  smallSize = "40px",
  largePadding = "8vw",
  smallPadding = "2vw",
  className = "d-flex align-items flex-row align-items-center",
  shrink = true,
  
}: Props) {
  // state to store the current height of the component as a string
  const [height, setHeight] = useState(largeSize);
  const [paddingRight, setPaddingRight] = useState(largePadding);
  const [isSticky, setIsSticky]       = useState(false);
  //make the logo fixed once it is in the right location


  // helper function to convert "80px" => 80 (strip "px" and parse as number), we need this to calculate the dynamic distance below,,,,
  const parsePx = (value: string) => parseInt(value.replace("px", ""));
  const parseNum = (value: string) => parseFloat(value.replace(/[^0-9.]/g, ""));

  // alright so the component is loaded and this is the stuff that should be happening with the component at each moment
  useEffect(() => {

    if (!shrink) {
      setHeight(smallSize);
      setPaddingRight(smallPadding);
      setIsSticky(true);
      return; // do NOT add scroll listener
    }

    // function that will run whenever user scrolls
    const handleScroll = () => {
      const scrollY = window.scrollY; // how far down the page we've scrolled (in px)
      const maxScroll = threshold; // the max scroll position we care about (we rly dont need this variaable but wtevs)

      // parsing for math
      const large = parsePx(largeSize);
      const small = parsePx(smallSize);
      const largeP = parseNum(largePadding);
      const smallP = parseNum(smallPadding);

      // clamp scrollY between 0 and maxScroll (so we don't go past limits)
      //alright i think  this is so that we don't get negative values for the reminaing pixel distance values when doing math
      const clampedScroll = Math.min(Math.max(scrollY, 0), maxScroll);

      // 0 = top of page, 1 = reached threshold
      //little percentage equation to calculate the progress of the scroll
      const progress = clampedScroll / maxScroll;

      setIsSticky(scrollY >= threshold); // set sticky state based on scroll position

      // calculate new height by doing math (just look at the math equation, i'm sure dont need to explain it)
      // the more you scroll, the closer it gets to "small" size
      const newHeight = large - (large - small) * progress;

      // update the height state with the calculated height, we got our beautiful pixels string back
      setHeight(`${newHeight}px`);

      const newP = largeP - (largeP - smallP) * progress;
      setPaddingRight(`${newP}vw`);
    };

    // add scroll event listener to window, and so every time we scroll, we are gonna call the handleScroll function (i love copilot autofill)
    window.addEventListener("scroll", handleScroll);

    // call handleScroll right away so it sets initial size based on current scroll position
    handleScroll();

    //ok so when this component is out of the screen view, it unmounts i think which means we need to remove the event listener so we don't get memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, largeSize, smallSize, largePadding, smallPadding, shrink]); //these are dependencies that will trigger the useEffect function to run again if they change

  return (
    // return the div with the dynamic height
    <div
      className = {className} // bootstrap
      style={{
        height: height, // set dynamic height based on scroll
        fontSize: height, // set font size to match height for dynamic scaling
        // paddingRight: paddingRight,
        right: shrink ? paddingRight : smallPadding,
        position: shrink ? "sticky" : "fixed",
        top: isSticky ? "1vh" : undefined,
        marginLeft: "auto",
        width: "fit-content",
        zIndex: 1001, // make sure it stays on top of other content
        
      }}
    >
      {children}
    </div>
  );
}

export default ShrinkOnScroll;
