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
      className="shrink-0"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center group"
      >
        <GlassSurface
          width={48}
          height={48}
          borderRadius={9999}
          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          brightness={50}
          opacity={0.93}
          mixBlendMode="screen"
          className="rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
        >
          <div className="flex items-center justify-center w-full h-full text-slate-200 group-hover:text-white transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </GlassSurface>
      </Link>
    </motion.li>
  );
};
