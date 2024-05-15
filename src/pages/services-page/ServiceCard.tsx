/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import type { SolutionCardProp } from "../../types/types"; // Import the type definition for SolutionCardProp

// Component to render a single "How It Works" card
function HowItWorksCard({
  problem,
  solution,
  cardIcon: CardIcon,
  cardImage,
}: SolutionCardProp) {
  return (
    // Container div for the card with Tailwind CSS classes for styling
    <div className="basis-96 grow flex flex-col gap-6 p-4 items-center rounded-md bg-first-card">
      <div className="flex flex-col gap-6 items-center rounded-md p-2 ">
        {/* Container for the icon or image with padding and rounded corners */}
        <div className="p-2 rounded-lg">
          {cardImage && <img className="w-12 h-12" src={cardImage} alt="" />}{" "}
          {/* Display image if provided */}
          {CardIcon && <CardIcon />} {/* Display icon if provided */}
        </div>

        {/* Container for the text content with spacing between elements */}
        <div className="flex flex-col gap-2">
          <p className="text-center font-semibold">{problem}</p>{" "}
          {/* Problem description */}
          <p className="text-center text-gray-600">{solution}</p>{" "}
          {/* Solution description */}
        </div>
      </div>
    </div>
  );
}

export default HowItWorksCard; // Export the HowItWorksCard component as the default export
