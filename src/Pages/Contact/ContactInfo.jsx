// ContactInfo.js
import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
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

  return (
    <div className="w-full flex flex-col gap-[2vh] leading-normal">
      <h1
        className="text-3xl md:text-[clamp(1.5rem,3vw,4.5rem)] font-bold text-blue-500"
        data-aos="fade-right"
      >
        Get in Touch
      </h1>
      <p
        className="text-[clamp(1rem,1vw,3rem)] leading-normal"
        data-aos="fade-right"
      >
        Let&apos;s connect! I&apos;m always open to new conversations and
        opportunities — <br />
        Drop me a message!
      </p>
      <div className="flex flex-col gap-[2vh]">
        {info.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-[3vw] md:gap-[1vw] cursor-pointer"
            data-aos="fade-right"
          >
            <span className="text-blue-400 text-[clamp(1rem,1vw,3rem)]">
              {item.icon}
            </span>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300 text-[clamp(1rem,1vw,3rem)]"
            >
              {item.name}: {item.data}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
