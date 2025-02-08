import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import usePageTitle from "../../Components/UseTitle";
import { useNavigate } from "react-router-dom";
import FluidCursor from "../../Components/FluidCursor";

export default function About() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  usePageTitle("About Us");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
        <Header />
        <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
          <div className="bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] min-h-[90vh] w-[90vw] mb-[6vh] md:mb-[10vh] flex flex-col md:flex-row animate-pulse">
            {/* Left Text Section */}
            <div className="w-full md:w-1/2 bg-[#0F172A] p-10 md:p-16 text-left text-lg leading-relaxed  flex flex-col justify-center">
              <div className=" animate-pulse h-4 bg-gray-600 mb-4"></div>
              <div className="animate-pulse space-y-2">
                <div className="bg-gray-700 h-4 rounded w-full" />
                <div className="bg-gray-700 h-4 rounded w-[95%]" />
                <div className="bg-gray-700 h-4 rounded w-[90%]" />
                <div className="bg-gray-700 h-4 rounded w-[85%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <FluidCursor />
      <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
        <Header />
        <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
          <div className="bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] min-h-[90vh] w-[90vw] mb-[6vh] md:mb-[10vh] flex flex-col md:flex-row">
            {/* Left Text Section */}
            <div className="relative w-full md:w-1/2 bg-[#0F172A] p-10 md:p-16 text-left text-lg leading-relaxed  flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-blue-400">Me.</span>
              </h2>
              <p>
                Hi, I’m{" "}
                <span className="text-blue-400 font-bold">Mohit Kuril</span>, a
                passionate Web Application Developer from Hyderabad. Front-end
                developer with 2.5 years of experience specializing in
                responsive web design and user-friendly web applications.
                Proficient in modern technologies like ReactJS, Redux,
                JavaScript, and TailwindCSS, with a proven track record of
                building e-commerce platforms and dynamic data management
                systems. Skilled in optimizing websites for desktop and mobile
                devices to enhance user engagement and collaborating with design
                tools like Figma to create visually appealing interfaces.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="mt-6 px-5 py-2  md:w-[50%] border rounded-lg border-white bg-opacity-20"
              >
                CONTACT ME
              </button>
            </div>

            {/* Right Image Section */}
            <div className="relative w-full md:w-1/2 md:clip-diagonal-reverse h-[40vh] md:h-[100vh]">
              <img
                src="https://imgs.search.brave.com/fHBaP6GW8n2RKErhzOC5nVdlEpi7Q4eXh5EtkT9Af7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEwL05hcnV0/by12cy1CbGVhY2gu/anBn"
                alt="mohit kuril"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
