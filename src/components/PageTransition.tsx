import { AnimatePresence, motion } from "framer-motion";
import WebRouter from "../router/WebRouter";
import { useLocation } from "react-router-dom";

function pageTransition() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div key={location.pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-background top-0 pointer-events-none"
        ></motion.div>
      </div>
      <WebRouter></WebRouter>
    </AnimatePresence>
  );
}

export default pageTransition;
