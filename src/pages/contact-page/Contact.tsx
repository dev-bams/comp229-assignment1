import Mail from "../../assets/icons/Mail";
import Linkedin from "../../assets/icons/Linkedin";
import Instagram from "../../assets/icons/Instagram";
import X from "../../assets/icons/X";
import Bundleup from "../../components/Bundleup";
// import LikeButton from "./LikeButton";
// import Github from "../../assets/icons/Github";

function Contact() {
  return (
    <div className="flex gap-4">
      {/* <Github /> */}
      <Mail />
      <Linkedin />
      <Instagram />
      <X />
      <Bundleup />
      {/* <LikeButton /> */}
    </div>
  );
}

export default Contact;
