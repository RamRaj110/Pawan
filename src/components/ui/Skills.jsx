import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const skills = [
    "JavaScript", "React", "Node.js", "CSS",
    "HTML", "Git", "REST APIs", "Responsive Design",
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <section className="min-h-[60vh] min-w-[80%]">
        <div className="flex flex-col items-center justify-center pt-10 pb-8">
          <h1 className="text-2xl tracking-wider text-white font-semibold mb-4">
            Skills
          </h1>
          <p className="text-gray-200 text-base tracking-wider mb-6 max-w-xl mx-auto text-center">
            I have experience in various technologies and frameworks that help
            me build dynamic and responsive web applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="text-white"
                variants={itemVariants}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export { Skills };
