import FullName from "./FullName";

function Logo() {
  return (
    <div className="min-h-lvh flex items-center justify-center bg-first-primary flex-col">
      <div className=" flex flex-col justify-center w-full max-w-7xl p-4 gap-6 ">
        <h2 className="welcome-texts text-second-text-color dark:text-first-text-color transition-colors duration-300 text-lg font-bold ">
          Hey there!{" "}
          <span className="text-first-accent dark:selection:bg-black dark:selection:text-first-accent selection:bg-slate-200">
            I'm
          </span>
        </h2>
        <FullName />
      </div>
    </div>
  );
}

export default Logo;
