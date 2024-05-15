import { HamBurgerProps } from "../../types/types";
function HamburgerButton({ onClick }: HamBurgerProps) {
  return (
    <div className="cursor-cell" id="hamburger" onClick={onClick}>
      <svg
        width="48px"
        height="48px"
        viewBox="0 0 24 24"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default HamburgerButton;
