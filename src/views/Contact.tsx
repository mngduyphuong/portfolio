import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaMobileRetro } from "react-icons/fa6";
import { PiMailboxLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { CgGames } from "react-icons/cg";

const info = [
  {
    icon: <FaMobileRetro />,
    title: "Phone",
    detail: "+61 404 662 318",
  },
  {
    icon: <PiMailboxLight />,
    title: "Email",
    detail: "mngduyphuong@gmail.com",
  },
  {
    icon: <CiLocationOn />,
    title: "Location",
    detail: "Melbourne, Australia",
  },
];
function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
      className=" py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className=" lg:h-[54%] order-2 lg:order-none">
            <form className="flex flex-col gap-6 px-6 lg:px-10 py-6 lg:py-10 bg-accent rounded-xl">
              <div className="flex text-xl font-semibold lg:text-3xl text-primary gap-2 items-center">
                <p>Start Your Adventure!</p>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <CgGames></CgGames>
                </motion.div>
              </div>
              <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Textarea placeholder="Type your message here."></Textarea>
              <Button className="max-w-40" asChild>
                <a href="mailto:mngduyphuong@gmail.com">Send your quest!</a>
              </Button>
            </form>
          </div>
          <div className="flex-1 flex item-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10 justify-center ">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-accent text-primary rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <p className="font-bold text-lg">{item.title}</p>
                      <p>{item.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
