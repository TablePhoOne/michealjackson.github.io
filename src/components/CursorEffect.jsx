import React, { useEffect } from "react";

function CursorEffect() {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");

    // Track mouse movement
    const mouseMoveHandler = (e) => {
      cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      id="cursor"
      style={{
        position: "absolute",
        width: "300px", // Size of the glowing effect
        height: "300px", // Size of the glowing effect
        background: "rgba(155, 77, 150, 0.3)", // Light purple color
        filter: "blur(40px)", // Blur effect
        pointerEvents: "none", // Prevent it from blocking any clicks
        zIndex: "-1", // Position the cursor behind the text
        borderRadius: "50%", // Optional: you can remove this if you want an irregular shape
        transition: "all 0.2s ease", // Smooth transition for following effect
        
      }}
    ></div>
  );
}

export default CursorEffect;
