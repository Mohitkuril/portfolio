import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Svg from "../../Components/Images/Programming-amico.svg";
import usePageTitle from "../../Components/UseTitle";

export default function Hero() {
  usePageTitle("Home Page");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const socialLinks = [
    {
      link: "https://github.com/mohit-kuril",
      icon: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/in/mohit-kuril/",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/mohit_kuril/",
      icon: <FaXTwitter />,
    },
  ];

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-[12vh] min-h-screen w-full max-w-full overflow-hidden text-white">
        <div>
          <Header />
          <div className="flex flex-col md:flex-row items-center gap-[5vh] md:gap-0 justify-around w-[100vw] mt-[6vh] md:mt-[20vh]">
            <div className="flex flex-col gap-[1.5vh] w-[90%] md:w-1/2">
              {/* Hey there pill */}
              <div className="animate-pulse bg-gray-700 rounded-[10vw] w-[40vw] md:w-[12vw] h-[5vh] overflow-hidden" />

              {/* Name */}
              <div className="animate-pulse bg-gray-700 h-[clamp(3rem,4vw,10rem)] w-3/4 rounded-lg" />

              {/* Role */}
              <div className="animate-pulse bg-gray-700 h-[clamp(1.5rem,1.5vw,5rem)] w-2/3 rounded-lg" />

              {/* Description */}
              <div className="animate-pulse space-y-2">
                <div className="bg-gray-700 h-4 rounded w-full" />
                <div className="bg-gray-700 h-4 rounded w-[95%]" />
                <div className="bg-gray-700 h-4 rounded w-[90%]" />
                <div className="bg-gray-700 h-4 rounded w-[85%]" />
              </div>

              {/* Social Links */}
              <div className="flex items-center md:gap-[2vw] gap-[5vw] mt-[2vh]">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-700 w-8 h-8 rounded-full"
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-[4vw] md:gap-[1.5vw] mt-[4vh] md:mt-[2vh]">
                <div className="animate-pulse bg-gray-700 h-12 w-36 rounded-full" />
                <div className="animate-pulse bg-gray-700 h-12 w-36 rounded-full" />
              </div>
            </div>

            {/* Image placeholder */}
            <div className="animate-pulse bg-gray-700 h-[60vh] w-[40vh] rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[12vh] min-h-screen w-full max-w-full overflow-hidden text-white">
      <div>
        <Header />
        <div className="flex flex-col md:flex-row items-center justify-around w-[100vw] mt-[6vh] md:mt-[20vh]">
          <div className="flex flex-col gap-[1.5vh] w-[90%] md:w-1/2">
            <div className="text-[clamp(1rem,1vw,3rem)] backdrop-blur-[40px] bg-transparent flex items-center justify-center rounded-[10vw] w-[40vw] md:w-[12vw] py-[1.5vh] px-[2vw] overflow-hidden header-border">
              Hey there!🙂
            </div>
            <h1 className="text-[clamp(3rem,4vw,10rem)] capitalize">
              I'm Mohit kuril
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
              <button className="text-sm md:text-[clamp(1rem,1vw,3.5rem)] px-[4vw] py-[1.5vh] md:px-[2vw] md:py-[2vh] text-white font-bold rounded-full border-2 border-gray-400 overflow-hidden transition duration-300 hover:scale-105">
                Download Resume
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-sm md:text-[clamp(1rem,1vw,3.5rem)] px-[4vw] py-[1.5vh] md:px-[2vw] md:py-[2vh] text-white font-bold rounded-full border-2 border-gray-400 overflow-hidden transition duration-300 hover:scale-105"
              >
                Contact Me
              </button>
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
