"use client";

import * as React from "react";

function parseValue(raw: string) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { target: 0, prefix: "", suffix: raw };
  }
  const [, numberPart, suffix] = match;
  return { target: Number(numberPart), prefix: "", suffix };
}

export function AnimatedStat({ value }: { value: string }) {
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const animatedRef = React.useRef(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node || target === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const duration = 1200;
            const start = performance.now();

            const step = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - (1 - progress) ** 3;
              setDisplay(Math.round(target * eased));
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
