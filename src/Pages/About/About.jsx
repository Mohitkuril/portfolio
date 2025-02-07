import React from "react";
import Header from "../../Components/Header";
import usePageTitle from "../../Components/UseTitle";

export default function About() {
  usePageTitle("About Us");
  return (
    <div className=" pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617]   bg-[linear-gradient(90deg,#80808011_1px,transparent_0),linear-gradient(180deg,#80808011_1px,transparent_0)] bg-[size:20px_20px] text-white">
      <Header />
      <div className="flex flex-col md:flex-row items-center  w-full justify-center  mt-[6vh] md:mt-[10vh]">
        <div className="bg-[rgb(15_23_42_/_var(--tw-bg-opacity))]  h-[70vh] w-[90vw] ">
          <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
            {/* Left Text Section with Clip Path */}
            <div className="relative w-full md:w-1/2 bg-[#0F172A] p-10 md:p-16 text-left text-lg leading-relaxed clip-diagonal">
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-blue-400">Me.</span>
              </h2>
              <p>
                Hi, I’m{" "}
                <span className="text-blue-400 font-bold">Md. Ranju</span>, a
                passionate Web Application Developer from Rajshahi,
                Bangladesh...
              </p>
              <button className="mt-6 px-5 py-2 border rounded-lg border-white bg-opacity-20">
                CONTACT ME
              </button>
            </div>

            {/* Right Image Section */}
            <div className="relative w-full md:w-1/2">
              <img
                src="https://imgs.search.brave.com/fHBaP6GW8n2RKErhzOC5nVdlEpi7Q4eXh5EtkT9Af7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEwL05hcnV0/by12cy1CbGVhY2gu/anBn" // Replace with actual image path
                alt="Md. Ranju"
                className="w-full h-[40vh] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
