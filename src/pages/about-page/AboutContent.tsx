import AboutDetails from "./AboutDetails";
import khaleed from "../../../src/assets/images/khaleed.png";
import SkillGroup from "./SkillGroup";
function AboutContent() {
  return (
    <div className="flex h-full items-center flex-col">
      <div className="flex gap-10 justify-center items-center flex-wrap">
        <div className="basis-[19rem] grow-[1] flex items-center justify-center">
          <img src={khaleed} className="max-w-[570px]" />
        </div>
        <div className="basis-96 grow-[1] flex flex-col gap-4">
          <AboutDetails />
          <SkillGroup />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
