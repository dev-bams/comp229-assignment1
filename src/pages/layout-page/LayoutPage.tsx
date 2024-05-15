/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { PageLayoutProp } from "../../../src/types/types"; // Import type definition for PageLayoutProp
import NavBar from "../../components/navbar/NavBar"; // Import the NavBar component
import Footer from "../../components/footer/Footer"; // Import the Footer component
import MobileNavBar from "../../components/navbar/MobileNavBar"; // Import the MobileNavBar component

// Component for the layout of pages
function LayoutPage({ children }: PageLayoutProp) {
  return (
    // Container div for the layout with flex column layout and no gap between children
    <div className="flex flex-col gap-0">
      <NavBar /> {/* Render the NavBar component */}
      <MobileNavBar /> {/* Render the MobileNavBar component */}
      {children} {/* Render the children components passed to LayoutPage */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default LayoutPage; // Export the LayoutPage component as the default export
