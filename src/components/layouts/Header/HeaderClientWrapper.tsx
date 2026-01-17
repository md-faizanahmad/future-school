// src/components/sections/HeaderClientWrapper.tsx (Client Component)
"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function HeaderClientWrapper() {
  const { scrollY } = useScroll();

  // Transform: Header becomes more opaque and shrinks slightly as you scroll
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"],
  );

  const headerBlur = useTransform(scrollY, [0, 50], ["0px", "12px"]);
  const headerHeight = useTransform(scrollY, [0, 50], ["80px", "64px"]);

  return (
    <motion.div
      style={{
        backgroundColor: headerBg,
        backdropFilter: `blur(${headerBlur})`,
        height: headerHeight,
      }}
      className="absolute inset-0 border-b border-transparent transition-colors duration-300 in-[.scroll-past-50]:border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Heavy Motion: A subtle "Future Glow" line that moves with scroll */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-linear-to-r from-transparent via-accent to-transparent w-full"
        style={{ scaleX: useTransform(scrollY, [0, 1000], [0, 1]) }}
      />
    </motion.div>
  );
}
