import { Link } from "react-router-dom";
import profile from "../../assets/images/khaleed.png";

function ModeButton() {
  return (
    <div className="-translate-y-[100px]" id="mode-button">
      <Link to="/" className="cursor-cell">
        <img src={profile} className="w-14 h-14" />
      </Link>
    </div>
  );
}

export default ModeButton;
