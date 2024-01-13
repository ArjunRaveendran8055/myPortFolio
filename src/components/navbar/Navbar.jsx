import React, { useRef, useState } from "react";
import { navData } from "./navData";
import Navitem from "./Navitem";
import MenuIcon from "../../assets/images/menu.png";
import CloseIcon from "../../assets/images/closeIcon3.avif";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = ({ heroRef, skillRef, projectRef, contactRef }) => {
  const [toggle, isToggle] = useState(false);

  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [y, setY] = useState(0);

  //scroll to component onClick

  useMotionValueEvent(scrollY, "change", (latest) => {
    //console.log(latest)
    setY(latest);
  });
  // console.log("y is",y)

  const ScrollHandler = (elementRef) => {
    console.log("element ref is", elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <nav ref={ref} className="flex fixed top-0 z-50">
      <div
        className={`flex w-[100vw] flex-row ${
          y <= 850 ? "bg-black" : "bg-cyan500"
        } font-Playfiar-600 justify-between 
    items-center text-lg ${
      y <= 850 ? "text-white" : "text-black"
    } h-[80px] md:px-12 lg:px-20`}
      >
        <div
          className="text-3xl sm:pl-2 hover:scale-150 duration-150"
          onClick={() => ScrollHandler(heroRef)}
        >
          A<span className="text-purple">R</span>
        </div>
        <div className="nav-items-container hidden lg:flex lg:gap-12 ">
          <div className="cursor-pointer">
            <div
              className="hover:scale-150 transition duration-200"
              onClick={() => ScrollHandler(heroRef)}
            >
              Home
            </div>
          </div>

          <div className="cursor-pointer">
            <div
              className="hover:scale-150 transition duration-200"
              onClick={() => ScrollHandler(skillRef)}
            >
              Skills
            </div>
          </div>

          <div className="cursor-pointer">
            <div
              className="hover:scale-150 transition duration-200"
              onClick={() => ScrollHandler(projectRef)}
            >
              Projects
            </div>
          </div>

          <div className="cursor-pointer">
            <div
              className="hover:scale-150 transition duration-200"
              onClick={() => ScrollHandler(contactRef)}
            >
              Contact
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="hover:scale-150 transition duration-200">Login</div>
          </div>
        </div>
        <div className="lg:hidden basis-4/5 flex h-full justify-end items-center ml-2">
          <img
            className="w-[35px] h-[35px]  z-1 mr-2"
            src={MenuIcon}
            alt="menuIcon"
            onClick={() => {
              isToggle(!toggle);
            }}
          />
          {toggle ? (
            <div className="absolute w-4/5 h-[100vh] top-0 right-0 bg-fluegreen flex flex-col gap-8 text-violet text-3xl items-center font-Playfiar-600 pt-[20px]">
              <div className="absolute w-[40px]  right-3 md:right-14">
                <img
                  className="rounded-full"
                  src={CloseIcon}
                  alt="closeIcon"
                  onClick={() => {
                    isToggle(!toggle);
                  }}
                />
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col">
                  <div className="small-screen-nav-container flex flex-col gap-12 font-enriq mt-20">
                    <div className="cursor-pointer">
                      <div
                        className="hover:scale-150 transition duration-200"
                        onClick={() => {
                          ScrollHandler(heroRef);
                          isToggle(!isToggle);
                        }}
                      >
                        Home
                      </div>
                    </div>

                    <div className="cursor-pointer">
                      <div
                        className="hover:scale-150 transition duration-200"
                        onClick={() => {
                          ScrollHandler(skillRef);
                          isToggle(!isToggle);
                        }}
                      >
                        Skills
                      </div>
                    </div>

                    <div className="cursor-pointer">
                      <div
                        className="hover:scale-150 transition duration-200"
                        onClick={() => {
                          ScrollHandler(projectRef);
                          isToggle(!isToggle);
                        }}
                      >
                        Projects
                      </div>
                    </div>

                    <div className="cursor-pointer">
                      <div
                        className="hover:scale-150 transition duration-200"
                        onClick={() => {
                          ScrollHandler(contactRef);
                          isToggle(!isToggle);
                        }}
                      >
                        Contact
                      </div>
                    </div>

                    <div className="cursor-pointer">
                      <div className="hover:scale-150 transition duration-200">
                        Login
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
