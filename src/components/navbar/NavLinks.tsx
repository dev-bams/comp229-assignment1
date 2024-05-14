import NavLink from "./NavLink";

function NavLinks() {
  return (
    <div className="flex gap-14 items-center">
      <NavLink link="/" linkName="home" />
      <NavLink link="/about" linkName="about" />
      <NavLink link="/services" linkName="services" />
      <NavLink link="/projects" linkName="projects" />
      <NavLink link="/contact" linkName="contact" />
    </div>
  );
}

export default NavLinks;
