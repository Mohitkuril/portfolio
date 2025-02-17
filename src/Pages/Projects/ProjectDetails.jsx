import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "./projectData";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate();

  // Find the project by ID
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center text-red-500">Project not found!</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-[#020617] text-white p-6">
      <div className="max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg">
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

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
