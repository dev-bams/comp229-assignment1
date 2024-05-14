import type { NavLinkProp } from "../../types/types";

function NavLink({ linkName, link }: NavLinkProp) {
  return (
    <div className="nav-link hover:scale-110 transition duration-300 text-second-text-color dark:text-first-text-color hover:text-first-accent dark:hover:text-first-accent sm:-translate-y-[55px]">
      <a href={link} className="font-bold cursor-cell">
        {linkName}
      </a>
    </div>
  );
}

export default NavLink;
