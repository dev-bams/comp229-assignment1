import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ModeButton from "../landing-page/ModeButton";
import ErrorNavLinks from "./ErrorNavLinks";
function NavBar() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      className={`flex justify-center transition-colors duration-300 bg-second-primary dark:bg-first-primary max-sm:hidden sticky top-0 z-10`}
    >
      <nav
        className="flex justify-between max-w-7xl w-full p-4 translate-y-0"
        id="desktop-navbar"
      >
        <ModeButton />
        <ErrorNavLinks />
      </nav>
    </div>
  );
}

export default NavBar;
