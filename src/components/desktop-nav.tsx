import { Link } from "react-router-dom";
function desktopNav() {
  return (
    <nav className="flex gap-8">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}

export default desktopNav;
