/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { SolutionCardType } from "../../types/types"; // Import the type definition for SolutionCardType
import HowItWorksCard from "./ServiceCard"; // Import the HowItWorksCard component
import DesignIcon from "../../assets/icons/DesignIcon"; // Import the design icon component
import CodeIcon from "../../assets/icons/CodeIcon"; // Import the code icon component
import RocketIcon from "../../assets/icons/RocketIcon"; // Import the rocket icon component

// Define an array of solution objects with their respective details
const solutions: SolutionCardType[] = [
  {
    problem: "Website Design",
    solution:
      "I create visually stunning and highly functional website designs that captivate visitors with compelling content and striking imagery.",
    cardIcon: DesignIcon,
  },
  {
    problem: "Website Development",
    solution:
      "I develop robust, scalable websites that provide seamless user experiences and meet all your technical requirements.",
    cardIcon: CodeIcon,
  },
  {
    problem: "Website Maintenance",
    solution:
      "I provide comprehensive website maintenance services to keep your site updated, secure, and running smoothly.",
    cardIcon: RocketIcon,
  },
];

// Component to render a list of service cards
function ServiceCardList() {
  return (
    // Container div to layout the service cards
    <div className="flex gap-10 flex-wrap justify-center">
      {/* Map through the solutions array and render a HowItWorksCard for each solution */}
      {solutions.map(({ problem, solution, cardIcon, cardImage }, index) => {
        return (
          <HowItWorksCard
            key={index} // Unique key for each card based on the index
            problem={problem} // Problem description for the card
            solution={solution} // Solution description for the card
            cardIcon={cardIcon} // Icon component for the card
            cardImage={cardImage} // Image for the card (if any)
          />
        );
      })}
    </div>
  );
}

export default ServiceCardList; // Export the ServiceCardList component as the default export
