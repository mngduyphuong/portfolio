import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

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

function MobileNav() {
  const location = useLocation();

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-primary"></CiMenuFries>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center gap-8">
          <h1 className="text-xl font-semibold py-12">
            Phuong
            <span className="text-primary"> &lt;&#47;&gt;</span>
          </h1>
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
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;
