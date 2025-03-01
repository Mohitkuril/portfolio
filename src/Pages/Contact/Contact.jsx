// ContactComponent.js
import React, { useState, useEffect, lazy, Suspense } from "react";
import usePageTitle from "../../Components/UseTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import the image directly instead of lazy loading it
import contactImg from "../../Components/Images/contact2.svg";

// Lazy load all subcomponents
const ContactInfo = lazy(() => import("./ContactInfo"));
const ContactForm = lazy(() => import("./ContactForm"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex flex-col md:flex-row items-center w-full justify-center">
    <div className="w-[80%] md:w-[50vw] flex flex-col md:flex-col gap-10">
      <div className="w-full space-y-4 animate-pulse">
        <div className="h-8 bg-gray-700 w-2/5 rounded" />
        <div className="h-4 bg-gray-600 w-3/5 rounded" />
        <div className="h-4 bg-gray-600 w-4/5 rounded" />

        <div className="space-y-2 mt-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-5 w-5 bg-blue-400 rounded-full" />
              <div className="h-4 bg-gray-600 w-4/5 rounded" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-[70%] bg-[#1E293B] p-[4vw] md:p-[2vw] rounded-lg md:rounded-[1vw] animate-pulse">
        <div className="h-6 bg-gray-700 w-1/3 rounded mb-6" />
        <div className="space-y-4">
          <div className="h-10 bg-gray-700 w-full rounded" />
          <div className="h-10 bg-gray-700 w-full rounded" />
          <div className="h-24 bg-gray-700 w-full rounded" />
          <div className="h-10 bg-blue-700 w-full rounded" />
        </div>
      </div>
    </div>

    <div className="hidden md:block">
      <div className="w-[40vw] h-96 bg-gray-700 rounded animate-pulse"></div>
    </div>
  </div>
);

// Create a lazy-loaded image component
const LazyImage = lazy(() => {
  return new Promise((resolve) => {
    // Simulate a delay to test lazy loading
    const img = new Image();
    img.onload = () => {
      resolve({
        default: () => (
          <img
            className="w-[40vw] object-cover"
            src={contactImg}
            alt="Contact Illustration"
            data-aos="zoom-in"
          />
        ),
      });
    };
    img.src = contactImg;
  });
});

// Main Contact component
export default function Contact() {
  // usePageTitle("Contact Us");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] pb-[5vh] md:pb-[10vh] overflow-hidden">
        <Suspense fallback={<LoadingFallback />}>
          <div className="w-[80%] md:w-[50vw] flex flex-col md:flex-col gap-10">
            <ContactInfo />
            <ContactForm />
          </div>

          <div className="hidden md:block">
            <Suspense
              fallback={
                <div className="w-[40vw] h-96 bg-gray-700 rounded animate-pulse"></div>
              }
            >
              <LazyImage />
            </Suspense>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
