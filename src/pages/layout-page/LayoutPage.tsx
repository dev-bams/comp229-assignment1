import { PageLayoutProp } from "../../../src/types/types";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import MobileNavBar from "../../components/navbar/MobileNavBar";
function LayoutPage({ children }: PageLayoutProp) {
  return (
    <div className="flex flex-col gap-0">
      <NavBar />
      <MobileNavBar />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutPage;
