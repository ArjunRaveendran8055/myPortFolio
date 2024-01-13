import React from "react";
import SkillImage from "../../assets/images/skillsImage.jpeg"
import { skillsData } from "./skillsData";
import SkillsItem from "./SkillsItem";
import {motion} from "framer-motion"
import ProgressBar from "./ProgressBar/ProgressBar";
const Skills = ({skillRef}) => {
  return (
    <section ref={skillRef} className="">
      <motion.div className="flex flex-col  bg-black lg:px-20 lg:py-14 sm:p-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true,  }}
      transition={{ duration: 1 }}
      >
        <div className="flex sm:flex-col lg:flex-row bg-blue sm:basis-1/2 lg:basis-2/6">
          <div className="flex flex-col basis-1/2 bg-black lg:p-12 items-center lg:justify-start ">
            <span className="pb-[7px]">
              <p className="text-white text-[30px] text-transparent underline underline-offset-[15px] lg:pb-5">
                My Skills
              </p>
            </span>
            <span>
              <p className="text-white sm:p-2 lg:px-5 text-[20px] lg:text-[25px] text-transparent font-Playfiar text-center ">
                As a dedicated and detail-oriented biomedical research
                associate, I possess a comprehensive skill set essential for
                advancing scientific knowledge in this dynamic field. My
                proficiency in laboratory techniques, including molecular
                biology, cell culture, and experimental design, has enabled me
                to contribute effectively to numerous research projects.
              </p>
            </span>
          </div>
          <div className="flex basis-1/2 bg-black lg:p-20">
            <div className="flex flex-col gap-3 basis-full border-2 border-pink italic text-[25px] font-Playfiar text-white font-bold">
              <img src={SkillImage} alt="" className="h-full sm:p-4"/>
            </div>
          </div>
        </div>
        <div className="flex bg-black sm:gap-3 md:gap-5 lg:gap-10 lg:px-10 flex-wrap sm:justify-center lg:justify-between ">
        {
          skillsData.map((item,index)=>
          (
            <SkillsItem key={index} skill={item.skill} index={index} desc={item.desc}/>
          )
          )
        }
        </div>
        <div className="text-green
         font-Playfiar text-3xl flex flex-col justify-center items-center">
        <span>Technologies Familiar With</span>
        <ProgressBar/>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
