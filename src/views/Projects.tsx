import { useState, useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { BiGame } from "react-icons/bi";
import { SiGamebanana, SiWegame, SiGamejolt } from "react-icons/si";
import { GiAncientSword } from "react-icons/gi";
import { FaMintbit } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

const basePath = import.meta.env.BASE_URL;
const imageURL = [
  "project1.jpg",
  "project2.jpg",
  "project3.jpg",
  "project4.jpg",
  "project5.jpg",
];
const projects = [
  {
    num: "1",
    category: "full stack",
    title: "2esystem - CRUD aviation system",
    description:
      "A fully responsive CRUD web application for managing airports and airlines",
    stack: [
      "Vue.Js 2",
      "Boostrap",
      "PostgreSQL",
      "Axios",
      "Express.Js",
      "Google Map API",
    ],
    live: "https://twoesystem-fe.onrender.com/",
    github: "https://github.com/mngduyphuong/2eSystem",
    symbol: <SiGamejolt />,
  },
  {
    num: "2",
    category: "front end",
    title: "React personal portfolio",
    description:
      "A static website contains my personal portfolio designed with an 8-bit game theme and a retro-style interface.",
    stack: ["React", "Typescript", "Tailwind CSS", "Framer Motion"],
    live: "https://mngduyphuong.github.io/portfolio/",
    github: "https://github.com/mngduyphuong/portfolio",
    symbol: <SiGamebanana />,
  },
  {
    num: "3",
    category: "back end",
    title: "Java Weather App",
    description:
      "A backend-only Spring Boot application that fetches real-time weather data from the OpenWeatherMap API, provides REST endpoints for access, and includes CI/CD pipelines to AWS EC2.",
    stack: ["Java", "Spring Boot", "AWS EC2", "OpenWeatherMap API"],
    live: "http://ec2-3-106-189-38.ap-southeast-2.compute.amazonaws.com:8080/weather?location=melbourne,au",
    github: "https://github.com/mngduyphuong/weather-java",
    symbol: <FaMintbit />,
  },
  {
    num: "4",
    category: "front end",
    title: "USKU delivery service",
    description:
      "Developed the web interface for a data analytics system as the sole Front-End Developer in a team of six students. This repository highlights my frontend work, excluding databases, back-end service and dynamic data.",
    stack: ["Nuxt.Js", "Axios", "Vuetify"],
    live: "https://mngduyphuong.github.io/USKU-Frontend/",
    github: "https://github.com/mngduyphuong/USKU-Frontend",
    symbol: <SiWegame />,
  },
  {
    num: "5",
    category: "front end",
    title: "Weather app",
    description:
      "A simple Weather app built in Vue.Js that uses the OpenWeatherMap API to fetch and display current weather data.",
    stack: ["Vue.Js 2", "Axios", "OpenWeatherMap API"],
    live: "https://mngduyphuong.github.io/Vue-weather-app/",
    github: "https://github.com/mngduyphuong/Vue-weather-app",
    symbol: <BiGame />,
  },
];

function Projects() {
  const [project, setProject] = useState(projects[0]);
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setProject(projects[api.selectedScrollSnap()]);
      plugin.current.reset();
    });
  }, [api]);

  const plugin = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false, stopOnFocusIn: false })
  );
  return (
    <Carousel plugins={[plugin.current]} setApi={setApi}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        className=" flex flex-col justify-center py-12 lg:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none relative">
              <AnimatePresence>
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:absolute lg:w-full mt-10 lg:mt-0"
                >
                  <div className="flex flex-col gap-[30px] h-[50%]">
                    <div className="flex gap-[10px] text-4xl mt-2 lg:mt-0  leading-none font-bold text-primary">
                      <CarouselPrevious />
                      <p>Quest {project.num}/5</p>
                      {project.symbol}
                      <CarouselNext />
                    </div>
                    <h2 className="flex gap-[16px] text-xl font-bold leading-none group-hover:text-primary transition-all duration-500 capitalize">
                      <GiAncientSword className="text-primary" />{" "}
                      {project.category} adventure
                      <GiAncientSword className="text-primary" />
                    </h2>
                    <p className="text-slate-400">{project.description}</p>
                    <ul className="flex gap-4 flex-wrap">
                      {project.stack.map((item: string, index: number) => {
                        return (
                          <li key={index} className=" text-primary">
                            {item} {index !== project.stack.length - 1 && ","}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="border border-white/20"></div>
                    <div className="flex items-center gap-4">
                      <a target="_blank" href={project.live}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-accent flex justify-center items-center group">
                              <BsArrowUpRight className="group-hover:text-primary"></BsArrowUpRight>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                      <a target="_blank" href={project.github}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-[48px] h-[48px] rounded-full bg-accent flex justify-center items-center group">
                              <BsGithub className="group-hover:text-primary"></BsGithub>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="w-full h-auto">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="lg:h-[480px] relative group flex justify-center items-center">
                        <div>
                          <img
                            src={`${basePath}/${imageURL[index]}`}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Carousel>
  );
}

export default Projects;
