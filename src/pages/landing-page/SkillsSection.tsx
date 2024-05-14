import SectionTitle from "./SectionTitle";
import SkillGroup from "./SkillGroup";
import SkillCodeEditor from "./SkillCodeEditor";
// import CurrentlyLearning from "./CurrentlyLearning";

function SkillsSection() {
  return (
    <div
      className="flex justify-center transition-colors duration-300 bg-second-primary dark:bg-first-primary min-h-lvh"
      id="skills"
    >
      <div className="max-w-7xl w-full p-4 flex flex-col justify-center gap-10 ">
        <SectionTitle sectionTitle="skills" />
        <div className="flex h-full items-center gap-6 flex-wrap justify-center">
          {/* <div className="flex flex-col basis-96 grow gap-4"> */}
          <SkillGroup />
          {/* <CurrentlyLearning /> */}
          {/* </div> */}
          <SkillCodeEditor />
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
