import type { NavLinkProp } from "../../types/types";
import { Link } from "react-router-dom";

function NavLink({ linkName, link }: NavLinkProp) {
  return (
    <div className="nav-link hover:scale-110 transition duration-300 text-first-text-color hover:text-first-accent sm:-translate-y-[55px]">
      <Link to={link} className="font-bold cursor-cell">
        {linkName}
      </Link>
    </div>
  );
}

export default NavLink;
