import React from "react";

const Experience = () => {
  const experiences = [
    {
      companyName: "Wipro",
      role: "Project Engineer",
      date: "Dec-21 to May-23",
      description:
        "Front-end developer with 1.5 years of experience specializing in responsive web design and user-friendly web applications. Proficient in modern technologies like ReactJS, Redux, JavaScript, and TailwindCSS, with a proven track record of building e-commerce platforms and dynamic data management systems. Skilled in optimizing websites for desktop and mobile devices to enhance user engagement and collaborating with design tools like Figma to create visually appealing interfaces.",
      imgLink: "",
    },
    {
      companyName: "KR PETEYE LLP",
      role: "Front End Developer",
      date: "Jan-24 to Present",
      description: `As a seasoned front-end developer with 1.3 years of experience, I possess a strong foundation in responsive web design and user-friendly web applications. I am proficient in modern technologies including ReactJS, Redux, JavaScript, and Tailwind CSS, which enables me to build scalable and efficient web applications.

I have a proven track record of building complex web applications, including scalable e-commerce platforms and dynamic data management systems. My expertise includes optimizing websites for maximum user engagement, ensuring seamless user experiences across desktop and mobile devices, and creating visually appealing interfaces that drive conversions.`,
      imgLink: "",
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden max-w-full pt-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl md:text-6xl font-bold my-4">Experience</h1>

        <div className="flex flex-col gap-10 w-full px-4 max-w-6xl">
          {experiences.map((experience) => (
            <div
              key={experience.companyName}
              className="flex flex-col md:flex-row gap-6 min-h-[10vh] bg-gray-800/30 rounded-lg p-6"
            >
              {/* Left section - Fixed */}
              <div className="md:w-1/3 sticky top-0 self-start space-y-2">
                <h2 className="text-2xl font-bold text-blue-400">
                  {experience.companyName}
                </h2>
                <p className="text-xl text-gray-300">{experience.role}</p>
                <p className="text-sm text-gray-400">{experience.date}</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-600 self-stretch" />

              {/* Right section - Scrollable */}
              <div
                className="md:w-2/3 overflow-y-auto pr-4 max-h-[60vh] scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
              >
                {experience.description.split("\n\n").map((para, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
