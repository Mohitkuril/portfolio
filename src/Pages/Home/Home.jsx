import React from "react";

import Skills from "./Skills";
import Hero from "./Hero";
import MyProjects from "./MyProjects";
import Experience from "../../Components/Experience";

export default function Home() {
  return (
    <div className="bg-gray-950 w-screen overflow-x-hidden">
      <Hero />
      <Skills />
      <MyProjects />
      <Experience />
    </div>
  );
}
