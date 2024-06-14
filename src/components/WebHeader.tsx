import DesktopNav from "./DesktopNav";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function header() {
  return (
    <div>
      <header className="py-8 lg:py-12">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-4xl font-semibold">
              Phuong
              <span className="text-primary"> &lt;&#47;&gt;</span>
            </h1>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <DesktopNav></DesktopNav>
            {/* <ModeToggle></ModeToggle> */}
          </div>
          <div className="lg:hidden items-center gap-8">
            <MobileNav></MobileNav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default header;
