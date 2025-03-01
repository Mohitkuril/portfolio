import React from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../Projects/projectData";
import ProjectCard from "../Projects/ProjectCard";
import usePageTitle from "../../Components/UseTitle";

export default function MyProjects() {
  // usePageTitle("My Projects");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white overflow-x-hidden max-w-full pt-[15vh] bg-[rgb(2_6_3_/_var(--tw-bg-opacity))]">
      <div className="flex flex-col items-center justify-center gap-[2vh]">
        <h1 className="text-[clamp(2.5rem,3vw,8rem)] md:text-[clamp(3rem,4vw,10rem)] text-[#688ef5] font-[650] leading-none">
          My Projects
        </h1>
        <p className="text-[clamp(1rem,1.2vw,5rem)] md:text-[clamp(1.5rem,1.5vw,5rem)] mb-[2vh]">
          Here are some of my projects I have done.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start w-[90%] gap-[6vw] md:gap-[2vw]">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="mt-[2vh] w-[40vw] h-[5vh]  md:w-[10vw] md:h-[6vh] text-black font-bold rounded relative z-10 bg-white"
          style={{
            backgroundImage:
              "linear-gradient(#fff, #fff), linear-gradient(90deg, hsl(var(--color-1)), hsl(var(--color-5)), hsl(var(--color-3)), hsl(var(--color-4)), hsl(var(--color-2)))",
            border: "calc(.08* 1rem) solid transparent",
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
        >
          More Projects
        </button>
      </div>
    </div>
  );
}
