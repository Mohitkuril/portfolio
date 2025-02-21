import React, { useState, useEffect } from "react";
import usePageTitle from "../../Components/UseTitle";
import { useNavigate } from "react-router-dom";
import FluidCursor from "../../Components/FluidCursor";
import profile from "../../Components/Images/profile.jpg";

export default function About() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  usePageTitle("About Us");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fluid Cursor is rendered in both states */}
      <FluidCursor />

      {isLoading ? (
        // Skeleton state
        <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
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
                              flex flex-col justify-center space-y-4"
              >
                {/* Simulated Heading */}
                <div className="h-8 w-3/4 bg-gray-600 rounded"></div>
                {/* Simulated Paragraph Lines */}
                <div className="space-y-3">
                  <div className="bg-gray-700 h-4 rounded w-full"></div>
                  <div className="bg-gray-700 h-4 rounded w-5/6"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-3/5"></div>
                </div>
                {/* Simulated Button */}
                <div className="mt-6 h-10 w-1/2 bg-gray-600 rounded"></div>
              </div>

              {/* Right Image Section Skeleton */}
              <div
                className="relative w-full md:w-1/2 
                              md:clip-diagonal-reverse 
                              h-[40vh] md:h-[100vh]"
              >
                <div className="w-full h-full bg-gray-700 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Final design state
        <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
          <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
            <div
              className="bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] 
                            min-h-[90vh] w-[90vw] 
                            mb-[6vh] md:mb-[10vh] 
                            flex flex-col md:flex-row"
            >
              {/* Left Text Section */}
              <div
                className="relative w-full md:w-1/2 bg-[#0F172A] 
                              p-10 md:p-16 
                              flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  About <span className="text-blue-400">Me.</span>
                </h2>
                <p>
                  Hi, I’m{" "}
                  <span className="text-blue-400 font-bold">Mohit Kuril</span>,
                  a passionate Web Application Developer from Hyderabad.
                  Front-end developer with 2.5 years of experience specializing
                  in responsive web design and user-friendly web applications.
                  Proficient in modern technologies like ReactJS, Redux,
                  JavaScript, and TailwindCSS, with a proven track record of
                  building e-commerce platforms and dynamic data management
                  systems. Skilled in optimizing websites for desktop and mobile
                  devices to enhance user engagement and collaborating with
                  design tools like Figma to create visually appealing
                  interfaces.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 px-5 py-2 md:w-[50%] border rounded-lg 
                             border-white bg-opacity-20 
                             hover:bg-blue-400 hover:text-white hover:border-blue-400 
                             transition duration-300 ease-in-out font-bold"
                >
                  CONTACT ME
                </button>
              </div>

              {/* Right Image Section */}
              <div
                className="relative w-full md:w-1/2 
                              md:clip-diagonal-reverse 
                              h-[40vh] md:h-[100vh]"
              >
                <img
                  src={profile}
                  alt="mohit kuril"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
