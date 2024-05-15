import NavLink from "./NavLink";

function MobileNavLinks() {
  return (
    <div>
      <div className="flex gap-6 items-center justify-center p-4">
        <NavLink link="/" linkName="home" />
        <NavLink link="/about" linkName="about" />
        <NavLink link="/projects" linkName="projects" />
        <NavLink link="/services" linkName="services" />
        <NavLink link="/contact" linkName="contact" />
      </div>
    </div>
  );
}

export default MobileNavLinks;
