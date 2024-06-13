//page view
import Home from "../views/Home";
import Contact from "../views/Contact";
import Resume from "../views/Resume";
import Projects from "../views/Projects";
import { Routes, Route } from "react-router-dom";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default Router;
