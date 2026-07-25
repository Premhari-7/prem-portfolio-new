"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import GlassSurface from "../ui/GlassSurface";
import { quentine } from "@/app/fonts";
import { Button } from "../ui/button";
import { createBlurDataURL } from "@/lib/BlurDataURL";
import { selfData } from "@/constant";

export const Navbar = () => {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        // Scrolling down & past 80px — hide
        setHidden(true);
        setIsOpen(false);
      } else {
        // Scrolling up — show
        setHidden(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[999] overflow-visible px-6 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={16}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        mixBlendMode="screen"
        className={`flex flex-col w-full mt-3 transition-all duration-300
                      ${isOpen ? "rounded-2xl" : "rounded-2xl"}
                      md:flex-row md:items-center md:justify-between md:static md:w-full md:max-w-7xl md:mx-auto md:mt-6 md:rounded-xl`}
      >
        
        <div className="flex flex-col w-full">
          {/* Top row: Logo + Hamburger (mobile) / Logo + Resume (desktop) */}
          <div className="flex items-center justify-between w-full px-4 py-3 md:px-8 md:py-4">
            
            {/* Logo + Name */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 group min-w-0 overflow-hidden"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 overflow-hidden shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={48}
                  height={48}
                  placeholder="blur"
                  loading="lazy"
                  quality={100}
                  blurDataURL={`${createBlurDataURL({
                    width: 48,
                    height: 48,
                  })}`}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <span
                className={`${quentine.className} text-foreground text-lg md:text-3xl font-bold truncate drop-shadow-sm`}
              >
                {selfData.name}
              </span>
            </Link>

            {/* Hamburger Icon - Mobile only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 shrink-0 ml-auto"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[2px] bg-white/80 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-white/80 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-white/80 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>

            {/* Resume Button - Desktop only */}
            <div className="hidden md:flex md:ml-6 shrink-0">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="group relative rounded-lg border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300 overflow-hidden text-sm px-6 py-2 h-auto"
              >
                {isResumePage ? (
                  <a
                    href="/docs/Prem Hari Full stack developer Resume.pdf"
                    download="Prem_Hari_Full_Stack_Developer_Resume.pdf"
                  >
                    <div className="absolute top-0 -left-[150%] h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-[30deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none" />
                    <span className="relative z-10 pointer-events-none">Download</span>
                  </a>
                ) : (
                  <Link href="/resume">
                    <div className="absolute top-0 -left-[150%] h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-[30deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none" />
                    <span className="relative z-10 pointer-events-none">Resume</span>
                  </Link>
                )}
              </Button>
            </div>
          </div>

          {/* Expandable Menu - Mobile only */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-4 pb-3 pt-1 border-t border-white/10">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full group relative rounded-xl border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-[1.02] active:scale-95 transition-all duration-200 overflow-hidden text-sm py-2 h-auto"
                onClick={() => setIsOpen(false)}
              >
                {isResumePage ? (
                  <a
                    href="/docs/Prem Hari Full stack developer Resume.pdf"
                    download="Prem_Hari_Full_Stack_Developer_Resume.pdf"
                  >
                    <div className="absolute top-0 -left-[150%] h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-[30deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none" />
                    <span className="relative z-10 pointer-events-none">Download Resume</span>
                  </a>
                ) : (
                  <Link href="/resume">
                    <div className="absolute top-0 -left-[150%] h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-[30deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none" />
                    <span className="relative z-10 pointer-events-none">View Resume</span>
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>

      </GlassSurface>
    </nav>
  );
};