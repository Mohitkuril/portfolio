import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import usePageTitle from "../../Components/UseTitle";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [isLoading, setLoading] = useState(true);
  usePageTitle("Contact Us");
  const info = [
    {
      name: "Email",
      link: "mailto:mohitkuril5@gmail.com",
      data: "mohitkuril5@gmail.com",
      icon: <IoMdMail />,
    },
    {
      name: "Number",
      link: "https://github.com/mohit-kuril",
      data: "+91 7794086714",
      icon: <FaPhoneAlt />,
    },
    {
      name: "Location",
      link: "https://www.linkedin.com/in/mohit-kuril/",
      data: "Hyderabad, India",
      icon: <FaLocationDot />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mohit-kuril/",
      data: "https://www.linkedin.com/in/mohit-kuril/",
      icon: <FaLinkedin />,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
        <Header />
        <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
          <div
            className="bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] 
                          min-h-[90vh] w-[90vw] 
                          mb-[6vh] md:mb-[10vh] 
                          flex flex-col md:flex-row animate-pulse"
          >
            {/* Left Text Section Skeleton */}
            <div
              className="w-full md:w-1/2 bg-[#0F172A] 
                            p-10 md:p-16 
                            flex flex-col justify-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">
                Contact
              </h1>
              <p className="text-lg md:text-xl animate-pulse">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
      <Header />
      <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
        <div>
          <h1>Get in Touch</h1>

          <h2 className="cursor-pointer">
            Let&apos;s connect! I&apos;m always open to new conversations and
            opportunities—drop me a message!
          </h2>
          <div>
            {info.map((info) => (
              <div
                key={info.name}
                className="flex items-center gap-3 my-3 cursor-pointer"
              >
                <p>{info.icon}</p>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {info.name}: {info.data}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
