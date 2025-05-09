import { Suspense, useEffect, useState, lazy } from "react";
import usePageTitle from "../../Components/UseTitle";
import { useNavigate } from "react-router-dom";
import FluidCursor from "../../Components/FluidCursor";
// Import the image but we'll use it lazily
import profile from "../../Components/Images/profile.jpg";
import { Button } from "../../Components/MovingBorder/Moving-Border";

// Create a lazy-loaded image component
const LazyImage = lazy(() =>
  Promise.resolve({
    default: ({ src, alt, className }) => (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy" // Native lazy loading attribute
      />
    ),
  })
);

export default function About() {
  const [isLoading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [experienceText, setExperienceText] = useState("2.9 years");
  const navigate = useNavigate();
  // usePageTitle("About Us");

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1000);
    // Preload the image
    const img = new Image();
    img.src = profile;
    img.onload = () => setImageLoaded(true);

    // Calculate experience duration
    const calculateExperience = () => {
      // Set your experience start date here - assuming July 2022 based on "2.9 years"
      const startDate = new Date(2022, 6, 1); // July 1, 2022 (0-indexed month)
      const currentDate = new Date();

      // Calculate total months of experience
      const monthsDiff =
        (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
        (currentDate.getMonth() - startDate.getMonth());

      // Convert to years and months
      const years = Math.floor(monthsDiff / 12);
      const months = monthsDiff % 12;

      // Format the experience text
      if (years === 0) {
        return `${months} months`;
      } else if (months === 0) {
        return `${years} year${years > 1 ? "s" : ""}`;
      } else {
        return `${years}.${months} years`;
      }
    };

    // Set the initial experience text
    setExperienceText(calculateExperience());

    // Update at the beginning of each month
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const timeUntilNextMonth = nextMonth.getTime() - now.getTime();

    // Set timeout to update at the beginning of next month
    const updateTimeout = setTimeout(() => {
      setExperienceText(calculateExperience());

      // Set interval to update monthly
      const intervalId = setInterval(() => {
        setExperienceText(calculateExperience());
      }, 30 * 24 * 60 * 60 * 1000); // Roughly every month

      return () => clearInterval(intervalId);
    }, timeUntilNextMonth);

    return () => {
      clearTimeout(timer);
      clearTimeout(updateTimeout);
    };
  }, []);

  return (
    <Suspense
      fallback={
        // Skeleton state
        <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
          <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
            <div
              className="bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] 
                            min-h-[90vh] w-[90vw] 
                            mb-[6vh] md:mb-[10vh] 
                            flex flex-col md:flex-row animate-pulse"
            >
              {/* Left Text Section Skeleton */}
              <div
                className="w-full md:w-1/2 bg-[#0F172A] 
                              p-10 md:p-16 
                              flex flex-col justify-center space-y-4"
              >
                {/* Simulated Heading */}
                <div className="h-8 w-3/4 bg-gray-600 rounded"></div>
                {/* Simulated Paragraph Lines */}
                <div className="space-y-3">
                  <div className="bg-gray-700 h-4 rounded w-full"></div>
                  <div className="bg-gray-700 h-4 rounded w-5/6"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-4/5"></div>
                  <div className="bg-gray-700 h-4 rounded w-3/5"></div>
                </div>
                {/* Simulated Button */}
                <div className="mt-6 h-10 w-1/2 bg-gray-600 rounded"></div>
              </div>

              {/* Right Image Section Skeleton */}
              <div
                className="relative w-full md:w-1/2 
                              md:clip-diagonal-reverse 
                              h-[40vh] md:h-[100vh]"
              >
                <div className="w-full h-full bg-gray-700 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <FluidCursor />

      <div className="pt-[12vh] min-h-screen w-screen bg-slate-100 dark:bg-[#020617] text-white">
        <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[6vh] md:mt-[10vh]">
          <div
            className="bg-[rgb(15_23_42_/_var(--tw-bg-opacity))] 
                            min-h-[90vh] w-[90vw] 
                            mb-[6vh] md:mb-[10vh] 
                            flex flex-col md:flex-row"
          >
            {/* Left Text Section */}
            <div
              className="relative w-full md:w-1/2 bg-[#0F172A] 
                              p-10 md:p-16 
                              flex flex-col justify-center gap-[4vh]"
            >
              <h2 className="text-3xl font-bold ">
                About <span className="text-blue-400">Me.</span>
              </h2>
              <p className="text-md md:text-[clamp(1.1rem,1vw,4.5rem)] font-bold">
                Hi, I&apos;m{" "}
                <span className="text-blue-400 font-bold">Mohit Kuril</span>, a
                passionate Web Application Developer from Hyderabad. Front-end
                developer Front-end developer with {experienceText} of
                experience specializing in responsive web design and
                user-friendly web applications. Proficient in modern
                technologies like ReactJS, Redux, JavaScript, and Tailwind CSS,
                with a proven track record of building e-commerce platforms and
                dynamic data management systems. Skilled in optimizing websites
                for desktop and mobile devices to enhance user engagement and
                creating visually appealing interfaces.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                borderRadius="1rem"
                mobileWidth="50vw"
                mobileHeight="6vh"
                desktopWidth="15vw"
                desktopHeight="8vh"
                className="bg-white-500 text-white font-bold hover:bg-gray-900 text-base"
                duration={4200}
              >
                CONTACT ME
              </Button>
            </div>

            {/* Right Image Section with Lazy Loading */}
            <div
              className="relative w-full md:w-1/2 
                              md:clip-diagonal-reverse 
                              h-[40vh] md:h-[100vh]"
            >
              {/* Show a placeholder until the image is loaded */}
              {!imageLoaded && (
                <div className="w-full h-full bg-gray-700 animate-pulse"></div>
              )}

              <Suspense
                fallback={
                  <div className="w-full h-full bg-gray-700 animate-pulse"></div>
                }
              >
                <LazyImage
                  src={profile}
                  alt="mohit kuril"
                  className={`w-full h-full object-cover ${
                    !imageLoaded ? "hidden" : ""
                  }`}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
