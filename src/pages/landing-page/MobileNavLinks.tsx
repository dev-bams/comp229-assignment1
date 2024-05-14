import NavLink from "../../components/NavLink";

function MobileNavLinks() {
  return (
    <div>
      <div className="flex gap-8 items-center justify-center p-4">
        <NavLink link="#about" linkName="about" />
        <NavLink link="#skills" linkName="skills" />
        <NavLink link="#projects" linkName="projects" />
        <NavLink link="#contact" linkName="contact" />
      </div>
    </div>
  );
}

export default MobileNavLinks;
