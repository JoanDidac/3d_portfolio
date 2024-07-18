import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name , description, tags, image, source_code_link}) => {
  return (
     <motion.div 
     variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
     <Tilt 
     options={{
      max: 45,
      scale: 1,
      speed: 450
     }} 
     className="bg-tertiary p-5 rounded-2xl md:max-w-[360px] sm:w-[450px] w-full" >
      <div className='relative w-full h-[230px]' >
        <img 
        src={image}
        alt={name}  
        className='w-full h-full object-contain rounded-2xl'  
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover' >
          <div 
           onClick={() => window.open (source_code_link, "_blank")}
           className='drop-shadow-[0px_0px_0.3px_rgba(212,212,212,10.25)] hover:drop-shadow-[1.5px_2px_0.1px_rgba(140,20,252,1)]  black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ' 
           >
           <img 
             src={github}
             alt='github'
             className='w-[0%] object-contain'
             />

          </div>
        </div>
      </div>

      <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{description}</p>

      <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <p key={tag.name} 
        className={`text-[14px] ${tag.color}`}>
        #{tag.name}
        </p>

      ))}

      </div>

      </div>
     </Tilt>
     </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div className='text-center' variants={textVariant()}>
      <p className={`${styles.sectionSubText} ml-4 xs:mx-[-20px]`} > 
        My Projects
         </p>
        <h2 className={`${styles.sectionHeadText} ml-4 xs:mx-[-20px]`}> 
        Projects. </h2>
      </motion.div>

      <div className='w-full justify-center flex xs:mx-[-20px] p-0'>
        <motion.p
        variants={fadeIn ('','',0.1,1)}
        className='mt-3 text-center text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories . It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively alone, as well as part of a team.

        </motion.p>
      </div>
        <div className=' justify-center ml-[0px] mt-20 flex flex-wrap gap-7 ' >
        {projects.map((project,index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}  
          />
        ))}

        </div>
    </>
  )
}

export default SectionWrapper(Works,"");