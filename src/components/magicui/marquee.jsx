'use client';

import React, { useRef, useEffect, useCallback } from "react";
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
const useAnimationFrame = callback => {
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const animate = useCallback(time => {
    if (previousTimeRef.current !== null && previousTimeRef.current !== undefined) {
      const delta = time - previousTimeRef.current;
      callback(time, delta);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);
};
function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  speed = 50,
  vertical = false,
  repeat = 4,
  ...props
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const singleContentBlockRef = useRef(null);
  const animX = useRef(0);
  const isPaused = useRef(false);
  useAnimationFrame((t, delta) => {
    if (!containerRef.current || !contentRef.current || !singleContentBlockRef.current) return;
    if (pauseOnHover && isPaused.current) {
      return;
    }
    const singleContentBlockSize = vertical ? singleContentBlockRef.current.offsetHeight : singleContentBlockRef.current.offsetWidth;
    const contentStyle = window.getComputedStyle(contentRef.current);
    const computedGap = parseFloat(vertical ? contentStyle.rowGap || '0' : contentStyle.columnGap || '0');
    const loopDistance = singleContentBlockSize + computedGap;
    const dx = speed * delta / 1000;
    const effectiveDx = reverse ? dx : -dx;
    animX.current += effectiveDx;
    if (Math.abs(animX.current) >= loopDistance) {
      animX.current = animX.current % loopDistance;
    }
    if (vertical) {
      contentRef.current.style.transform = `translateY(${animX.current}px)`;
    } else {
      contentRef.current.style.transform = `translateX(${animX.current}px)`;
    }
  });
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      isPaused.current = true;
    }
  }, [pauseOnHover]);
  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      isPaused.current = false;
    }
  }, [pauseOnHover]);
  return <div {...props} ref={containerRef} className={cn("group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)]" + (vertical ? " flex-col" : " flex-row"), className)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div ref={contentRef} className={cn("flex shrink-0 justify-around [gap:var(--gap)]" + (vertical ? " flex-col" : " flex-row"))}>
        {Array(repeat).fill(0).map((_, i) => <div key={i} ref={i === 0 ? singleContentBlockRef : null} className="flex gap-8">
              {children}
            </div>)}
      </div>
    </div>;
}
export default Marquee;