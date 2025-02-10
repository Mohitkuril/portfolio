import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import usePageTitle from "../../Components/UseTitle";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import contactImg from "../../Components/Images/contact2.svg";
import axios from "axios";

export default function Contact() {
  const [isLoading, setLoading] = useState(true);
  usePageTitle("Contact Us");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();

    const service_id = "service_k2hgdoy";
    const template_id = "template_z52hq6k";
    const user_id = "7yusoZah3i0YVTDUq";

    const data = {
      service_id: service_id,
      template_id: template_id,
      user_id: user_id,
      template_params: {
        from_name: name,
        to_name: "Mohit Kuril",
        message: message,
        from_email: email,
      },
    };

    try {
      const response = axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log("Email sent successfully! ", response.data);
      alert("Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
        <Header />
        <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
          <div className="bg-[#0F172A] min-h-[90vh] w-[90vw] p-10 md:p-16 flex flex-col md:flex-row animate-pulse">
            {/* Left Section Skeleton */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-6 bg-gray-700 w-2/5 rounded" />
              <div className="h-4 bg-gray-600 w-3/5 rounded" />
              <div className="h-4 bg-gray-600 w-4/5 rounded" />
              <div className="h-4 bg-gray-600 w-2/3 rounded" />
            </div>

            {/* Right Section Skeleton (Form) */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-10 bg-gray-700 w-full rounded" />
              <div className="h-10 bg-gray-700 w-full rounded" />
              <div className="h-24 bg-gray-700 w-full rounded" />
              <div className="h-12 bg-gray-700 w-1/3 rounded mx-auto" />
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
        <div className="w-[90vw] bg-[#0F172A] p-10 md:p-16 flex flex-col md:flex-row gap-10">
          {/* Left Contact Info Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg mb-6">
              Let’s connect! I’m always open to new conversations and
              opportunities—drop me a message!
            </p>
            <div>
              {info.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 my-3 cursor-pointer"
                >
                  <span className="text-blue-400 text-xl">{item.icon}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    {item.name}: {item.data}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 bg-[#1E293B] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg bg-[#2D3748] text-white focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg bg-[#2D3748] text-white focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 h-32 border border-gray-600 rounded-lg bg-[#2D3748] text-white focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Image */}
        <div className="hidden md:block">
          <img
            className="w-[40vw]"
            src={contactImg}
            alt="Contact Illustration"
          />
        </div>
      </div>
    </div>
  );
}
