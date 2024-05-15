/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import Name from "./Name"; // Import the Name component

// Component to render the full name composed of two sets of characters
function FullName() {
  // Arrays containing the characters for the first and second parts of the name
  const firstCharacters = ["K", "h", "a", "l", "e", "e", "d"];
  const secondCharacters = ["O", "p", "e", "l", "o", "y", "e", "r", "u", "."];

  return (
    // Container div for the full name with flex layout, gap, and alignment
    <div className="welcome-texts flex gap-8 flex-wrap items-center">
      {/* Render the Name component with the first set of characters */}
      <Name characters={firstCharacters} />
      {/* Render the Name component with the second set of characters */}
      <Name characters={secondCharacters} />
    </div>
  );
}

export default FullName; // Export the FullName component as the default export
