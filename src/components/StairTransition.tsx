import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

function StairTransition() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            {[...Array(6)].map((_, index) => {
              return (
                <motion.div
                  key={index}
                  variants={stairAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                  }}
                  className="h-full w-full bg-accent relative"
                ></motion.div>
              );
            })}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition;
