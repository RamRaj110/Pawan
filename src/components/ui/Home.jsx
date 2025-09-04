import React from 'react'

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { motion } from "framer-motion";
import { FlipWords } from '../magicui/flipwords';


function Home() {
  return (
    <motion.section
      id="#home"
      className=" md:min-h-[95vh] md:min-w-[80%] pt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
     
      <div className="flex flex-col md:flex-row  justify-between   md:px-0 py-2 md:py-0">

        {/* left side  */}
        <motion.div className="w-full md:w-1/2 pr-0 text-center  mt-8 md:mt-0 mb-4 md:mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}

        >
           <motion.div className="flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img className='w-[80px] mt-6 md:mt-0 ' src="./logo1.png" alt="My logo" />
      </motion.div>

          <h1 className="text-2xl tracking-wider text-white font-semibold md:pb-4">
            Hello, I'm Pawan <br /> I'm a
          </h1>
          <h1 className=' tracking-wider   text-3xl  lg:text-4xl font-bold'>
           <FlipWords
        words={["Fronted Developer", "React Developer", "Web Developer","Freelancer"]}
        duration={2500}
        className="text-blue-600"
      /></h1>

          <p className="text-gray-200 text-base tracking-wider mb-6 mt-4 max-w-xl mx-auto md:mx-0">
            I am a passionate web developer with a keen interest in creating dynamic and responsive web applications.
          </p>

          <div className="flex  sm:flex-row items-center justify-center gap-4 mt-4">
            <a href="/Pawan_FullStack.pdf" download>
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