import { useEffect, useRef, useState } from "react";

function TopArrow() {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(isVisible);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  function toggleIsVisible() {
    setIsVisible((isVisible) => !isVisible);
  }
  function checkScrollPosition() {
    if (window.scrollY > 600 && !isVisibleRef.current) {
      toggleIsVisible();
    } else if (window.scrollY <= 600 && isVisibleRef.current) {
      setIsVisible(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  });
  return (
    <div
      className={`transition-all  flex p-4 rotate-180 dark:bg-first-card bg-second-card duration-300 w-12 justify-center h-12 fixed bottom-5 right-2 rounded-lg ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <a href="#welcome" className="cursor-cell">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10L12 15L17 10"
              stroke="#bcc0ff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </a>
    </div>
  );
}

export default TopArrow;
