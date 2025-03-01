import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Svg from "../../Components/Images/Programming-amico.svg";
import usePageTitle from "../../Components/UseTitle";
import resume from "../../Components/Images/Mohit_resumee.pdf";
import { Button } from "../../Components/MovingBorder/Moving-Border";

export default function Hero() {
  usePageTitle("Home Page");
  const navigate = useNavigate();

  const socialLinks = [
    {
      link: "https://github.com/Mohitkuril",
      icon: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/in/mohit-kuril-84884926b",
      icon: <FaLinkedin />,
    },
    {
      icon: <FaXTwitter />,
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Mohit_Kuril_Resume.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-[12vh] min-h-screen w-full max-w-full overflow-hidden text-white">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-around w-[100vw] mt-[6vh] md:mt-[20vh]">
          <div className="flex flex-col gap-[1.5vh] w-[90%] md:w-1/2">
            {/* <div className="text-[clamp(1rem,1vw,3rem)] backdrop-blur-[40px] bg-transparent flex items-center justify-center rounded-[10vw] w-[40vw] md:w-[12vw] py-[1.5vh] px-[2vw] overflow-hidden border-2 border-gray-400 header-border">
              Hey there!🙂
            </div> */}
            <h1 className="text-[clamp(3rem,4vw,10rem)] capitalize">
              I&apos;m Mohit kuril
            </h1>
            <h2 className="text-[clamp(1.5rem,1.5vw,5rem)]">
              I am a Web App Developer in React.js
            </h2>
            <p className="text-[clamp(1rem,1vw,3.5rem)]">
              Welcome to my portfolio! I hope you enjoy your visit. I specialize
              in Front-End development with React.js. I have worked on various
              projects, including a Real Link-Shortener, E-Commerce APIs,
              React-based Website Design and Development, and more. I am
              passionate about learning new technologies and building solutions
              that make a difference. Thank you for visiting my portfolio! I
              hope you like my work. Happy coding! 🧑🏻‍💻
            </p>
            <div className="flex items-center md:gap-[2vw] gap-[5vw] mt-[2vh]">
              {socialLinks.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[clamp(1.5rem,1.5vw,5rem)]"
                >
                  {socialLink.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-[4vw] md:gap-[1.5vw] mt-[4vh] md:mt-[2vh]">
              <Button
                onClick={handleDownloadResume}
                // className="text-sm md:text-[clamp(1rem,1vw,3.5rem)] px-[4vw] py-[1.5vh] md:px-[2vw] md:py-[2vh] text-white font-bold rounded-full border-2 border-gray-400 overflow-hidden transition duration-300 hover:scale-105"
                borderRadius="1rem"
                mobileWidth="50vw"
                mobileHeight="6vh"
                desktopWidth="15vw"
                desktopHeight="8vh"
                className="bg-white-500 text-white font-bold hover:bg-gray-900 text-base"
                duration={4200}
              >
                Download Resume
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                // className="text-sm md:text-[clamp(1rem,1vw,3.5rem)] px-[4vw] py-[1.5vh] md:px-[2vw] md:py-[2vh] text-white font-bold rounded-full border-2 border-gray-400 overflow-hidden transition duration-300 hover:scale-105"
                borderRadius="1rem"
                mobileWidth="50vw"
                mobileHeight="6vh"
                desktopWidth="15vw"
                desktopHeight="8vh"
                className="bg-white-500 text-white font-bold hover:bg-gray-900 text-base"
                duration={4200}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div>
            <img src={Svg} alt="svg" className="h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
