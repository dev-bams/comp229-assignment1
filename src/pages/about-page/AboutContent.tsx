import AboutDetails from "./AboutDetails";
import SkillGroup from "./SkillGroup";
function AboutContent() {
  return (
    <div className="flex h-full items-center flex-col">
      <div className="flex gap-10 justify-center items-center flex-wrap">
        <AboutDetails />
        <SkillGroup />
      </div>
    </div>
  );
}

export default AboutContent;
