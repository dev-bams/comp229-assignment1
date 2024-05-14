function DownArrow() {
  return (
    <div id="down-arrow" className="flex justify-center p-4">
      <a href="#about" className="cursor-cell">
        <svg
          width="100px"
          height="100px"
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
              stroke="#5cc553"
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

export default DownArrow;
