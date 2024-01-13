import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = ({projectRef}) => {
  const ref=useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1", "0.8 1"]
  })
  const scaleProgress=useTransform(scrollYProgress,[0,1],[0.7,1])
  const opacityProgress=useTransform(scrollYProgress,[0,1],[0.6,1])
  return (
    <section ref={projectRef} className="project-section mt-2">
      <div className="bg-black w-full flex flex-col lg:px-20 lg:py-14 sm:p-2">
        <motion.div className="project-title bg-black w-full h-10 lg:p-12 flex flex-row justify-center items-center"
              initial={{ opacity: 0.5,x:-200,scale:1.5 }}
              whileInView={{ opacity: 1,x:0,scale:1 }}
              viewport={{ once: true,  }}
              transition={{ duration: 1.5 }}
        >
          <div className="text-3xl text-white font-enriq">
            <p className="underline underline-offset-[15px] bg-clip-text decoration-purple decoration-4">
              PRO <span className="text-purple">JECTS</span>
            </p>
          </div>
        </motion.div>
        <motion.div
        ref={ref}
        style={{scale:scaleProgress,opacity:opacityProgress}}
          className="project-container w-full bg-black text-white text-3xl font-enriq 
        flex flex-row gap-10 justify-around sm:p-2 lg:p-12 flex-wrap"

        >
          <div className="flex flex-col justify-center items-center">
            <img className="w-[300px] h-[300px]" src="" alt="image1" />
            <span>project 1</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[300px] h-[300px]" src="" alt="image1" />
            <span>project 2</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[300px] h-[300px]" src="" alt="image1" />
            <span>project 3</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[300px] h-[300px]" src="" alt="image1" />
            <span>project 4</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[300px] h-[300px]" src="" alt="image1" />
            <span>project 5</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[300px] h-[300px]" src="" alt="image1" />
            <span>project 6</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
