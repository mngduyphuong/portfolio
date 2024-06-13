import DesktopNav from "./desktop-nav";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

function header() {
  return (
    <div>
      <header className="py-8 lg:py-12">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-4xl font-semibold">
              Phuong<span className="text-primary">.</span>
            </h1>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <DesktopNav></DesktopNav>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </header>
    </div>
  );
}

export default header;
