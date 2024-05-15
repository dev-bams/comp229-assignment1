/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import { useRef, useLayoutEffect } from "react"; // Import useRef and useLayoutEffect hooks from React
import gsap from "gsap"; // Import gsap library
import FullName from "./FullName"; // Import the FullName component

// Component for the welcome section of the webpage
function WelcomeSection() {
  const comp = useRef(null); // Create a ref to the component
  // Effect to animate the welcome section on mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".welcome-texts",
        {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          delay: 0.1,
          duration: 1,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 0.1,
          duration: 1,
        }
      );
      gsap.fromTo(
        "#about-link",
        {
          opacity: 0,
          stagger: 0.1,
          delay: 1,
          duration: 1,
        },
        {
          opacity: 1,
          stagger: 0.1,
          delay: 1,
          duration: 1,
        }
      );
    }, comp);

    return () => ctx.revert(); // Revert the animation on component unmount
  }, []);
  return (
    // Container div for the welcome section with a ref, id, and styling
    <div
      ref={comp}
      id="welcome"
      className="flex justify-center bg-second-primary dark:bg-first-primary transition-colors duration-300"
      style={{ minHeight: "calc( 100vh - 88px )" }}
    >
      <div className="flex flex-col justify-center w-full max-w-7xl p-4 gap-6">
        {/* Welcome text with inline styling and classes for color transition */}
        <h2 className="welcome-texts text-second-text-color dark:text-first-text-color transition-colors duration-300 text-lg font-bold ">
          Hey there! {/* Span for the accent color with specific styling */}
          <span className="text-first-accent dark:selection:bg-black dark:selection:text-first-accent selection:bg-slate-200">
            I'm
          </span>
        </h2>
        <FullName /> {/* Render the FullName component */}
        {/* Welcome message with inline styling and classes for color transition */}
        <h2 className="welcome-texts text-2xl font-bold text-second-text-color transition-colors duration-300 dark:text-first-text-color">
          Welcome to my corner of the web
        </h2>
        {/* Link to navigate to the about page with specific styling */}
        <Link
          id="about-link"
          to="/about"
          className="text-first-accent text-lg font-bold rounded-lg cursor-cell max-w-max self-center animate-bounce"
        >
          more about me
        </Link>
      </div>
    </div>
  );
}

export default WelcomeSection; // Export the WelcomeSection component as the default export
