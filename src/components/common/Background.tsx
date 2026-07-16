"use client";

import { useEffect, useRef } from "react";
import LightPillar from "./LightPillar";
import SplashCursor from "./SplashCursor";

export const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      // Future: Add mouse interaction animations
    };
    const handleMouseLeave = () => {
      // Future: Add mouse interaction animations
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="top-0 fixed -z-10 h-[100dvh] w-full overflow-hidden bg-[#090514] pointer-events-none"
    >
      <div className="absolute inset-0 w-full h-full">
        <LightPillar
          topColor="#2f2a40"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={8}
          pillarHeight={0.4}
          noiseIntensity={0}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
        <SplashCursor
          SIM_RESOLUTION={64}
          DYE_RESOLUTION={512}
          PRESSURE_ITERATIONS={10}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING={false}
          RAINBOW_MODE={false}
          COLOR="#FF9FFC"
        />
      </div>
    </div>
  );
};
