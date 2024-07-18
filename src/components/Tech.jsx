import React from "react";

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"; //to be changed in the index,js file main source of data
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <> 
      <motion.div variants={textVariant()} className="text-center xl:text-center md:pl-[-20%] xs:mr-[20px] ">
      {/* <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-lg sm:text-xl font-semibold shadow-lg">Technology Spheres</p> */}
        <h2 className={`${styles.sectionHeadText} mb-20 text-center `}>Tools / Stack</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");