import Aos from "aos";

const Experience = () => {
  const experiences = [
    {
      companyName: "Wipro",
      role: "Project Engineer",
      date: "Dec-21 to May-23",
      description:
        "Front-end developer with 1.5 years of experience specializing in building responsive and user-friendly web applications using HTML, CSS, JavaScript, Bootstrap, and ReactJS. Proficient in modern technologies like ReactJS, Redux, and TailwindCSS. Experienced in developing and optimizing reusable components for web applications, ensuring seamless performance across devices. Strong problem-solving skills and attention to detail in creating visually appealing and intuitive user interfaces. ",
      imgLink: "",
    },
    {
      companyName: "KR PETEYE LLP",
      role: "Front End Developer",
      date: "Jan-24 to Present",
      description: `As a seasoned front-end developer with 1.3 years of experience, I possess a strong foundation in responsive web design and user-friendly web applications. I am proficient in modern technologies including ReactJS, Redux, JavaScript, and Tailwind CSS, which enables me to build scalable and efficient web applications.

I have a proven track record of building complex web applications, including scalable e-commerce platforms and dynamic data management systems. My expertise includes optimizing websites for maximum user engagement, ensuring seamless user experiences across desktop and mobile devices, and creating visually appealing interfaces that drive conversions.

Collaborated with
designers using Figma to transform mockups into
functional web pages.Utilized version control systems
such as Git to manage code changes and collaborate with
other developers`,
      imgLink: "",
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden max-w-full pt-[15vh]">
      <div className="flex flex-col items-center justify-center gap-[3vh] mb-[5vh]">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-[clamp(3rem,4vw,10rem)] font-bold mb-[2vh] text-[#688ef5]"
        >
          Experience
        </h1>

        <div className="flex flex-col gap-[5vh] w-full px-4 max-w-[85vw]">
          {experiences.map((experience, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={experience.companyName}
              className="flex flex-col md:flex-row gap-6 min-h-[10vh] bg-gray-800/30 rounded-[.5vw] p-[1vw]"
            >
              {/* Left section - Fixed */}
              <div className="md:w-1/3 sticky top-0 self-start flex flex-col gap-[1dvh]">
                <h2 className="text-2xl md:text-[clamp(1.3rem,2vw,5rem)] font-bold text-blue-400">
                  {experience.companyName}
                </h2>
                <p className="text-xl md:text-[clamp(1rem,1.5vw,4rem)] text-gray-300">
                  {experience.role}
                </p>
                <p className="text-sm md:text-[clamp(1rem,1.2vw,3.5rem)] text-gray-400">
                  {experience.date}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-600 self-stretch" />

              {/* Right section - Scrollable */}
              <div
                className="md:w-2/3 overflow-y-auto pr-4 max-h-[60vh] scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
              >
                {experience.description.split("\n\n").map((para, index) => (
                  <p
                    key={index}
                    className="text-gray-300 text-[clamp(1rem,1.2vw,3rem)]  leading-relaxed mb-4"
                  >
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
