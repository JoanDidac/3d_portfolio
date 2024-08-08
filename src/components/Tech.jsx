import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <> 
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-20 text-center xs:ml-[-.5em] `}>Tools/Stack.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 xs:ml-[-2em]">
        {technologies.map((technology) => (
          <div key={technology.name} className="relative">
            <div
              className="w-28 h-28"
              data-tip={technology.name}
              data-for={`tooltip-${technology.name}`}
            > 
              <BallCanvas icon={technology.icon} />
              
            
            <ReactTooltip
              id={`tooltip-${technology.name}`}
              place="left"
              effect="solid"
              backgroundColor="#f272c8" 
            />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
