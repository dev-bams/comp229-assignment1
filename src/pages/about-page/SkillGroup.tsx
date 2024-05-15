/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import SkillIcon from "./SkillIcon"; // Import the SkillIcon component
import CSharp from "../../assets/icons/CSharp"; // Import the CSharp icon
import Java from "../../assets/icons/Java"; // Import the Java icon
import Javascript from "../../assets/icons/Javascript"; // Import the Javascript icon
import Typescript from "../../assets/icons/Typescript"; // Import the Typescript icon
import HTML from "../../assets/icons/HTML"; // Import the HTML icon
import CSS from "../../assets/icons/CSS"; // Import the CSS icon
import React from "../../assets/icons/React"; // Import the React icon
import Next from "../../assets/icons/Next"; // Import the Next icon
import Mongodb from "../../assets/icons/Mongodb"; // Import the Mongodb icon
import Nodejs from "../../assets/icons/Nodejs"; // Import the Nodejs icon
import Tailwind from "../../assets/icons/Tailwind"; // Import the Tailwind icon
import Git from "../../assets/icons/Git"; // Import the Git icon
import Python from "../../assets/icons/Python"; // Import the Python icon
import SCSS from "../../assets/icons/SCSS"; // Import the SCSS icon
import Bash from "../../assets/icons/Bash"; // Import the Bash icon
import Figma from "../../assets/icons/Figma"; // Import the Figma icon
import SQL from "../../assets/icons/SQL"; // Import the SQL icon

// Component to display a group of skills icons
function SkillGroup() {
  const skills = [
    CSharp,
    Java,
    Javascript,
    Typescript,
    Python,
    HTML,
    CSS,
    React,
    Tailwind,
    Next,
    Nodejs,
    SQL,
    Mongodb,
    Bash,
    Git,
    SCSS,
    Figma,
  ];
  return (
    // Container div for the skill group with background color transition, padding, and border radius
    <div className="bg-first-card transition-colors duration-300 p-6 rounded-lg basis-96 grow">
      <div className="flex gap-4 flex-wrap justify-center">
        {/* Map through the skills array and render a SkillIcon component for each skill */}
        {skills.map((skillName, index) => {
          return <SkillIcon icon={skillName} key={index} />; // Pass the skill icon and key as props to SkillIcon component
        })}
      </div>
    </div>
  );
}

export default SkillGroup; // Export the SkillGroup component as the default export
