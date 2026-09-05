"use client";

import RippleDistortion from "@/components/ui/RippleDistortion";

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full">
        <RippleDistortion
          src="/images/bg-ripple_3.jpg"
          brushSize={140}
          strength={0.25}
          swirl={1}
          rings={4}
          spread={5}
          fade={3}
          spacing={15}
          grayscale={false}
          tint="#712097"
          tintAmount={0.15}
          highlightColor="#ffffff"
          trigger="both"
          quality="medium"
        />
      </div>
    </div>
  );
};
