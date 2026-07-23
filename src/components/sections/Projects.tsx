"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { nasalization } from "@/app/fonts";
import { ProjectCard } from "../Cards";
import { projectsData } from "@/constant/";

export const Projects = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative w-full max-w-6xl mx-auto px-4 py-32"
    >
      {/* 🔥 FIXED TITLE (FORCE ABOVE BACKGROUND) */}
      <div className="relative z-[999] text-center mb-16">
        <h2
          className={`${nasalization.className} text-5xl md:text-6xl font-bold text-white`}
        >
          My Projects
        </h2>
      </div>

      {/* 🔥 PROJECT GRID */}
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {projectsData.map((proj, index) => (
          <ProjectCard
            key={`${proj.name}-${index}`}
            index={index}
            title={proj.name}
            desc={proj.description}
            github={proj.github_link}
            demo={proj.demo}
            tech={proj.tech}
          />
        ))}
      </motion.div>
    </section>
  );
};