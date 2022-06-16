import React from "react";
import { useEffect, useState } from "react";

function WindowResize() {
    // creating the initial state
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      // Setting the new state
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    // when the event is triggered so is the new state which will render a new div
    window.addEventListener("resize", handleResize);
    // making sure we wont have an endless loop or a memory leak
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div>
      Rendered at {windowSize.width} x {windowSize.height}
    </div>
  );
}
