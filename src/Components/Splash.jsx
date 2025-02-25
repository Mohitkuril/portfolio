import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Splash = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Set initial dash offset for all paths
    const paths = elementRef.current.querySelectorAll("path");
    paths.forEach((path) => {
      path.setAttribute("stroke-dasharray", anime.setDashoffset(path));
    });

    // Main line drawing animation
    const lineDrawing = anime({
      targets: elementRef.current.querySelectorAll("path"),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: (el, i) => i * 250,
      direction: "alternate",
      loop: true,
    });

    // Scale animation
    anime({
      targets: elementRef.current.querySelector(".mohit-text"),
      scale: [0.95, 1.05],
      duration: 3000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });

    // Glow effect animation
    anime({
      targets: elementRef.current.querySelector(".glow-effect"),
      opacity: [0.3, 0.7],
      duration: 2000,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });

    // Cleanup function
    return () => {
      anime.remove(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="flex justify-center w-full items-center h-screen bg-black relative overflow-hidden"
    >
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none glow-effect" />
      <svg
        className="w-[90vw] -ml-[8vw] md:ml-0  h-[30vh] md:w-[500px] md:h-[200px] mohit-text"
        viewBox="0 0 500 200"
        style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
      >
        <g
          className="fill-none stroke-white"
          style={{ strokeWidth: "4", strokeLinecap: "round" }}
        >
          {/* M */}
          <path d="M 50,150 L 50,50 L 90,100 L 130,50 L 130,150" />
          {/* O */}
          <path d="M 160,100 C 160,60 180,40 210,40 C 240,40 260,60 260,100 C 260,140 240,160 210,160 C 180,160 160,140 160,100" />
          {/* H */}
          <path d="M 290,150 L 290,50 M 290,100 L 370,100 M 370,150 L 370,50" />
          {/* I */}
          <path d="M 400,150 L 400,50" />
          {/* T */}
          <path d="M 430,50 L 490,50 M 460,50 L 460,150" />
        </g>
      </svg>
    </div>
  );
};

export default Splash;
