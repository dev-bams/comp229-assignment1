import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import ModeButton from "../../pages/landing-page/ModeButton";
import HamburgerButton from "./HamburgerButton";
import MobileNavLinks from "./MobileNavLinks";
import VerifiedIcon from "../../assets/icons/VerifiedIcon";

function MobileNavBar() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);
  const [isLinkActive, setIsLinkActive] = useState(false);
  function toggleIsLinkActive() {
    setIsLinkActive((isLinkActive) => !isLinkActive);
  }
  function toggleIsLinkActiveScroll() {
    if (isLinkActive) {
      toggleIsLinkActive();
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleIsLinkActiveScroll);
    return () => {
      window.removeEventListener("scroll", toggleIsLinkActiveScroll);
    };
  });

  return (
    <div
      ref={comp}
      className="bg-second-primary dark:bg-first-primary transition-colors duration-300 flex justify-center sm:hidden sticky top-0 overflow-hidden z-10"
    >
      <nav
        className={`flex p-4 flex-col max-w-7xl w-full transition-all duration-500 ${
          isLinkActive ? "h-[140px]" : "h-[70px]"
        }`}
      >
        <div className="flex gap-5 items-center w-full justify-between">
          <ModeButton
          />
          <div id="navbar-username" className="flex items-center justify-center gap-[.1rem]">
            <p className=" font-bold dark:text-first-text-color transition-colors duration-300 text-second-text-color">
              khaleed
            </p>
            <VerifiedIcon />
          </div>
          <HamburgerButton
          />
        </div>
        <MobileNavLinks />
      </nav>
    </div>
  );
}

export default MobileNavBar;
