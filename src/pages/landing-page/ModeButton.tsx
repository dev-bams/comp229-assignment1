import type { ModeButtonProps } from "../../types/types";
import LightMode from "../../assets/icons/LightMode";
import DarkMode from "../../assets/icons/DarkMode";
function ModeButton({ toggleIsDarkMode, isDarkMode }: ModeButtonProps) {
  return (
    <div className="-translate-y-[100px]" id="mode-button">
      {isDarkMode ? (
        <LightMode toggleIsDarkMode={toggleIsDarkMode} />
      ) : (
        <DarkMode toggleIsDarkMode={toggleIsDarkMode}/>
      )}
    </div>
  );
}

export default ModeButton;
