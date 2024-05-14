import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/styles/index.css";
import "../src/styles/gradient.css";
import "../src/styles/scroll-bar.css";
import "../src/styles/now-playing.css";
import "../src/styles/project.css";
import "../src/styles/style.css";
import ErrorPage from "./pages/error-page/ErrorPage";
import LandingPage from "./pages/landing-page/LandingPage";
import LayoutPage from "./pages/layout-page/LayoutPage";
import AboutPage from "./pages/about-page/AboutPage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LayoutPage>
          <LandingPage />
        </LayoutPage>
      ),
      errorElement: <ErrorPage />,
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
      path: "/projects",
      element: (
        <LayoutPage>
          <ProjectsPage />
        </LayoutPage>
      ),
    },
  ]);
  return (
    <div className={`w-full h-full`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
