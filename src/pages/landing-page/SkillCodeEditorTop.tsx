function SkillCodeEditorTop() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <div className=" w-3 bg-close-button h-3 rounded-full"></div>
        <div className=" w-3 bg-minimize-button h-3 rounded-full"></div>
        <div className=" w-3 bg-expand-button h-3 rounded-full"></div>
      </div>
      <div className="flex w-full justify-center">
        <p className="text-first-text-color">
          Skills.json
        </p>
      </div>
      <div className="w-[52px]"></div>
    </div>
  );
}

export default SkillCodeEditorTop;
