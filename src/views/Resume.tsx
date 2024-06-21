import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { easeIn, motion, AnimatePresence } from "framer-motion";
import Career from "@/components/Career";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

function Resume() {
  const [activeTab, setActiveTab] = useState("career");

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
  };

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <section className="h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, ease: easeIn } }}
          className="container mx-auto h-full w-full"
        >
          <Tabs
            className="flex flex-col lg:flex-row gap-[60px] pt-2 lg:pt-8 pb-6 lg:pb-18"
            defaultValue="career"
            value={activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <AnimatePresence>
              {activeTab === "career" && (
                <motion.div
                  key="career"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <TabsContent value="career">
                    <Career />
                  </TabsContent>
                </motion.div>
              )}
              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <TabsContent value="education">
                    <Education></Education>
                  </TabsContent>
                </motion.div>
              )}
              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <TabsContent value="skills">
                    <Skills />
                  </TabsContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </section>
    </>
  );
}

export default Resume;
