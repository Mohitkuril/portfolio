/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/MovingBorder/Moving-Border";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="group relative flex flex-col items-center justify-start gap-[1vh] rounded-2xl md:rounded-[1vw]  border border-slate-800  bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] w-[90%] md:w-[28vw] max-h-[45vh] md:max-h-[50vh] overflow-hidden">
      {/* Image container */}
      <div className="w-full h-[50%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill rounded-tl-2xl rounded-tr-2xl md:rounded-tl-[1vw] md:rounded-tr-[1vw]"
        />
      </div>

      {/* Project details */}
      <div className="relative flex flex-col items-start justify-start gap-[1vh] w-full py-[2vh] px-[3vw] md:py-[2vh] md:px-[1vw]">
        <h2 className="text-sm">#{project.langUsed.join("- ")}</h2>
        <h2 className="text-[clamp(1rem,1.5vw,5rem)] font-bold">
          {project.title}
        </h2>
        <p className="text-[clamp(.9rem,1vw,3.5rem)] line-clamp-2">
          {project.description}
        </p>

        {/* Hover Overlay for Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex gap-4 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            {/* Live Button */}
            <Button
              as="a"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="0.375rem"
              mobileWidth="20vw"
              mobileHeight="5vh"
              desktopWidth="7vw"
              desktopHeight="7vh"
              className="bg-blue-500 text-white hover:bg-gray-900 text-base"
              duration={3800}
            >
              Live
            </Button>

            {/* GitHub Button */}
            <Button
              as="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="0.375rem"
              mobileWidth="20vw"
              mobileHeight="5vh"
              desktopWidth="7vw"
              desktopHeight="7vh"
              className="bg-gray-800 text-white hover:bg-gray-900 text-base"
              duration={4000}
              // borderClassName="bg-[radial-gradient(var(--gray-600)_40%,transparent_60%)]"
            >
              GitHub
            </Button>

            {/* Details Button */}
            <Button
              onClick={() => navigate(`/project/${project.id}`)}
              borderRadius="0.375rem"
              mobileWidth="20vw"
              mobileHeight="5vh"
              desktopWidth="7vw"
              desktopHeight="7vh"
              className="bg-green-500 text-white hover:bg-gray-900 text-base"
              duration={4200}
              // borderClassName="bg-[radial-gradient(var(--green-400)_40%,transparent_60%)]"
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
