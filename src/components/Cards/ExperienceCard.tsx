import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";


interface ExperienceCardProps {
  role: string;
  year: string;
  description: Array<string>;
  company: string;
  technologies: Array<string>;
  index?: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  year,
  description,
  company,
  technologies,
  index = 0,
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
      key={index}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative flex items-start space-x-8 group"
    >
      {/* Timeline dot */}
      <motion.div
        className="mt-6 flex-shrink-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-background shadow-lg" />
        <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Content */}
      <motion.div className="flex-1">
        <div
          className="relative border transition-all duration-500 hover:shadow-2xl group-hover:shadow-luxury-hover-glow/20 rounded-3xl bg-black/40 backdrop-blur-md"
          style={{
            borderColor: "hsl(var(--glass-border))",
            boxShadow: "var(--glass-glow)",
          }}
        >
          {/* Glass shimmer effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{ background: "var(--shimmer)" }}
          />

          <div className="relative z-10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3
                  className="text-xl font-semibold font-nasalization mb-1"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {role}
                </h3>
                <p
                  className="font-medium"
                  style={{ color: "hsl(var(--secondary))" }}
                >
                  {company}
                </p>
              </div>
              <span
                className="text-sm mt-2 sm:mt-0"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {year}
              </span>
            </div>

            <ul className="space-y-2">
              {description.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="text-xs font-inter flex items-start"
                  style={{ color: "hsl(var(--foreground) / 0.8)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "hsl(var(--accent))" }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {technologies.map((tech) => (
                <div key={tech}>
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
                    {tech}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
