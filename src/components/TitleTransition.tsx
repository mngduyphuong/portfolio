import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TitleTransition: React.FC<{ text: any }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 50;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text[loop % text.length];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, loop]);

  return (
    <motion.div className="text-primary flex">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{
          delay: 1,
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          marginLeft: "5px",
          backgroundColor: "green",
        }}
        className="inline-block w-2.5 h-8 ml-2 mt-2"
      />
    </motion.div>
  );
};

export default TitleTransition;
