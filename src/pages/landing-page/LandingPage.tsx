import type { LandingPageProps } from "../../types/types";
import NavBar from "./NavBar";
import WelcomeSection from "./WelcomeSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import SectionDivider from "./SectionDivider";
import MobileNavBar from "./MobileNavBar";
import TopArrow from "./TopArrow";
import VisitCountCard from "./VisitCountCard";
function LandingPage({ toggleIsDarkMode, isDarkMode }: LandingPageProps) {
  return (
    <div className="flex flex-col relative bg-second-primary dark:bg-first-primary ">
      <NavBar toggleIsDarkMode={toggleIsDarkMode} isDarkMode={isDarkMode} />
      <MobileNavBar
        toggleIsDarkMode={toggleIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <WelcomeSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />
      <TopArrow />
      <VisitCountCard />
    </div>
  );
}

export default LandingPage;
