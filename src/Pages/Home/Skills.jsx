import React from "react";
import Icons from "../../Components/Icons";
import htmlIcon from "../../Components/Images/html.svg";
import cssIcon from "../../Components/Images/css.svg"
import jsIcon from "../../Components/Images/javascript.svg"
import tailwindIcon from "../../Components/Images/tailwind-css.svg"
import gitIcon from "../../Components/Images/git.svg"

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      img: htmlIcon,
    },
    {
      name: "CSS",
      img: cssIcon,
    },
    {
      name: "JavaScript",
      img: jsIcon,
    },

    {
      name: "Tailwind",
      img: "tailwindIcon",
    },
    {
      name: "Git",
      img: "gitIcon",
    },
    {
      name: "GitHub",
      img: "githubIcon",
    },

    {
      name: "Bootstrap",
      img: "bootstrapIcon",
    },
    {
      name: "React",
      img: "reactIcon",
    },
    {
      name: "Npm",
      img: "npmIcon",
    },
  ];

  const learningSkills = [
    {
      name: "TypeScript",
      img: "text",
    },
    {
      name: "Next.js",
      img: "text",
    },
    {
      name: "Node.js",
      img: "text",
    },
    {
      name: "MongoDB",
      img: "text",
    },
    {
      name: "MySQL",
      img: "text",
    },
  ];

  return (
    <div className=" min-h-screen text-white overflow-x-hidden max-w-full pt-[15vh]">
      <div className="flex flex-col items-center justify-center">
        <h1>Skills</h1>

        {skills.map((skill) => (
          <div key={skill.name}>
            <h2>{skill.name}</h2>
            <p className="border border-[#e5e7eb] ">
              <img src={skill.img} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
