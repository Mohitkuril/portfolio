import React, { useState, useEffect } from "react";
import usePageTitle from "../../Components/UseTitle";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import contactImg from "../../Components/Images/contact2.svg";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isLoading, setLoading] = useState(true);
  usePageTitle("Contact Us");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required.";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          error = "Name should only contain letters and spaces.";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email format.";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message cannot be empty.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    const service_id = "service_k2hgdoy";
    const template_id = "template_z52hq6k";
    const user_id = "7yusoZah3i0YVTDUq";

    const emailData = {
      service_id,
      template_id,
      user_id,
      template_params: {
        from_name: formData.name,
        to_name: "Mohit Kuril",
        message: formData.message,
        from_email: formData.email,
      },
    };

    try {
      await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailData
      );
      toast.success("Email sent successfully!", { position: "top-right" });
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setErrors({});
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again later.", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
        <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
          <div className="min-h-[90vh] w-[90vw] p-10 gap-[3vh] md:gap-0 md:p-16 flex flex-col md:flex-row animate-pulse">
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-6 bg-gray-700 w-2/5 rounded" />
              <div className="h-4 bg-gray-600 w-3/5 rounded" />
              <div className="h-4 bg-gray-600 w-4/5 rounded" />
              <div className="h-4 bg-gray-600 w-2/3 rounded" />
              <div className="h-4 bg-gray-600 w-3/5 rounded" />
              <div className="h-4 bg-gray-600 w-4/5 rounded" />
              <div className="h-4 bg-gray-600 w-2/3 rounded" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-96 bg-gray-700 w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] pb-[5vh] md:pb-[10vh] overflow-hidden">
        <div className="w-[80%] md:w-[50vw] flex flex-col md:flex-col gap-10">
          {/* Left Contact Info Section */}
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

          {/* Right Form Section */}
          <div className="w-full md:w-[70%] bg-[#1E293B] p-[4vw] md:p-[2vw] rounded-lg md:rounded-[1vw]">
            <h2
              className="text-[clamp(1.5rem,1.2vw,4.5rem)] font-semibold mb-[2vh]"
              data-aos="fade-left"
            >
              Send a Message
            </h2>
            <form
              className="space-y-[1.5vh]"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-[2vw] md:p-[1vw] text-[clamp(1rem,1vw,3rem)] border ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-gray-600"
                  } rounded-md md:rounded-[.5vw] bg-[#2D3748] text-white focus:ring-2 focus:ring-blue-400 outline-none`}
                />
                {touched.name && errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  p-[2vw] md:p-[1vw] text-[clamp(1rem,1vw,3rem)] border ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-600"
                  } rounded-md md:rounded-[.5vw] bg-[#2D3748] text-white focus:ring-2 focus:ring-blue-400 outline-none`}
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  p-[2vw] md:p-[1vw] text-[clamp(1rem,1vw,3rem)] h-[20vh] border ${
                    touched.message && errors.message
                      ? "border-red-500"
                      : "border-gray-600"
                  } rounded-md md:rounded-[.5vw] bg-[#2D3748] text-white focus:ring-2 focus:ring-blue-400 outline-none resize-none`}
                />
                {touched.message && errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-[clamp(1rem,1vw,3rem)]  p-[2vw] md:p-[1vw] bg-blue-500 rounded-md md:rounded-[.5vw] text-white font-semibold hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Image */}
        <div className="hidden md:block">
          <img
            className="w-[40vw] object-cover"
            src={contactImg}
            alt="Contact Illustration"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
}
