import bundleup from "../assets/images/bundleup-logo.png";

function Bundleup() {
  return (
    <div className="hover:scale-105 transition hover:opacity-70">
      <a href="https://bundleup.us/khaleed" className="cursor-cell">
        <img className="w-[26px] h-[26px]" src={bundleup} />
      </a>
    </div>
  );
}

export default Bundleup;
