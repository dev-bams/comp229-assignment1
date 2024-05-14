import SkillCodeEditorTop from "./SkillCodeEditorTop";
import SkillJSON from "./SkillJSON";

function SkillCodeEditor() {
  return (
    <div className="dark:bg-first-card bg-second-card w-1/2 rounded-lg p-6 flex flex-col gap-4 shadow-lg basis-96 grow-[1]">
      <SkillCodeEditorTop />
      <SkillJSON />
    </div>
  );
}

export default SkillCodeEditor;
