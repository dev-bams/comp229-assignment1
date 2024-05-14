import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
// import { useEffect, useState } from "react";
import "../src/styles/index.css";
import "../src/styles/gradient.css";
import "../src/styles/scroll-bar.css";
import "../src/styles/now-playing.css";
import "../src/styles/project.css";
import "../src/styles/style.css";
import ErrorPage from "./pages/error-page/ErrorPage";
import LandingPage from "./pages/landing-page/LandingPage";
// import Logo from "./components/Logo";

function App() {
  console.log(
    "%c Well, well, well... Look who's trying to be sneaky! 👀",
    "color: #73FFCD"
  );
  console.log(
    "%c You've found the hidden gem of my website. Enjoy your stay! 😊",
    "color: #646cff"
  );
  const [isDarkMode, setIsDarkMode] = useState(true);
  // const themePreference = Boolean(localStorage.getItem("isDarkMode"));
  // const [isDarkMode, setIsDarkMode] = useState(themePreference ?? true);
  // useEffect(() => {
  //   console.log("ran in use effect");
  //   localStorage.setItem("isDarkMode", "false");
  //   console.log(Boolean(localStorage.getItem("isDarkMode")));
  // }, [isDarkMode]);
  function toggleIsDarkMode() {
    // console.log("ran in toggle function");
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LandingPage
          toggleIsDarkMode={toggleIsDarkMode}
          isDarkMode={isDarkMode}
        />
      ),
      errorElement: (
        <ErrorPage
          toggleIsDarkMode={toggleIsDarkMode}
          isDarkMode={isDarkMode}
        />
      ),
    },
    // {
    //   path: "/logo",
    //   element: <Logo />,
    // },
  ]);
  return (
    <div className={`w-full h-full ${isDarkMode ? "dark" : ""}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
