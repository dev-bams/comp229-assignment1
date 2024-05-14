import SkillIcon from "./SkillIcon";
import CSharp from "../../assets/icons/CSharp";
import Java from "../../assets/icons/Java";
import Javascript from "../../assets/icons/Javascript";
import Typescript from "../../assets/icons/Typescript";
import HTML from "../../assets/icons/HTML";
import CSS from "../../assets/icons/CSS";
import React from "../../assets/icons/React";
import Next from "../../assets/icons/Next";
import Mongodb from "../../assets/icons/Mongodb";
import Nodejs from "../../assets/icons/Nodejs";
import Tailwind from "../../assets/icons/Tailwind";
import Git from "../../assets/icons/Git";
// import Rust from "../../assets/icons/Rust";
import Python from "../../assets/icons/Python";
import SCSS from "../../assets/icons/SCSS";
import Bash from "../../assets/icons/Bash";
import Figma from "../../assets/icons/Figma";
// import CPlusPlus from "../../assets/icons/CPlusPlus";
// import Angular from "../../assets/icons/Angular";
import SQL from "../../assets/icons/SQL";

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
    // Angular,
    // Rust,
    // CPlusPlus,
  ];
  return (
    <div className="dark:bg-first-card bg-second-card transition-colors duration-300 p-6 rounded-lg basis-96 grow">
      <div className="flex gap-4 flex-wrap justify-center">
        {skills.map((skillName, index) => {
          return <SkillIcon icon={skillName} key={index} />;
        })}
      </div>
    </div>
  );
}

export default SkillGroup;
