import React, { Suspense, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mohitLogo from "../Components/Images/Mohit_logo.webp";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <Suspense
      fallback={
        <div className="md:pt-[2vh] flex items-center justify-center w-full fixed top-0 left-0 z-50">
          <div className="w-full md:w-[90vw] h-[10vh] animate-pulse bg-gray-700 rounded-[7vw] md:rounded-[10vw]"></div>
        </div>
      }
    >
      <div className="flex items-center justify-center w-full fixed top-0 left-0 z-50">
        <div className="w-full md:w-[90vw] h-[10vh] flex items-center justify-between backdrop-blur-[40px] bg-transparent md:mt-[2vh] rounded-[7vw] md:rounded-[10vw] px-[4vw] md:px-[1.5vw] overflow-hidden border border-slate-800">
          {/* Logo */}
          <img
            src={mohitLogo}
            alt="Logo"
            className="w-[20vw] md:w-[6vw] -ml-[3vw] md:-ml-[1vw] rounded-[1vw] object-cover "
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[5vw]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`relative text-[clamp(1.2rem,1vw,3.5rem)] font-bold transition duration-300 
                ${
                  activeLink === item.link
                    ? "text-[#688ef5] underline underline-offset-4 "
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
                  ? "text-[#688ef5] underline underline-offset-4"
                  : "text-[#e5e7eb] hover:text-slate-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
