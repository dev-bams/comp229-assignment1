/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { useRef, useLayoutEffect, useEffect, useState } from "react"; // Import the useRef, useLayoutEffect, useEffect, and useState hooks from React
import gsap from "gsap"; // Import the gsap library
import ModeButton from "../../pages/landing-page/ModeButton"; // Import the ModeButton component
import HamburgerButton from "./HamburgerButton"; // Import the HamburgerButton component
import MobileNavLinks from "./MobileNavLinks"; // Import the MobileNavLinks component
import VerifiedIcon from "../../assets/icons/VerifiedIcon"; // Import the VerifiedIcon component

// Component for the mobile navigation bar
function MobileNavBar() {
  const comp = useRef(null); // Create a ref for the component
  // Use layout effect to animate elements on mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for mode button
      gsap.fromTo(
        "#mode-button",
        {
          y: -100,
          duration: 1,
          ease: "bounce",
        },
        {
          y: "0",
          duration: 1,
          ease: "bounce",
        }
      );
      // Animation for navbar username
      gsap.fromTo(
        "#navbar-username",
        {
          opacity: 0,
          duration: 1,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 0.2,
        }
      );
      // Animation for hamburger button
      gsap.fromTo(
        "#hamburger",
        {
          x: 100,
          duration: 1,
        },
        {
          x: "0",
          duration: 1,
        }
      );
    }, comp);
    return () => ctx.revert(); // Revert animations on unmount
  }, []);

  const [isLinkActive, setIsLinkActive] = useState(false); // State to track if link is active

  // Function to toggle isLinkActive state
  function toggleIsLinkActive() {
    setIsLinkActive((isLinkActive) => !isLinkActive);
  }

  // Function to toggle isLinkActive state when scrolling
  function toggleIsLinkActiveScroll() {
    if (isLinkActive) {
      toggleIsLinkActive();
    }
  }

  // Effect to add event listener for scroll and remove it on cleanup
  useEffect(() => {
    window.addEventListener("scroll", toggleIsLinkActiveScroll); // Add event listener for scroll
    return () => {
      window.removeEventListener("scroll", toggleIsLinkActiveScroll); // Remove event listener on cleanup
    };
  });

  // Render the mobile navigation bar
  return (
    <div
      ref={comp}
      className=" bg-first-primary transition-colors duration-300 flex justify-center sm:hidden sticky top-0 overflow-hidden z-10"
    >
      <nav
        className={`flex p-4 flex-col max-w-7xl w-full transition-all duration-500 ${
          isLinkActive ? "h-[140px]" : "h-[70px]"
        }`}
      >
        <div className="flex gap-5 items-center w-full justify-between">
          {/* Render the ModeButton component */}
          <ModeButton />
          {/* Render the username and verified icon */}
          <div
            id="navbar-username"
            className="flex items-center justify-center gap-[.1rem]"
          >
            <p className="font-bold text-first-text-color transition-colors duration-300">
              khaleed
            </p>
            <VerifiedIcon />
          </div>
          {/* Render the HamburgerButton component */}
          <HamburgerButton onClick={toggleIsLinkActive} />
        </div>
        {/* Render the MobileNavLinks component */}
        <MobileNavLinks />
      </nav>
    </div>
  );
}

export default MobileNavBar; // Export the MobileNavBar component as the default export
