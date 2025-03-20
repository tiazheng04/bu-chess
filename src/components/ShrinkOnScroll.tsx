import { useState, useEffect, ReactNode } from "react";

// define the props type: anything inside the component (children) + optional threshold
type Props = {
  children: ReactNode;  // whatever you pass inside the component (image, text, div, etc.)
  threshold?: number;   // optional scroll distance in pixels before shrinking happens
  largeSize?: string;          // size before scrolling
  smallSize?: string;          // size after shrinking

};

function ShrinkOnScroll({ children, threshold = 50, largeSize = "80px", smallSize = "40px" }: Props) {
  // state to track if the component should shrink or stay normal
  const [small, setSmall] = useState(false);

  // this effect will run once when the component mounts
  useEffect(() => {
    // event handler: checks if the user has scrolled past the threshold
    const handleScroll = () => {
      setSmall(window.scrollY > threshold);
    };

    // add scroll event listener when the component loads
    window.addEventListener("scroll", handleScroll);

    // remove the event listener when the component unmounts (cleanup)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]); // re-run effect if threshold value ever changes

  return (
    // wrapper div that applies shrinking height + transition styles
    <div
      className="d-flex align-items-center transition-all" // bootstrap flexbox + alignment
      style={{
        height: small ? smallSize : largeSize, // if scrolled past threshold = shrink
        transition: "2s",              // smooth 0.3s animation on height change
      }}
    >
      {/* render the children inside the shrinking div */}
      {children}
    </div>
  );
}

export default ShrinkOnScroll;
