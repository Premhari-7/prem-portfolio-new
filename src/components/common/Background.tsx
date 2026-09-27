"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

const AeroShards = dynamic(() => import("@/components/AeroShards"), {
  ssr: false,
});

export const Background = () => {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback((error: Error) => {
    console.warn("AeroShards failed to initialize, using CSS fallback:", error.message);
    setHasError(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="aero-shards-background pointer-events-none overflow-hidden"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        margin: 0,
        padding: 0,
        pointerEvents: "none",
        backgroundColor: "#120F17",
      }}
    >
      {hasError && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 72% 60% at 50% 46%, rgba(4, 183, 234, 0.16) 0%, transparent 62%), radial-gradient(ellipse 60% 50% at 70% 65%, rgba(134, 132, 136, 0.09) 0%, transparent 66%), #120F17",
          }}
        />
      )}

      {!hasError && (
        <div className="absolute inset-0 h-full w-full">
          <AeroShards
            backgroundColor="#0f0b0f"
            shardColor="#dfdfdf"
            accentColor="#2beddb"
            placement="full"
            flow="stream"
            material="pearl"
            detail="fine"
            effect="none"
            scale={1.3}
            spread={1.1}
            depth={0.2}
            speed={0.6}
            spin={5}
            interaction="repel"
            density={0.5}
            shardSize={1.1}
            stretch={1}
            turbulence={1}
            glow={8.5}
            edgeSoftness={2}
            bloom={1}
            grain={0.00}
            chromaticAberration={0.0075}
            transitionDuration={1}
            interactionRadius={1.5}
            interactionStrength={0.5}
            rippleIntensity={1.5}
            holdToGather={true}
            paused={false}
            onError={handleError}
          />
        </div>
      )}
    </div>
  );
};
