// ContactForm.js
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
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

  return (
    <div className="w-full md:w-[70%] bg-[#1E293B] p-[4vw] md:p-[2vw] rounded-lg md:rounded-[1vw]">
      <h2
        className="text-[clamp(1.5rem,1.2vw,4.5rem)] font-semibold mb-[2vh]"
        data-aos="fade-left"
      >
        Send a Message
      </h2>
      <form className="space-y-[1.5vh]" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-[2vw] md:p-[1vw] text-[clamp(1rem,1vw,3rem)] border ${
              touched.name && errors.name ? "border-red-500" : "border-gray-600"
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
            className={`w-full p-[2vw] md:p-[1vw] text-[clamp(1rem,1vw,3rem)] border ${
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
            className={`w-full p-[2vw] md:p-[1vw] text-[clamp(1rem,1vw,3rem)] h-[20vh] border ${
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
          className="w-full text-[clamp(1rem,1vw,3rem)] p-[2vw] md:p-[1vw] bg-blue-500 rounded-md md:rounded-[.5vw] text-white font-semibold hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
