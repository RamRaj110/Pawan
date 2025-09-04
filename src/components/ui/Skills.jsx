import React, { useRef, useEffect } from "react";
import Marquee from "../magicui/marquee";
import { motion, useAnimation, useInView } from "framer-motion";
import { SiPnpm,SiTypescript  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AnimatedBeam } from "@/components/magicui/animated-beam";


import {
  FaJs,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
} from "react-icons/fa";


function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <section className="min-h-[60vh] min-w-[80%] ">
        <div className="flex flex-col items-center justify-center pt-10 pb-8">
          <h1 className="text-2xl tracking-wider text-white font-semibold mb-4">
            Skills
          </h1>
          <p className="text-gray-200 text-base tracking-wider mb-6 max-w-xl mx-auto text-center relative">
            I have experience in various technologies and frameworks that help
            me build dynamic and responsive web applications.
          </p>
             
          <div className="w-full h-[150px] relative overflow-hidden ">
            <Marquee className="absolute w-full h-full flex items-center justify-center py-4" speed={20} behavior="scroll"  >
          <div className="flex space-x-8 overflow-x-hidden py-4 ">
            <FaJs className="border  rounded-md p-1 " size={80} color="#f7df1e" />
            <FaReact className="border  rounded-md p-1 "  size={80} color="#61dafb" />
            <FaHtml5 className="border  rounded-md p-1 " size={80} color="#e34f26" />
            <FaCss3Alt className="border  rounded-md p-1 " size={80} color="#264de4" />
            <FaNode className="border  rounded-md p-1 " size={80} color="#3c873a" />
            <FaGithub className="border  rounded-md p-1  bg-white" size={80} />
        
        
            <RiTailwindCssFill className="border  rounded-md p-1 " size={80} color="#38bdf8" />
             <SiPnpm className="border  rounded-md p-1 " size={80} color="#f69220" /> 
            <SiTypescript  size={80} color="#3178c6" className="bg-white rounded-sm" />
            </div>
            </Marquee>

          </div>
        </div>
      </section>
     

    </motion.div>
  );
}

export { Skills };
