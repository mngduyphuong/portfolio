import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";
import Career from "@/components/Career";

function Resume() {
  return (
    <>
      <section className="h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, ease: easeIn } }}
          className="container mx-auto h-full"
        >
          <Tabs
            className="flex flex-col lg:flex-row gap-[60px] pt-2 lg:pt-8 pb-6 lg:pb-18"
            defaultValue="career"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="career" className="w-full">
              <Career></Career>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>
    </>
  );
}

export default Resume;
