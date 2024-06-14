import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Photo() {
  const plugin = useRef(Autoplay({ delay: 5000 }));
  const basePath = import.meta.env.BASE_URL;
  const imageURL = ["/8bitpix.png", "/personalPhoto2.png"];
  const pixelationKeyframes = {
    initial: {
      filter: "grayscale(100%) blur(5px) contrast(2) saturate(0.5) opacity(0)",
    },
    animate: { filter: "grayscale(0%) blur(0px) contrast(1) saturate(1)" },
  };
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={pixelationKeyframes}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-[298px] h-[298px] lg:w-[450px] lg:h-[450px] mix-blend-lighten bg-accent rounded-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={pixelationKeyframes}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          >
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {Array.from({ length: 2 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={`${basePath}${imageURL[index]}`}
                      alt="Phuong Nguyen"
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Photo;
