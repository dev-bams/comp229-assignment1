import FullName from "./FullName";

function ModeButton() {
  return (
    <div className="min-h-lvh flex items-center justify-center bg-first-primary flex-col">
      <div className=" flex flex-col justify-center w-full max-w-7xl p-4 gap-6 ">
        <h2 className="welcome-texts text-first-text-color transition-colors duration-300 text-lg font-bold ">
          Hey there!{" "}
          <span className="selection:bg-black selection:text-first-accent">
            I'm
          </span>
        </h2>
        <FullName />
      </div>
    </div>
  );
}

export default ModeButton;
