import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyProjects() {
    const navigate = useNavigate();
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      langUsed: ["HTML", "CSS", "JavaScript"],
      image:
        "https://imgs.search.brave.com/fHBaP6GW8n2RKErhzOC5nVdlEpi7Q4eXh5EtkT9Af7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEwL05hcnV0/by12cy1CbGVhY2gu/anBn",
      liveLink: "https://github.com/mohit-kuril",
      githubLink: "https://github.com/mohit-kuril",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      langUsed: ["HTML", "CSS", "JavaScript"],
      image:
        "https://imgs.search.brave.com/fHBaP6GW8n2RKErhzOC5nVdlEpi7Q4eXh5EtkT9Af7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEwL05hcnV0/by12cy1CbGVhY2gu/anBn",
      liveLink: "https://github.com/mohit-kuril",
      githubLink: "https://github.com/mohit-kuril",
    },
    {
      title: "Project 3",
      description:
        "Description of Project 3 Description of Project 6 Description of Project 3 Description of Project 3 Description of Project 3 Description of Project 3",
      langUsed: ["HTML", "CSS", "JavaScript"],
      image:
        "https://imgs.search.brave.com/fHBaP6GW8n2RKErhzOC5nVdlEpi7Q4eXh5EtkT9Af7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEwL05hcnV0/by12cy1CbGVhY2gu/anBn",
      liveLink: "https://github.com/mohit-kuril",
      githubLink: "https://github.com/mohit-kuril",
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden max-w-full pt-[15vh] bg-[rgb(2_6_3_/_var(--tw-bg-opacity))]">
      <div className="flex flex-col items-center justify-center gap-[2vh]">
        <h1 className="text-[clamp(2.5rem,3vw,8rem)] md:text-[clamp(3rem,4vw,10rem)] font-[650] leading-none">My Projects</h1>
        <p className="text-[clamp(1rem,1.2vw,5rem)] md:text-[clamp(1.5rem,1.5vw,5rem)]">
          Here are some of my projects I have done.
        </p>
        <div className="flex flex-wrap items-center justify-center w-[90%] gap-[6vw] md:gap-[2vw]">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col items-center justify-center gap-[1vh] rounded-2xl md:rounded-[1vw] border border-white bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] w-[90%] md:w-[28vw] overflow-hidden"
            >
              {/* Image container with hover overlay */}
              <div className=" w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-tl-2xl rounded-tr-2xl md:rounded-tl-[1vw] md:rounded-tr-[1vw]"
                />
              </div>
              {/* Project details */}
              <div className="relative flex flex-col items-start justify-start gap-[1vh] w-full py-[2vh] px-[3vw] md:py-[2vh] md:px-[1vw]">
                <h2 className="text-sm">#{project.langUsed.join("- ")}</h2>
                <h2 className="text-[clamp(1rem,1.5vw,5rem)]">
                  {project.title}
                </h2>
                <p className="text-[clamp(.9rem,1vw,3.5rem)] line-clamp-2">
                  {project.description}
                </p>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
