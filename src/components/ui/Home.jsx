import React from 'react'

import { MorphingText } from "@/components/magicui/morphing-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { motion } from "framer-motion";

function Home() {
  return (
   <motion.section
      id="#home"
      className="min-h-[95vh] min-w-[80%]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div className="flex md:block  md:pl-60 items-center justify-center md:pt-10 md:pb-8 "
       initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img className='w-14 h-16 mt-6 md:mt-0 ' src="./logo.png" alt="" />
      </motion.div>
      <div className="flex flex-col md:flex-row  justify-between   md:px-0 py-2 md:py-0">
        {/* left side  */}
        <motion.div className="w-full md:w-1/2 pr-0 text-center  mt-8 md:mt-0 mb-4 md:mb-0"
    initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}

        >

          <h1 className="text-2xl tracking-wider text-white font-semibold md:pb-4">
            Hello, I'm
          </h1>
          <h1 className=' tracking-wider text-[#c470db]  '>

            <MorphingText className='text-3xl md:text-4xl lg:text-4xl ' texts={["Fronted Developer", "Freelancer", "React Developer", "Web Developer"]} />
          </h1>

          <p className="text-gray-200 text-base tracking-wider mb-6 max-w-xl mx-auto md:mx-0">
            I am a passionate web developer with a keen interest in creating dynamic and responsive web applications.
          </p>

          <div className="flex  sm:flex-row items-center justify-center gap-4 mt-4">
           <a href="/resume.pdf" download>
    <InteractiveHoverButton className='border border-[#c470db]'>
      My Resume
    </InteractiveHoverButton>
  </a>
            <a href="#contact">
    <InteractiveHoverButton className='border border-[#c470db]'>
      Hire me
    </InteractiveHoverButton>
  </a>
          </div>
        </motion.div>

        {/* right side */}
        <motion.div className="w-full md:w-1/2 flex items-center justify-center relative "
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}

        >
          {/* Neon Glow Background */}
          <div className="absolute w-[300px] h-[300px] md:w-[280px] md:h-[280px] bg-[#6f3b7e] blur-3xl rounded-full opacity-30 z-0 animate-pulse"></div>
          {/* Image */}
          <div className="relative z-10 h-76 w-74 md:h-72 md:w-70 border-b border-[#c470db]  overflow-hidden">
            <img
              src="./pic.png"
              alt="Developer"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export { Home }