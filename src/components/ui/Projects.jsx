import React, { useState, useRef, useEffect } from "react";
import  {projects}  from "../../lib/ProjectData";
import { BorderBeam } from "@/components/magicui/border-beam";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { motion, useInView, useAnimation } from "framer-motion";

function Projects() {
  const [project,setProject]=useState(projects)

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="h-[95%] w-[75%] pt-8 md:pt-0 lg:pt-0"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex items-center mb-6">
        <h2 className="text-4xl font-medium text-white mr-4">Projects</h2>
        <div className="flex-grow border-t border-gray-700 " />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.map((project) => (
          <motion.div
            key={project.id}
            className="relative rounded-xl p-[2px]"
            variants={cardVariants}
          >
            <BorderBeam className="absolute inset-0 rounded-xl pointer-events-none z-0" />
            <div className="relative z-10 bg-gray-800 p-4 rounded-xl shadow-md">
              <div className="absolute inset-0 -z-10 blur-[60px] rounded-full opacity-70 bg-gradient-to-tr from-teal-400 via-blue-600 to-yellow-400 w-20 h-20 mx-auto" />

              <img
                src={project.img}
                alt="project"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <InteractiveHoverButton>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </InteractiveHoverButton>
                <InteractiveHoverButton>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </InteractiveHoverButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <InteractiveHoverButton>
          <a
            href="
            https://github.com/RamRaj110?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View More on GitHub
          </a>
        </InteractiveHoverButton>
      </div>

    </motion.section>
  );
}

export default Projects;

