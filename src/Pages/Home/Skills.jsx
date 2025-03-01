import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import htmlIcon from "../../Components/Images/html.svg";
import cssIcon from "../../Components/Images/css.svg";
import jsIcon from "../../Components/Images/javascript.svg";
import tailwindIcon from "../../Components/Images/tailwind-css.svg";
import gitIcon from "../../Components/Images/git.svg";
import githubIcon from "../../Components/Images/github.svg";
import bootstrapIcon from "../../Components/Images/bootstrap.svg";
import reactIcon from "../../Components/Images/reactjs.svg";
import npmIcon from "../../Components/Images/npm.svg";
import { Button } from "../../Components/MovingBorder/Moving-Border";

export default function Skills() {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const skills = [
    { name: "HTML", img: htmlIcon },
    { name: "CSS", img: cssIcon },
    { name: "JavaScript", img: jsIcon },
    { name: "Tailwind", img: tailwindIcon },
    { name: "Git", img: gitIcon },
    { name: "GitHub", img: githubIcon },
    { name: "Bootstrap", img: bootstrapIcon },
    { name: "React", img: reactIcon },
    { name: "Npm", img: npmIcon },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen text-white overflow-hidden max-w-full pt-[15vh]">
      <div className="flex flex-col items-center justify-center gap-[4vh] md:gap-[.5vh]">
        <h1
          className="text-[clamp(3rem,4vw,10rem)] font-[650] text-[#688ef5] "
          data-aos="fade-up"
        >
          Skills
        </h1>
        <div
          className="flex flex-wrap items-center justify-center gap-[6vw] md:gap-[4vw] w-[95%] relative"
          onMouseMove={handleMouseMove}
        >
          <div
            className="absolute pointer-events-none"
            // style={{
            //   top: spotlight.y,
            //   left: spotlight.x,
            //   width: 200,
            //   height: 200,
            //   background:
            //     "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 80%)",
            //   borderRadius: "50%",
            //   transform: "translate(-50%, -50%)",
            // }}
          />
          {skills.map((skill, index) => (
            <Button
              borderRadius="1rem"
              mobileWidth="26vw"
              mobileHeight="18vh"
              desktopWidth="15vw"
              desktopHeight="30vh"
              // className="bg-white-500 text-white font-bold hover:bg-gray-900 text-base"
              duration={9000}
              key={skill.name}
              className=" border border-slate-800 flex flex-col items-center justify-center gap-[1vh] backdrop-blur-[40px] bg-grey-990 rounded-[1.5vw] md:rounded-[.7vw] py-[1.5vh] px-[2vw] "
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <p className="flex items-center justify-center overflow-hidden">
                <img
                  className="w-[12vw] h-[15vw] md:w-[6vw] md:h-[6vw] object-fill"
                  src={skill.img}
                  alt={skill.name}
                />
              </p>
              <h2 className="text-sm md:text-[clamp(1rem,1.2vw,5rem)] font-[650]">
                {skill.name}
              </h2>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
