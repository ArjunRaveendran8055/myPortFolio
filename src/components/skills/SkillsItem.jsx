import React, { useRef } from "react";
import { motion,useScroll, useTransform } from "framer-motion";

const SkillsItem = ({ skill, desc, index }) => {
  const ref=useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1", "1.33 1"]
  })
  const scaleProgress=useTransform(scrollYProgress,[0,1],[0.7,1])
  const opacityProgress=useTransform(scrollYProgress,[0,1],[0.6,1])
  return (
    <motion.div
      style={{scale:scaleProgress,opacity:opacityProgress}}
      className="flex  flex-col w-[500px] sm:gap-2 md:gap-8"
      ref={ref}
    >
      <div className="flex w-ful">
        <div className="basis-2/6 flex flex-col text-[30px] text-white">
          <div className="flex flex-col absolute z-1 pl-5">
            <span className="text-white text-[40px]">0{index + 1}</span>
            <span className="z-0">{skill}</span>
          </div>
        </div>
        <div className="w-[100%] mt-7 bg-gradient-to-r from-cyan500 to-gray-dark h-[100px]"></div>
      </div>
      <div className="bg-black text-white text-[20px] font-light leading-10 p-2">
        {desc}
      </div>
    </motion.div>
  );
};

export default SkillsItem;
