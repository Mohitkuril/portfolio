import { projectsData } from "./projectData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
      <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] pb-[5vh] md:pb-[10vh] overflow-hidden">
        <div className=" text-white overflow-x-hidden w-[90vw]">
          <div className="flex flex-col justify-start gap-[2vh]">
            <h1 className="text-[clamp(2.5rem,3vw,8rem)] md:text-[clamp(3rem,4vw,10rem)] font-[650] leading-none">
              My Projects
            </h1>
            <p className="text-[clamp(1rem,1.2vw,5rem)] md:text-[clamp(1.5rem,1.5vw,5rem)]">
              Here are some of my projects I have done.
            </p>
            <div className="flex flex-wrap items-center justify-center w-[100%] gap-[6vw] md:gap-[2vw]">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
