'use client';

import { useState, useEffect } from 'react';

let isGlobalScrolling = false;
const listeners = new Set<(scrolling: boolean) => void>();
let scrollTimeout: NodeJS.Timeout | null = null;
let isListenerAttached = false;

function handleScroll() {
  if (!isGlobalScrolling) {
    isGlobalScrolling = true;
    listeners.forEach((listener) => listener(true));
  }

  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = setTimeout(() => {
    isGlobalScrolling = false;
    listeners.forEach((listener) => listener(false));
    scrollTimeout = null;
  }, 150);
}

function attachGlobalScrollListener() {
  if (typeof window === 'undefined' || isListenerAttached) return;
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('wheel', handleScroll, { passive: true });
  window.addEventListener('touchmove', handleScroll, { passive: true });
  isListenerAttached = true;
}

export function useScrollState(): boolean {
  const [scrolling, setScrolling] = useState<boolean>(isGlobalScrolling);

  useEffect(() => {
    attachGlobalScrollListener();
    listeners.add(setScrolling);

    return () => {
      listeners.delete(setScrolling);
    };
  }, []);

  return scrolling;
}

export function getIsGlobalScrolling(): boolean {
  return isGlobalScrolling;
}
