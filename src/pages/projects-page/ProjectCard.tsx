/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { useState } from "react"; // Import useState hook from React
import type { ProjectCardProps } from "../../types/types"; // Import type definition for ProjectCardProps
import VisitLinkIcon from "../../assets/icons/VisitLinkIcon"; // Import the VisitLinkIcon component

function ProjectCard({
  projectImage,
  projectTitle,
  overlayProjectDescription,
  link,
  technologies,
  linkName,
}: ProjectCardProps) {
  const [isOverLayActive, setIsOverLayActive] = useState(false); // State to manage the overlay visibility

  // Function to toggle the overlay visibility
  function toggleOverLay() {
    setIsOverLayActive(!isOverLayActive);
  }

  return (
    // Container div for the project card with event handlers for mouse enter and leave
    <div
      onMouseEnter={toggleOverLay}
      onMouseLeave={toggleOverLay}
      className="rounded-lg text-lg basis-[600px] bg-first-card overflow-hidden border border-none"
    >
      <div className="flex flex-col justify-center h-full w-full items-center cursor-cell relative overflow-hidden">
        {/* Link wrapping the project image */}
        <a className="w-full h-full cursor-cell" href={link}>
          <img
            className="w-full h-full"
            src={projectImage}
            alt={`${projectTitle} screenshot`}
          />{" "}
          {/* Project image */}
        </a>
        <div
          className={`card__overlay w-full h-full absolute flex justify-center items-center bg-first-card ${
            isOverLayActive ? "card__overlay--active" : ""
          }`}
        >
          <div
            className={`card__overlay-text flex flex-col items-start h-full w-full justify-center p-4 gap-4 text-white ${
              isOverLayActive ? "card__overlay--active" : ""
            }`}
          >
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">{projectTitle}</h1>{" "}
              {/* Project title */}
              <h2 className="text-base">{overlayProjectDescription}</h2>{" "}
              {/* Overlay project description */}
            </div>

            <div className="flex justify-between w-full gap-4 items-center flex-wrap">
              <h2 className="text-base">Technologies - {technologies}</h2>{" "}
              {/* Technologies used */}
              <a
                className="text-first-accent text-base flex items-center gap-1 hover:underline cursor-cell"
                href={link}
              >
                {linkName} <VisitLinkIcon /> {/* Project link with icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; // Export the ProjectCard component as the default export
