'use client';

import React from 'react';

/**
 * Global SVG Glass Filters component.
 * Mounted once at root to share standard SVG filter definitions globally
 * across all GlassSurface instances without duplicating DOM filter trees.
 */
export const GlobalGlassFilters: React.FC = () => {
  return (
    <svg
      id="global-glass-filters-svg"
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-0 h-0 overflow-hidden opacity-0 -z-50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Fast Fallback / Scroll Degradation Filter */}
        <filter
          id="glass-filter-fast"
          colorInterpolationFilters="sRGB"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
        >
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
    </svg>
  );
};

export default React.memo(GlobalGlassFilters);
