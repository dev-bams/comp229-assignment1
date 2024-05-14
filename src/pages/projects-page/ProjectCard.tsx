import { useState } from "react";
import type { ProjectCardProps } from "../../types/types";
import VisitLinkIcon from "../../assets/icons/VisitLinkIcon";
function ProjectCard({
  projectImage,
  projectTitle,
  overlayProjectDescription,
  link,
  technologies,
  linkName,
}: ProjectCardProps) {
  const [isOverLayActive, setIsOverLayActive] = useState(false);

  function toggleOverLay() {
    setIsOverLayActive(!isOverLayActive);
  }

  return (
    <div
      onMouseEnter={toggleOverLay}
      onMouseLeave={toggleOverLay}
      className="rounded-lg text-lg basis-[600px] dark:bg-first-card bg-second-card overflow-hidden border dark:border-none"
    >
      <div className="flex flex-col justify-center h-full w-full items-center cursor-cell relative overflow-hidden">
        <a className="w-full h-full cursor-cell" href={link}>
          <img className="w-full h-full" src={projectImage} />
        </a>
        <div
          className={`card__overlay w-full h-full absolute flex justify-center items-center dark:bg-first-card bg-second-card ${
            isOverLayActive ? "card__overlay--active" : ""
          }`}
        >
          <div
            className={`card__overlay-text flex flex-col items-start h-full w-full justify-center p-4 gap-4 dark:text-white text-black ${
              isOverLayActive ? "card__overlay--active" : ""
            }`}
          >
            <div className="flex flex-col gap-1">
              <h1 className=" font-bold">{projectTitle}</h1>
              <h2 className="text-base">{overlayProjectDescription}</h2>
            </div>

            <div className="flex justify-between w-full gap-4 items-center flex-wrap">
              <h2 className="text-base">Technologies - {technologies}</h2>

              <a
                className="text-first-accent text-base flex items-center gap-1 hover:underline cursor-cell"
                href={link}
              >
                {linkName} <VisitLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
