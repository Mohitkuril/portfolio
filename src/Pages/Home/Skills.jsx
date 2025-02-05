import React from "react";
import Icons from "../../Components/Icons";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
       icon:  "htmlIcon"} ,
    {
      name: "CSS",
       icon:  "cssIcon"},
    {
      name: "JavaScript",
       icon:  "jsIcon"},

    {
      name: "Tailwind",
       icon:  "tailwindIcon"}   ,
    {
      name: "Git",
       icon:  "text"},
    {
      name: "GitHub",
       icon:  "text"}  ,

    {
      name: "Bootstrap",
       icon:  "text"
    },
    {
      name: "React",
       icon:  "text"},
    {
      name: "Npm",
       icon:  "text"},
  ];


  const learningSkills = [
    {
      name: "TypeScript",
       icon:  "text"}  ,
    {
      name: "Next.js",
       icon:  "text"}  ,
    {
      name: "Node.js",
       icon:  "text"}  ,
    {
      name: "MongoDB",
       icon:  "text"}  ,
    {
      name: "MySQL",
       icon:  "text"}  ,
  ];

  return (
    <div className=" min-h-screen text-white overflow-x-hidden max-w-full pt-[15vh]">
      <div className="flex flex-col items-center justify-center">
        <h1>Skills</h1>

        {skills.map((skill) => (
          <div key={skill.name}>
            <h2>{skill.name}</h2>
            <p><Icons name={skill.icon} /></p>
            </div>
        ))}
      </div>
    </div>
  );
}
