import profile from "../../assets/images/khaleed.png"

function ModeButton() {
  return (
    <div className="-translate-y-[100px]" id="mode-button">
      <img src={profile} className="w-14 h-14" />
    </div>
  );
}

export default ModeButton;
