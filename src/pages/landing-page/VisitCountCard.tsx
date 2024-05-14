import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import Cancel from "../../assets/icons/Cancel";
// import profile from "../assets/images/profile.jpeg";
import profile2 from "../../assets/images/profile2.png";
import VerifiedIcon from "../../assets/icons/VerifiedIcon";

function VisitCountCard() {
  const [isActive, setIsActive] = useState(true);
  function toggleIsActive() {
    setIsActive((isActive) => !isActive);
  }
  function toOrdinal(number: number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder10 = number % 10;
    const remainder100 = number % 100;
    return (
      number +
      suffixes[
        remainder10 < 4 &&
        remainder100 !== 11 &&
        remainder100 !== 12 &&
        remainder100 !== 13
          ? remainder10
          : 0
      ]
    );
  }
  const visitCount = Number(localStorage.getItem("visitCount")) || 1;
  const ordinalVisitCount = toOrdinal(visitCount);
  useEffect(() => {
    localStorage.setItem("visitCount", (visitCount + 1).toString());
  }, []);

  const comp = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#visit-count-card",
        {
          x: "110%",
          duration: 1,
        },
        {
          x: 0,
          duration: 1,
        }
      );

      gsap.fromTo(
        "#visit-count-card",
        {
          x: 0,
          duration: 1,
          delay: 6,
        },
        {
          x: "110%",
          duration: 1,
          delay: 6,
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="">
      <div
        id="visit-count-card"
        className={`w-[25rem] max-sm:w-[21rem] dark:text-first-text-color text-second-text-color duration-300 flex flex-col dark:bg-first-card bg-second-card rounded-lg dark:border-grey border-[.1px] fixed bottom-5 right-2 transition-all ${
          isActive ? "" : "hidden"
        }`}
      >
        <div className="border-b-[.1px] dark:border-grey p-4 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              src={profile2}
              className="w-7 h-7 rounded-full"
              alt="Profile"
            />
            <div className="flex items-center justify-center gap-[.1rem]">
              <p className=" font-bold dark:text-first-text-color transition-colors duration-300 text-second-text-color">
                khaleed
              </p>
              <VerifiedIcon />
            </div>
            <p className="text-grey">·</p>
            <p className="text-grey">just now</p>
          </div>
          <Cancel toggleIsActive={toggleIsActive} />
        </div>
        <div className="p-4 flex items-center">
          {ordinalVisitCount === "1st" ? (
            <p>
              Hey there, Welcome aboard! It seems like it's your first time
              here. You can find out what I am currently listening to
              <a href="#nowListening" className="text-first-accent cursor-cell">
                &nbsp;here
              </a>
              🙂.
            </p>
          ) : (
            <p>
              welcome back for the {toOrdinal(visitCount)} time. You can find
              out what I am currently listening to
              <a href="#nowListening" className="text-first-accent cursor-cell">
                &nbsp;here
              </a>{" "}
              🙂.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VisitCountCard;
