import React, { useState, useEffect } from "react";

import Skills from "./Skills";
import Hero from "./Hero";
import MyProjects from "./MyProjects";
import Experience from "../../Components/Experience";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-[12vh] min-h-screen w-full max-w-full overflow-hidden bg-gray-950 text-white">
        <div>
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
    <div className="bg-gray-950 w-screen overflow-x-hidden">
      <Hero />
      <Skills />
      <MyProjects />
      <Experience />
    </div>
  );
}
