import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "motion/react";

import { SiLeetcode } from "react-icons/si";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { selfData } from "@/constant";
import GlassSurface from "@/components/ui/GlassSurface";

export const ContactSocials = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      link: `https://github.com/${selfData.socials_username.github}`,
      initial: -10,
    },
    {
      Icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      initial: 10,
    },
    {
      Icon: PiTelegramLogo,
      link: `https://t.me/${selfData.socials_username.telegram}`,
      initial: -10,
    },
   
    {
      Icon: SiLeetcode,
      link: `https://leetcode.com/${selfData.socials_username.leetcode}`,
      initial: -10,
    },
  ];

  return (
    <ul className="flex mt-12 space-x-4">
      {socialLinks.map((social, index) => (
        <ContactSocialItem
          key={index}
          Icon={social.Icon}
          link={social.link}
          initial={social.initial}
        />
      ))}
    </ul>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
  initial,
}: {
  Icon: IconType;
  link: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: initial }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileHover={{
        y: -4,
      }}
      className="shrink-0"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <GlassSurface
          width={40}
          height={40}
          borderRadius={20}
          className="flex items-center justify-center bg-purple-700/80 hover:bg-slate-400 text-slate-300 hover:text-purple-700 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </GlassSurface>
      </Link>
    </motion.li>
  );
};
