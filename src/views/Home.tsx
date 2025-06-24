import Photo from "@/components/Photo";
import Social from "@/components/Social";
import TitleTransition from "@/components/TitleTransition";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const titles = [
    "Portfolio",
    "Full Stack Dev",
    "Digital Dynamo",
    "Web Dev",
    "Tech Savvy",
    "Pixel Pundit",
  ];
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between pt-2 lg:pt-8 pb-6 lg:pb-18">
            <div className="order-2 lg:order-none text-left border-x-2 border-dashed border-primary lg:w-2/5">
              <div className="px-4 border-y-2 border-primary">
                <AnimatePresence>
                  <div className="">
                    <div className="">
                      <p className="text-primary">
                        Terminal basic <br /> Version 2.4-rcl-1403 <br />
                        1999 Bytes available
                      </p>
                      <h1 className="text-3xl lg:text-4xl mb-6 mt-2 font-bold">
                        <p>Andrew Nguyen</p>
                        <TitleTransition text={titles}></TitleTransition>
                        <p className="text-primary"></p>
                      </h1>
                      <div>
                        <p>Welcome to the Digital Frontier!</p>
                        <br />
                        <p className="text-pretty">
                          I'm a Software Engineer passionate about coding,
                          creativity and eager to enhance my skills by building
                          dynamic web apps and solving challenging problems.
                        </p>
                        <br />
                        <ul>
                          <li className="flex">
                            <span className="font-semibold text-primary w-24">
                              User:
                            </span>
                            <span className="flex-auto">
                              Data Operation Specialist
                            </span>
                          </li>
                          <li className="flex">
                            <span className="font-semibold text-primary w-24">
                              Dugeon:
                            </span>
                            <span className="flex-auto">Placard Pty. Ltd.</span>
                          </li>
                          <li className="flex">
                            <span className="font-semibold text-primary w-24">
                              Location:
                            </span>
                            <span className="flex-auto">Melbourne</span>
                          </li>
                          <li className="flex">
                            <span className="font-semibold text-primary w-24">
                              Skills:
                            </span>
                            <span className="flex-auto">
                              Experience in Web Apps
                            </span>
                          </li>
                          <li className="flex">
                            <span className="font-semibold text-primary w-24">
                              Status:
                            </span>
                            <span className="flex-auto">Leveling up</span>
                          </li>
                        </ul>
                        <br />
                        <span>Click </span>
                        <Link
                          to="/resume"
                          className="text-primary hover:border-b-2 border-primary"
                        >
                          HERE
                        </Link>
                        <span> to view my journey!</span>
                        <div className="flex items-center">
                          <p className="text-primary items-center">&gt;</p>
                          <motion.div
                            animate={{ opacity: [0, 1] }}
                            transition={{
                              delay: 1,
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            style={{
                              backgroundColor: "green",
                            }}
                            className="text-xl text-primary inline-block w-2.5 h-5 ml-2 mt-1"
                          ></motion.div>
                        </div>
                        <div className="py-3">
                          <Social
                            containerStyles="flex gap-6"
                            iconStyles="text-base w-9 h-9 border border-accent rounded-full flex justify-center items-center text-primary hover:bg-accent hover:text-primary hover:transition-all duration-500"
                          ></Social>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatePresence>
              </div>
            </div>
            <div className="order-1 lg:order-none mb-8 lg:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
