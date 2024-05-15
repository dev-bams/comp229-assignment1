/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import type { NameProp } from "../../types/types"; // Import type definition for NameProp
import Character from "./Character"; // Import the Character component

// Component to render a name composed of individual characters
function Name({ characters }: NameProp) {
  return (
    // Container div for the name characters with flex layout and small gap between them
    <div className="flex gap-[0.1rem]">
      {/* Map through the characters array and render a Character component for each character */}
      {characters.map((character, key) => {
        return <Character alphabet={character} key={key} />; // Pass the character and key as props to Character component
      })}
    </div>
  );
}

export default Name; // Export the Name component as the default export
