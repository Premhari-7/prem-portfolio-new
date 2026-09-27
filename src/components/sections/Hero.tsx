"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";
import GlareHover from "@/components/ui/GlareHover";
import ElectricBorder from "@/components/ElectricBorder";

import { quentine, mono } from "@/app/fonts";

export const Hero = () => {
  const ref = useRef(null);


  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start px-6 relative bg-transparent"
    >

      <div className="max-w-full sm:max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="space-y-6">
            <motion.h1
              className={`${quentine.className} text-5xl md:text-7xl lg:text-8xl font-bold`}
              style={{ color: "hsl(var(--primary))" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {selfData.name}
            </motion.h1>

            <ElectricBorder
              color="#92f8fd"
              speed={2.4}
              chaos={0.01}
              className="portfolio-electric-border w-full max-w-3xl"
              style={{ borderRadius: 16 }}
            >
              <div className="space-y-3 rounded-2xl bg-[rgba(15,11,15,0.35)] p-5 backdrop-blur-md sm:p-8">
                <motion.p
                  className={`${mono.className} text-2xl md:text-3xl font-extrabold tracking-wide`}
                  style={{ color: "hsl(var(--foreground))" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  {selfData.roles[0]}
                </motion.p>

                <motion.p
                  className="text-base md:text-lg font-normal italic font-serif leading-relaxed"
                  style={{ color: "hsl(var(--foreground))" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  {selfData.bio}
                </motion.p>
              </div>
            </ElectricBorder>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <GlareHover width="auto" height="auto" borderRadius="0.5rem">
                <Button
                  asChild
                  size="lg"
                  className="relative group overflow-hidden btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/resume">
                    <span className="relative z-10 font-medium">View Resume</span>
                  </Link>
                </Button>
              </GlareHover>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
