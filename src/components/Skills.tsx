import {
  FaBootstrap,
  FaCss3,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
  FaSass,
  FaSlack,
  FaVuejs,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiAzuredevops,
  SiAzurefunctions,
  SiCplusplus,
  SiCsharp,
  SiGraphql,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMicrosoftteams,
  SiMysql,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiQuasar,
  SiTailwindcss,
  SiVisualbasic,
  SiVuetify,
} from "react-icons/si";
import { VscSourceControl } from "react-icons/vsc";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Skills() {
  const skillList = [
    // Languages
    { icon: <FaHtml5 />, name: "HTML 5", type: "Language" },
    { icon: <FaSass />, name: "SASS", type: "Language" },
    { icon: <FaCss3 />, name: "CSS 3", type: "Language" },
    { icon: <FaJs />, name: "Javascript", type: "Language" },
    { icon: <SiVisualbasic />, name: "Visual Basic", type: "Language" },
    { icon: <SiCsharp />, name: "C#", type: "Language" },
    { icon: <SiCplusplus />, name: "C++", type: "Language" },
    { icon: <SiPhp />, name: "PHP", type: "Language" },

    // Frameworks & Libraries
    { icon: <FaNode />, name: "Node Js", type: "Framework" },
    { icon: <SiNuxtdotjs />, name: "Nuxt Js", type: "Framework" },
    { icon: <FaReact />, name: "React Js", type: "Framework" },
    { icon: <FaVuejs />, name: "Vue Js", type: "Framework" },

    // Databases
    { icon: <SiMicrosoftsqlserver />, name: "Microsoft SQL", type: "Database" },
    { icon: <SiPostgresql />, name: "Postgre SQL", type: "Database" },
    { icon: <SiMysql />, name: "MySQL", type: "Database" },
    { icon: <SiGraphql />, name: "GraphQL", type: "Database" },

    // CSS Frameworks
    { icon: <SiTailwindcss />, name: "TailwindCSS", type: "CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap", type: "CSS" },
    { icon: <SiAntdesign />, name: "Ant Design", type: "CSS" },
    { icon: <SiVuetify />, name: "Vuetify", type: "CSS" },
    { icon: <SiQuasar />, name: "Quasar", type: "CSS" },

    // DevOps & Tools
    { icon: <SiMicrosoftazure />, name: "Microsoft Azure", type: "Tool" },
    { icon: <SiAzuredevops />, name: "Microsoft Azure DevOps", type: "Tool" },
    {
      icon: <SiAzurefunctions />,
      name: "Microsoft Azure Functions",
      type: "Tool",
    },
    { icon: <VscSourceControl />, name: "Source Control", type: "Tool" },
    { icon: <FaSlack />, name: "Slack", type: "Tool" },
    { icon: <FaDocker />, name: "Docker", type: "Tool" },
    { icon: <SiMicrosoftteams />, name: "Microsoft Team", type: "Tool" },
    { icon: <FaGitAlt />, name: "Git", type: "Tool" },
    { icon: <FaFigma />, name: "Figma", type: "Tool" },
  ];

  return (
    <div className="w-full h-full">
      <p className="font-semibold text-3xl mb-6 ">Languages:</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
        {skillList
          .filter((skill) => skill.type === "Language")
          .map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-accent rounded-xl flex justify-center items-center group ">
                      <div className="text-6xl group-hover:text-primary transition-all duration-300 ">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
      </ul>

      <p className="font-semibold text-3xl mb-6 mt-10">Frameworks:</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
        {skillList
          .filter((skill) => skill.type === "Framework")
          .map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-accent rounded-xl flex justify-center items-center group ">
                      <div className="text-6xl group-hover:text-primary transition-all duration-300 ">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
      </ul>

      <p className="font-semibold text-3xl mb-6 mt-10">Databases:</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
        {skillList
          .filter((skill) => skill.type === "Database")
          .map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-accent rounded-xl flex justify-center items-center group ">
                      <div className="text-6xl group-hover:text-primary transition-all duration-300 ">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
      </ul>

      <p className="font-semibold text-3xl mb-6 mt-10">CSS Frameworks:</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
        {skillList
          .filter((skill) => skill.type === "CSS")
          .map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-accent rounded-xl flex justify-center items-center group ">
                      <div className="text-6xl group-hover:text-primary transition-all duration-300 ">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
      </ul>

      <p className="font-semibold text-3xl mb-6 mt-10">DevOps & Tools:</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
        {skillList
          .filter((skill) => skill.type === "Tool")
          .map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-accent rounded-xl flex justify-center items-center group ">
                      <div className="text-6xl group-hover:text-primary transition-all duration-300 ">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Skills;
