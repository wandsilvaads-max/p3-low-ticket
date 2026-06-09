"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Shape({
  className,
  delay = 0,
  width = 300,
  height = 80,
  rotate = 0,
  gradient = "from-orange-500/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60, rotate: rotate - 10 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute pointer-events-none", className)}
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.07]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.08),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function ElegantShapeBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Shape delay={0.2} width={500} height={110} rotate={10}
        gradient="from-orange-500/[0.07]"
        className="left-[-10%] top-[10%]" />
      <Shape delay={0.4} width={350} height={85} rotate={-12}
        gradient="from-orange-600/[0.06]"
        className="right-[-6%] bottom-[15%]" />
      <Shape delay={0.6} width={200} height={55} rotate={18}
        gradient="from-orange-400/[0.06]"
        className="right-[10%] top-[5%]" />
    </div>
  );
}
