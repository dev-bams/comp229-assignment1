import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import FullName from "./FullName";
import DownArrow from "../../assets/icons/DownArrow";

function WelcomeSection() {
  const comp = useRef(null);
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
        "#down-arrow",
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
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      id="welcome"
      className="flex justify-center bg-second-primary dark:bg-first-primary transition-colors duration-300 min-h-lvh"
      // style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <div className=" flex flex-col justify-center w-full max-w-7xl p-4 gap-6 ">
        <h2 className="welcome-texts text-second-text-color dark:text-first-text-color transition-colors duration-300 text-lg font-bold ">
          Hey there!{" "}
          <span className="text-first-accent dark:selection:bg-black dark:selection:text-first-accent selection:bg-slate-200">
            I'm
          </span>
        </h2>
        <FullName />
        <h2 className="welcome-texts text-2xl font-bold text-second-text-color transition-colors duration-300 dark:text-first-text-color">
          Welcome to my corner of the web
        </h2>
        <DownArrow />
      </div>
    </div>
  );
}

export default WelcomeSection;
