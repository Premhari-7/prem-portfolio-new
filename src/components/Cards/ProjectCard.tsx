import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/ui/GlareHover";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  index: number;
  title: string;
  desc: string;
  github: string;
  demo?: string;
  tech: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  index,
  title,
  desc,
  github,
  demo,
  tech,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      key={title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group h-full"
    >
      <div
        className="relative border transition-all duration-500 h-full flex flex-col hover:shadow-2xl group-hover:shadow-luxury-hover-glow/30 rounded-[24px] bg-black/40 backdrop-blur-md"
        style={{
          borderColor: "hsl(var(--glass-border))",
          boxShadow: "var(--glass-glow)",
        }}
      >
        {/* Glass shimmer effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-[24px]"
          style={{ background: "var(--shimmer)" }}
        />



        <div className="relative z-10 p-6 flex flex-col flex-grow">
          <h3
            className="text-xl font-bold mb-3 mt-2 font-nasalization"
            style={{ color: "hsl(var(--primary))" }}
          >
            {title}
          </h3>

          <p
            className="text-sm mb-6 flex-grow font-inter leading-relaxed"
            style={{ color: "hsl(var(--foreground) / 0.8)" }}
          >
            {desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem) => (
              <div key={techItem}>
                <Badge
                  variant="outline"
                  className="text-xs transition-all duration-300 hover:scale-105 hover:shadow-md font-mono px-3 py-1"
                  style={{
                    borderColor: "hsl(var(--primary) / 0.3)",
                    color: "hsl(var(--foreground) / 0.9)",
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    borderRadius: "0.5rem",
                  }}
                >
                  {techItem}
                </Badge>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-auto">
            <div className="flex-1">
              <GlareHover width="100%" height="auto" borderRadius="0.375rem">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full transition-all duration-300 hover:shadow-lg font-mono text-xs"
                  style={{
                    backgroundColor: "hsl(var(--glass-bg-light))",
                    borderColor: "hsl(var(--glass-border))",
                    color: "hsl(var(--foreground))",
                  }}
                  asChild
                >
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </GlareHover>
            </div>
            {demo && (
              <div className="flex-1">
                <GlareHover width="100%" height="auto" borderRadius="0.375rem">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full transition-all duration-300 hover:shadow-lg font-mono text-xs bg-black text-white hover:bg-black/80 border-black hover:text-white"
                    asChild
                  >
                    <Link href={demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </GlareHover>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
