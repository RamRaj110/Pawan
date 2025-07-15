
import React, { useRef, useEffect } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { User } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

import {
  FaJs,
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

function Icon() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const leftRefs = [useRef(null), useRef(null), useRef(null)];
  const rightRefs = [useRef(null), useRef(null), useRef(null)];

  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={containerRef}
      className="relative flex items-center justify-center h-70 w-[75%]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {/* Left icons */}
      <div className="absolute left-0 top-1/2 flex flex-col gap-8 -translate-y-1/2 z-10">
        <div ref={leftRefs[0]}><FaJs size={32} color="#f7df1e" /></div>
        <div className="relative bg-white rounded-full p-[1px] shadow-lg flex items-center justify-center" ref={leftRefs[1]}>
          <FaGithub size={32} />
        </div>
        <div className="absolute inset-0 -z-10 blur-[60px] rounded-full opacity-50 bg-gradient-to-tr from-blue-500 via-cyan-400 to-yellow-400 w-20 h-20 mx-auto" />
        <div ref={leftRefs[2]}><FaHtml5 size={32} color="#e34c26" /></div>
      </div>

      {/* Center person icon with neon glow */}
      <div className="relative z-10" ref={centerRef}>
        <div className="absolute inset-0 -z-10 blur-[60px] rounded-full opacity-70 bg-gradient-to-tr from-teal-400 via-pink-600 to-yellow-400 w-20 h-20 mx-auto" />
        <div className="bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
          <User size={22} />
        </div>
      </div>

      {/* Right icons */}
      <div className="absolute right-0 top-1/2 flex flex-col gap-8 -translate-y-1/2 z-10">
        <div ref={rightRefs[0]}><FaNodeJs size={32} color="#43853d" /></div>
        <div ref={rightRefs[1]}><FaCss3Alt size={32} color="#1572b6" /></div>
        <div ref={rightRefs[2]}><FaHtml5 size={32} color="#e34c26" /></div>
      </div>

      {/* Animated Beams */}
      {leftRefs.map((ref, i) => (
        <AnimatedBeam
          key={`left-beam-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={0.2}
          duration={5}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
        />
      ))}
      {rightRefs.map((ref, i) => (
        <AnimatedBeam
          key={`right-beam-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={-0.2}
          duration={5}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
        />
      ))}
    </motion.div>
  );
}

export { Icon };
