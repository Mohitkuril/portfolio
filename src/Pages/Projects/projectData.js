import peteyeImage from "../../Components/Images/peteye.petproject.webp";
import text2imageImage from "../../Components/Images/text2imageproject.webp";
import weatherapp from "../../Components/Images/weatherapp.webp";
import DashboardImage from "../../Components/Images/Dashboard.webp";
import ChatWithPDF from "../../Components/Images/chatwithpdf.webp";

export const projectsData = [
  {
    id: 1,
    title: "Peteye Web Application",
    description:
      "Peteye is a comprehensive pet monitoring and management web application designed to enhance pet care through smart technology. The frontend of the application is built with HTML, CSS, JavaScript, React.js, and Tailwind CSS, ensuring a seamless, responsive, and user-friendly experience.  Key features include real-time pet tracking, health monitoring, and an intuitive dashboard for pet owners to manage their pets’ activities efficiently. The clean and interactive UI enhances usability, making it easier for users to navigate and access essential pet-related data effortlessly.  With a modern tech stack and optimized performance, Peteye delivers a visually appealing and highly functional interface that aligns with the needs of pet owners, ensuring a smooth and engaging user experience.",
    langUsed: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux"],
    image: peteyeImage,
    liveLink: "https://peteye.pet/",
    githubLink: "https://peteye.pet/",
  },
  {
    id: 2,
    title: "Text-to-Image Generator",
    description:
      "Text2Image Generation is a web-based platform that leverages HTML, Tailwind CSS, and JavaScript to provide a seamless text-to-image generation experience. By integrating the Hugging Face Text-to-Image Generator API, users can effortlessly convert textual descriptions into high-quality AI-generated images.  The platform features a clean, responsive, and modern UI, ensuring an intuitive user experience across devices. A dynamically connected modal system efficiently fetches and displays generated images in real time, enhancing usability without requiring page reloads. Smooth API integration, along with optimized error handling and performance improvements such as lazy loading and caching, ensures a fast and reliable experience.  This project demonstrates expertise in API integration, frontend development, and AI-powered image generation. Designed for scalability and future enhancements, potential upgrades include user authentication, image history, cloud storage, and editing tools, making it a robust solution for AI-driven creativity.",
    langUsed: ["HTML", "CSS", "JavaScript"],
    image: text2imageImage,
    liveLink: "https://text2image-generation.netlify.app/",
    githubLink: "https://github.com/Mohitkuril/Text2ImageGeneration",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "ClimateToTrack is a lightweight, responsive weather application built solely with HTML, CSS, and JavaScript. This project offers users the ability to quickly search for weather information in any city worldwide. The application communicates with a weather API to retrieve current data, providing real-time updates on temperature, humidity, and wind speed. With a focus on simplicity and usability, ClimateToTrack features a clean, intuitive interface designed to ensure a seamless experience for users on both desktop and mobile devices.The project emphasizes efficient performance and minimal design, eliminating unnecessary complexity while delivering essential weather details. Users simply enter a city name into the search bar and receive immediate weather information. The design incorporates responsive layout techniques to adapt to various screen sizes, making it accessible and user-friendly on smartphones, tablets, and desktop computers.",
    langUsed: ["HTML", "CSS", "JavaScript"],
    image: weatherapp,
    liveLink: "https://climatetotrack.netlify.app/",
    githubLink: "https://github.com/Mohitkuril/Weather-App",
  },
  {
    id: 4,
    title: "React Dashboard",
    description:
      "React Dashboard is a dynamic frontend-only application built with React, Redux, and Tailwind CSS, designed to simulate a collaborative workspace for managing teams, assigning tasks, and visualizing progress. It features a real-time drag-and-drop task board with circular dependency detection, performance charts like burndown and Gantt, and a dark/light theme toggle. The project structure emphasizes modularity with a clean component hierarchy, centralized state management using Redux slices, and reusable layouts for form and dashboard views.\n\nWhile the dashboard provides a comprehensive UI for planning and tracking, it functions entirely on the frontend without backend integration or real-time sync. It's a great demonstration of modern frontend architecture, advanced UI interactions, and stateful logic—ideal for showcasing frontend development skills.",
    langUsed: ["React", "Tailwind CSS", "JavaScript", "Redux", "Chart.js"],
    image: DashboardImage,
    liveLink: "https://reactdashboardhub.vercel.app/",
    githubLink: "https://github.com/Mohitkuril/react-dashboard",
  },
  {
    id: 5,
    title: "Chat With PDF",
    description: `Chat With PDF is an intelligent AI-powered web application that allows users to interactively query and understand the contents of PDF documents. Built using React, Tailwind CSS, and the Groq API, this tool extracts the text from uploaded PDFs using PDF.js and stores them in IndexedDB for persistent session handling. Once uploaded, users can ask contextual questions based on the document content, receiving fast and accurate responses generated by the LLaMA 4 model via Groq's powerful API.

The interface includes a sleek split-screen layout with a document viewer on one side and a conversational chat interface on the other, offering a seamless and intuitive user experience. It supports drag-and-drop uploads, displays upload progress, allows chat reset with a “Delete” button, and ensures smooth functionality across devices with a responsive design. Ideal for researchers, students, and professionals, Chat With PDF simplifies the process of understanding long and complex documents through real-time AI interaction.`,
    langUsed: ["React", "Tailwind CSS", "JavaScript", "Groq", "IndexedDB"],
    image: ChatWithPDF,
    liveLink: "https://talktomypdf.vercel.app/",
    githubLink: "https://github.com/Mohitkuril/chatwithpdf",
  },
];
