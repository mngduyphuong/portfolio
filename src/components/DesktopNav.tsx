import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const desktopNav = () => {
  const location = useLocation();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            key={index}
            className={`${
              link.path === location.pathname &&
              "text-primary border-b-2 border-primary"
            } font-semibold capitalize hover:text-primary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default desktopNav;
