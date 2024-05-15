import AboutDetails from "./AboutDetails";
import SkillGroup from "./SkillGroup";
function AboutContent() {
  return (
    <div className="flex h-full items-center flex-col gap-10">
      <div className="flex gap-10 justify-center items-center flex-wrap">
        <AboutDetails />
        <SkillGroup />
      </div>
      <button className="border p-4 text-white rounded-lg">Download Resume</button>
    </div>
  );
}

export default AboutContent;
