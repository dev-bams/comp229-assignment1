/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/styles/index.css";         // Import global CSS styles
import "../src/styles/scroll-bar.css";    // Import custom scrollbar styles
import "../src/styles/project.css";       // Import project-specific CSS styles
import "../src/styles/style.css";         // Import additional general CSS styles

import ErrorPage from "./pages/error-page/ErrorPage";             // Import ErrorPage component
import LandingPage from "./pages/landing-page/LandingPage";       // Import LandingPage component
import LayoutPage from "./pages/layout-page/LayoutPage";          // Import LayoutPage component
import AboutPage from "./pages/about-page/AboutPage";             // Import AboutPage component
import ProjectsPage from "./pages/projects-page/ProjectsPage";    // Import ProjectsPage component
import ServicesPage from "./pages/services-page/ServicesPage";    // Import ServicesPage component
import ContactPage from "./pages/contact-page/ContactPage";       // Import ContactPage component

function App() {
  // Create a router with defined routes and their corresponding components
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LayoutPage>
          <LandingPage />
        </LayoutPage>
      ),
      errorElement: <ErrorPage />,    // Define an error element for invalid routes
    },
    {
      path: "/about",
      element: (
        <LayoutPage>
          <AboutPage />
        </LayoutPage>
      ),
    },
    {
      path: "/services",
      element: (
        <LayoutPage>
          <ServicesPage />
        </LayoutPage>
      ),
    },
    {
      path: "/projects",
      element: (
        <LayoutPage>
          <ProjectsPage />
        </LayoutPage>
      ),
    },
    {
      path: "/contact",
      element: (
        <LayoutPage>
          <ContactPage />
        </LayoutPage>
      ),
    },
  ]);

  return (
    // Return a div that wraps the RouterProvider to handle routing
    <div className={`w-full h-full`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;    // Export the App component as the default export
