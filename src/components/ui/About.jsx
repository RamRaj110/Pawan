import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="w-[75%] mx-auto py-16 text-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.div variants={fadeInUp} className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 text-lg">
          I'm a passionate Frontend Developer who loves crafting clean and interactive UIs using modern web technologies.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-2">Hi, I'm Pawan 👋</h3>
        <p className="text-gray-300 leading-relaxed">
          I have completed my B.Tech in Electronics and Communication Engineering from GEC, Vaishali. I specialize in building responsive and modern web applications using React, Tailwind CSS, and JavaScript. I've also worked on Python and Machine Learning projects, participated in open-source programs like C4GT, and recently started learning SAP ABAP.
        </p>

        <div className="mt-6">
          <h4 className="text-xl font-medium mb-2">Skills:</h4>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-300">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "SAP ABAP", "C++"].map((skill, idx) => (
              <motion.li
                key={idx}
                className="bg-gray-700 px-3 py-1 rounded-full"
                variants={fadeInUp}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div className="mt-12" variants={fadeInUp}>
        <h4 className="text-xl font-medium mb-4">Education & Experience</h4>
        <div className="space-y-4 border-l border-gray-700 pl-6">
          <motion.div variants={fadeInUp}>
            <h5 className="text-lg font-semibold">B.Tech in ECE – GEC Vaishali</h5>
            <span className="text-gray-400 text-sm">2021 - 2025</span>
            <p className="text-gray-300 text-sm">
              Graduated with a strong foundation in electronics, coding, and web development.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h5 className="text-lg font-semibold">Frontend Developer (Freelance)</h5>
            <span className="text-gray-400 text-sm">Present</span>
            <p className="text-gray-300 text-sm">
              Built and delivered modern web apps using React, Tailwind CSS, and integrated APIs.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export { About };
