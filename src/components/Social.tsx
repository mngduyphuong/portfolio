import { Link } from "react-router-dom";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mngduyphuong" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mngduyphuong/" },
];

const Social: React.FC<{ containerStyles: string; iconStyles: string }> = ({
  containerStyles,
  iconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} to={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
