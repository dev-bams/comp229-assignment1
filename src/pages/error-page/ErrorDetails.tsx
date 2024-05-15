/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import error from "../../assets/images/error.png"; // Import the error image

// Component to display error details when a page is not found
function ErrorDetails() {
  return (
    // Container div for error details with flex layout, gap, and alignment
    <div className="flex items-center justify-center flex-col gap-6 grow">
      {/* Error message with inline styling and classes for color transition */}
      <p className="dark:text-first-text-color text-second-text-color transition-colors duration-300 text-lg font-bold">
        hmmmmm looks like you are lost
      </p>
      {/* Container for the error image with max width */}
      <div className="max-w-md">
        <img src={error} className="w-full h-full" alt="Error" />{" "}
        {/* Error image */}
      </div>
      {/* Message with link to navigate back to home page */}
      <p className="dark:text-first-text-color text-second-text-color transition-colors duration-300 text-2xl font-bold">
        let's get you back{" "}
        <Link
          to="/" // Link to the home page
          className="cursor-cell dark:text-second-accent text-second-accent dark:hover:text-first-accent hover:text-first-accent transition duration-300"
        >
          Home
        </Link>
      </p>
    </div>
  );
}

export default ErrorDetails; // Export the ErrorDetails component as the default export
