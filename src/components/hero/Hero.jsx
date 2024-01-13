import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import heroImage from "../../assets/images/arjunHero2.jpeg";
const Hero = ({heroRef}) => {
  return (
    <section ref={heroRef} className="mt-[80px] w-[100vw]">
      <div
        className=" flex sm:flex-col lg:flex-row sm:h-[95vh] 
      h-[100vh] bg-black text-white sm:p-0 md:px-20 xl:px:20 xl:py-14 lg:px-2 md:py-10 lg:py-1 gap-3"
      >
        <div
          className="flex sm:basis-3/5  lg:basis-1/2 sm:order-2 lg:order-1  
        sm:justify-center lg:justify-normal lg:items-start"
        >
          <div
            className="flex flex-col basis-3/5 h-2/3 sm:justify-center sm:items-center 
          lg:justify-normal lg:items-start gap-12 lg:mt-[35px] xl:mt-[175px] xl:ml-[100px] lg:ml-0"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
            >
              <span>
                <p className=" text-3xl md:text-5xl lg:3xl font-enriq-600 mt-[80px] font-bold">
                  Hi, Im{" "}
                </p>
              </span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <span>
                <p className="text-3xl md:text-5xl text-white font-bold">
                  Arjun Raveendran
                </p>
              </span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              <span>
                <p
                  className="animate-typing overflow-hidden whitespace-nowrap border-r-5 border-r-white 
                 sm:pl-1 sm:pr-5 md:pr-7 sm:text-xl md:text-3xl lg:text-2xl xl:text-3xl text-white font-bold"
                >
                  [MERN STACK DEVELOPER]
                </p>
              </span>
            </motion.div>
          </div>
        </div>
        <div className="flex sm:basis-2/5 lg:basis-1/2 sm:order-1 lg:order-2 justify-center">
          <motion.div
            className="flex sm:basis-3/6 lg:basis-3/5 bg-purple sm:h-5/10 md:h-[350px] items-center justify-center  
            lg:h-2/5 rounded-t-full sm:mt-8 md:mt-[15px] lg:mt-[80px] xl:ml-0 lg:min-w-[250px] lg:min-h-[300px] lg:max-w-[350px] xl:min-w-[450px] xl:min-h-[550px] "
            variants={{ 
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.3, delay: 0.7,ease:eval }}
          >
            <motion.img src={heroImage} alt="" className="absolute lg:h-[40%] lg:top-80 lg:right-96 rounded-t-full duration-100"
            variants={{ 
              hidden: { opacity: 0,scale:0.5},
              visible: { opacity: 1,scale:1},
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2, delay: 2,ease:eval }}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
