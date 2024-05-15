/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { useLayoutEffect, useRef } from "react"; // Import the useLayoutEffect and useRef hooks from React
import gsap from "gsap"; // Import gsap library
import ModeButton from "../../pages/landing-page/ModeButton"; // Import the ModeButton component
import NavLinks from "./NavLinks"; // Import the NavLinks component

// Component for the navigation bar
function NavBar() {
  const comp = useRef(null); // Create a ref for the component
  // Use layout effect to animate elements on mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for mode button
      gsap.fromTo(
        "#mode-button",
        {
          y: -130,
          duration: 1,
          ease: "bounce",
        },
        {
          y: "0",
          duration: 1,
          ease: "bounce",
        }
      );
      // Animation for nav links
      gsap.fromTo(
        ".nav-link",
        {
          opacity: 0,
          y: -130,
          stagger: 0.1,
          duration: 1,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
        }
      );
    }, comp);
    return () => ctx.revert(); // Revert animations on unmount
  }, []);

  // Render the navigation bar with conditional class based on screen size
  return (
    <div
      ref={comp}
      className={`flex justify-center transition-colors duration-300 bg-first-primary max-sm:hidden sticky top-0 z-10`}
    >
      <nav
        className="flex justify-between max-w-7xl w-full p-4 translate-y-0"
        id="desktop-navbar"
      >
        {/* Render the ModeButton component */}
        <ModeButton />
        {/* Render the NavLinks component */}
        <NavLinks />
      </nav>
    </div>
  );
}

export default NavBar; // Export the NavBar component as the default export
