import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (
  
  <VerticalTimelineElement 
  contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{ backgorund: experience.iconBg}}
  icon={
  <div className="flex justify-center items-center w-full h-full" >
    <img 
      src={experience.icon}
      alt={experience.company_name}
      className="bg-slate-50 rounded-full  w-full h-full object-contain "
      /> 
  </div>
  }
  >
  <div>
    <h3 className=" text-white text-[24px] font-bold">{experience.title}</h3>
    <p className="text-secondary text-[60px] font-semibold" style={{margin:0}} >
    {experience.company_name}</p>
  </div>
  <ul className="mt-5 list-disc space-y-2"> {experience.points.map((point, index ) => (
    <li 
     key={`experiance-point-${index}`}
     className= "text-white-100 text-[14px] pl-2 ml-2 mb-4 tracking-wider"  
    >
    {point}

    </li>
  ))}

  </ul>
</VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center w-full ">
      <p className={`${styles.sectionSubText} text-center xl:translate-x-[2.4em] `}> What have I done you ask ?</p>
        <h2 className={`${styles.sectionHeadText} xl:translate-y-[0px] text-center xl:translate-x-[0.9em] xs:text-4xl xs:mt-8 xs:-mb-12 xl:mb-12`} > Work Experience. </h2>
      </motion.div>
        <div className=" mt-20 flex flex-col xs:translate-x-[-0.5em] md:translate-x-[3.5em]" >
          <VerticalTimeline>
            {experiences.map((experience,index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>

    </>
  )
}

export default SectionWrapper( Experience, "work")