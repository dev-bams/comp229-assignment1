import AboutContent from "./AboutContent";
function AboutSection() {
  return (
    <div
      id="about"
      className=" flex justify-center transition-colors duration-300 bg-second-primary dark:bg-first-primary min-h-lvh"
    >
      <div className="max-w-7xl w-full p-4 flex flex-col justify-center gap-10">
        <AboutContent />
      </div>
    </div>
  );
}

export default AboutSection;
