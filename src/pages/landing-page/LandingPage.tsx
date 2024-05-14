import WelcomeSection from "./WelcomeSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import SectionDivider from "./SectionDivider";
import TopArrow from "./TopArrow";
function LandingPage() {
  return (
    <div className="flex flex-col relative bg-second-primary dark:bg-first-primary ">
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
    </div>
  );
}

export default LandingPage;
