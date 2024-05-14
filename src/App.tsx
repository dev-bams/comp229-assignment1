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
  ]);
  return (
    <div className={`w-full h-full`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
