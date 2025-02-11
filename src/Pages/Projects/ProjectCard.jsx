// src/Components/ProjectCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative flex flex-col items-center justify-center gap-[1vh] rounded-2xl md:rounded-[1vw] border border-white bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] w-[90%] md:w-[28vw] overflow-hidden">
      {/* Image container with hover overlay */}
      <div className="w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-tl-2xl rounded-tr-2xl md:rounded-tl-[1vw] md:rounded-tr-[1vw]"
        />
      </div>

      {/* Project details */}
      <div className="relative flex flex-col items-start justify-start gap-[1vh] w-full py-[2vh] px-[3vw] md:py-[2vh] md:px-[1vw]">
        <h2 className="text-sm">#{project.langUsed.join("- ")}</h2>
        <h2 className="text-[clamp(1rem,1.5vw,5rem)]">{project.title}</h2>
        <p className="text-[clamp(.9rem,1vw,3.5rem)] line-clamp-2">{project.description}</p>

        {/* Hover Overlay for Links */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Live</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">GitHub</a>
          </div>

          {/* View Details Button */}
          <button
            onClick={() => navigate(`/project/${project.id}`)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
