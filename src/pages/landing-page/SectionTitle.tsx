import type { SectionTitleProps } from "../../types/types";
function SectionTitle({ sectionTitle }: SectionTitleProps) {
  return (
    <div className="flex justify-center">
      <h2 className="word-gradient text-6xl font-bold ">{sectionTitle}</h2>
    </div>
  );
}

export default SectionTitle;
