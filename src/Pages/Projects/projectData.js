import peteyeImage from "../../Components/Images/peteye.petproject.webp";
import text2imageImage from "../../Components/Images/text2imageproject.webp";

export const projectsData = [
    {
      id: 1,
      title: "Peteye Web Application",
      description: "*Peteye* is a comprehensive pet monitoring and management web application designed to enhance pet care through smart technology. The frontend of the application is built with **HTML, CSS, JavaScript, React.js, and Tailwind CSS**, ensuring a seamless, responsive, and user-friendly experience.  Key features include real-time pet tracking, health monitoring, and an intuitive dashboard for pet owners to manage their pets’ activities efficiently. The clean and interactive UI enhances usability, making it easier for users to navigate and access essential pet-related data effortlessly.  With a modern tech stack and optimized performance, **Peteye** delivers a visually appealing and highly functional interface that aligns with the needs of pet owners, ensuring a smooth and engaging user experience.",
      langUsed: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Redux"],
      image: peteyeImage,
      liveLink: "https://peteye.pet/",
      githubLink: "https://peteye.pet/",
    },
    {
      id: 2,
      title: "Text-to-Image Generator",
      description: "**Text2Image Generation** is a platform that utilizes **HTML, Tailwind CSS, and JavaScript** to provide a seamless text-to-image generation experience. It integrates the **Hugging Face Text-to-Image Generator API**, allowing users to convert textual descriptions into AI-generated images effortlessly. The frontend is designed with a clean and responsive UI, ensuring smooth user interaction. The modal system is efficiently connected to fetch and display generated images dynamically. This project demonstrates API integration skills and a user-friendly interface for AI-powered image generation.",
      langUsed: ["HTML", "CSS", "JavaScript"],
      image: text2imageImage,
      liveLink: "https://text2image-generation.netlify.app/",
      githubLink: "https://github.com/Mohitkuril/Text2ImageGeneration",
    },

  ];
  