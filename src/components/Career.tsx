import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Career() {
  const basePath = import.meta.env.BASE_URL;
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <motion.div
              animate={{
                x: [0, -10, 10, -10, 10, 0], // shaking animation on the x-axis
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1.5,
                repeatDelay: 2,
              }}
              className=" h-8 w-8"
            >
              <img src={`${basePath}` + "/rabit.svg"} className=" h-8 w-8" />
            </motion.div>
          </div>
          <div className="timeline-start md:text-end mb-10 p-2">
            <time className="font-semibold ">Sep 2022 - Jan 2024</time>
            <div className="font-bold text-lg text-primary">
              Application Support Officer
            </div>
            Gradient Information Systems <br />
          </div>
          <hr />
        </li>
        <motion.li
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="timeline-middle">
            <motion.div
              animate={{
                y: [0, -10, 10, -10, 10, 0], // shaking animation on the x-axis
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                repeatDelay: 2,
                delay: 3,
              }}
              className=" h-8 w-8"
            >
              <img src={`${basePath}` + "/monster.svg"} className=" h-8 w-8" />
            </motion.div>
          </div>
          <div className="timeline-end md:text-end mb-5 md:mb-10 p-2">
            <time className="font-semibold ">Jul 2021 - Jan 2022</time>
            <div className="font-bold text-lg text-primary">
              Front End Developer
            </div>
            AgileTech VN
          </div>
          <hr />
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="timeline-middle">
            <motion.div
              animate={{
                x: [0, -10, 10, -10, 10, 0], // shaking animation on the x-axis
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                repeatDelay: 2,
                delay: 4,
              }}
              className=" h-8 w-8"
            >
              <img src={`${basePath}` + "/donut.svg"} className=" h-8 w-8" />
            </motion.div>
          </div>
          <div className="timeline-start md:text-end mb-10 p-2">
            <time className="font-semibold ">Nov 2022 - Feb 2021</time>
            <div className="font-bold text-lg text-primary">
              Software Engineer Intern
            </div>
            Yoctonab Data Integration Solution <br />
          </div>
        </motion.li>
      </ul>

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, delay: 4 }}
      >
        <div className="mt-10 text-center">
          <p className="font-bold">Dive into the details?!</p>
          <Button className="mt-2">
            <Link to="/projects">View my achievements</Link>
          </Button>
          <br />
          <Button className="mt-2">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1z5DQo8qnkM7yNcKU0Myv-uPfLIlTKIGR/view?usp=sharing"
            >
              Unlock My Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default Career;
