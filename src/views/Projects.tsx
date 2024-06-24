import { useState, useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
];
const projects = [
  {
    num: "1",
    category: "fullstack",
    title: "2esystem - CRUD aviation system",
    description:
      "A fully responsive CRUD web application for managing airports and airline",
    stack: [
      "Vue.Js 2",
      "Boostrap",
      "PostgreSQL",
      "Axios",
      "Express.JS",
      "Google Map API",
    ],
    live: "https://twoesystem-fe.onrender.com/",
    github: "https://github.com/mngduyphuong/2eSystem",
  },
  {
    num: "2",
    category: "frontend",
    title: "React personal portfolio",
    description:
      "A static website contains my personal portfolio designed with an 8-bit game theme. It showcases my skills, projects, and experience in a retro-style interface.",
    stack: ["React", "Typescript"],
    live: "https://mngduyphuong.github.io/portfolio/",
    github: "https://github.com/mngduyphuong/portfolio",
  },
  {
    num: "3",
    category: "frontend",
    title: "USKU delivery service",
    description:
      "Developed the web interface for a data analytics system as the sole Frontend Developer in a team of six students. This repository highlights my frontend work, minus databases and dynamic data",
    stack: ["Nuxt.Js", "Axios", "Vuetify"],
    live: "https://mngduyphuong.github.io/USKU-Frontend/",
    github: "https://github.com/mngduyphuong/USKU-Frontend",
  },
  {
    num: "4",
    category: "frontend",
    title: "Weather app",
    description:
      "A simple Weather app in Vue JS, we use the Open Weather Map API to make calls to a restful api to return the current weather data",
    stack: ["Vue.Js 2", "Axios"],
    live: "https://mngduyphuong.github.io/Vue-weather-app/",
    github: "https://github.com/mngduyphuong/Vue-weather-app",
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
    });
  }, [api]);

  const plugin = useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false, stopOnFocusIn: false })
  );
  return (
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
                  <div className="mt-2 lg:mt-0 text-4xl leading-none font-extrabold text-primary">
                    Project {project.num}/4
                  </div>
                  <h2 className="text-xl font-bold leading-none group-hover:text-primary transition-all duration-500 capitalize">
                    {project.category} project
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
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-auto"
              setApi={setApi}
            >
              <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
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
            </Carousel>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
