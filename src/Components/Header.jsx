import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import mklogo from "../Components/Images/mklogo1preview.webp";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="md:pt-[2vh] flex items-center justify-center w-full fixed top-0 left-0 z-50">
        <div className="w-full md:w-[90vw] h-[10vh] animate-pulse bg-gray-700  rounded-[7vw] md:rounded-[10vw]"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full fixed top-0 left-0 z-50">
      <div className="w-full md:w-[90vw] h-[10vh] flex items-center justify-between backdrop-blur-[40px] bg-transparent  md:mt-[2vh] rounded-[7vw] md:rounded-[10vw] px-[4vw] md:px-[1.5vw] overflow-hidden  md:border md:border-[#e5e7eb] ">
        {/* Logo */}
        <img
          src={mklogo}
          alt="logo"
          className="w-[10vw] h-[5vh] md:w-[5vw] md:h-[5vh]"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[5vw]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setActiveLink(item.link)}
              className={`relative text-[clamp(1.2rem,1vw,3.5rem)] font-bold transition duration-300 
                ${
                  activeLink === item.link
                    ? "text-[#e5e7eb] hover:text-slate-500 underline underline-offset-4"
                    : "text-[#e5e7eb] hover:text-slate-500"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-[10vh] right-[5vw] w-[60vw] bg-gray-900 p-5 rounded-2xl transition-transform transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        } md:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            onClick={() => {
              setActiveLink(item.link);
              setIsOpen(false);
            }}
            className={`block text-lg py-2 font-bold transition duration-300 ${
              activeLink === item.link
                ? "text-[#e5e7eb] underline"
                : "text-[#e5e7eb] hover:text-slate-500"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
