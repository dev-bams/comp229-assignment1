import type { SkillIconProp } from "../../types/types";

function SkillIcon({ icon: Icon }: SkillIconProp) {
  return (
    <div className="bg-first-icon transition-colors duration-300 p-2 element rounded">
      <Icon />
    </div>
  );
}

export default SkillIcon;
