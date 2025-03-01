import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "./projectData";
import { Button } from "../../Components/MovingBorder/Moving-Border";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate();

  // Find the project by ID
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center text-red-500">Project not found!</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-[#020617] text-white pt-[15vh]">
      <div className="w-[90%] md:w-[80%] flex flex-col gap-[3vh] bg-gray-900 p-[5vw] md:p-[1.5vw] rounded-lg shadow-lg">
        <Button
          onClick={() => navigate(-1)}
          borderRadius="0.375rem"
          mobileWidth="40vw"
          mobileHeight="5vh"
          desktopWidth="12vw"
          desktopHeight="8vh"
          className="bg-white-500 text-white font-bold hover:bg-gray-900 text-base"
          duration={4200}
        >
          Back to Projects
        </Button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
        <p className="mt-2 text-gray-300">{project.description}</p>
        <h3 className="mt-4 text-yellow-400">Technologies Used:</h3>
        <p>{project.langUsed.join(", ")}</p>

        {/* Links */}
        <div className="mt-6 flex gap-4">
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
            className="bg-white-500 text-white font-bold hover:bg-gray-900 text-base"
            duration={4200}
          >
            Live
          </Button>
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
            className="bg-white-500 text-white font-bold hover:bg-gray-900 text-base"
            duration={4200}
          >
            GitHub
          </Button>
        </div>

        {/* Back Button */}
      </div>
    </div>
  );
};

export default ProjectDetails;
