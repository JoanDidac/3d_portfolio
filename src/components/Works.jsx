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
           className='shadow-inner hover:ring-1 hover:ring-purple-500 hover:ring-opacity-50 transition-all duration-300 ease-in-out black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative
before:absolute before:inset-0 before:rounded-full before:ring-1 before:ring-blue-500 before:ring-opacity-50 before:transition-all before:duration-500 hover:before:scale-110
after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-pink-500 after:ring-opacity-50 after:transition-all after:duration-700 hover:after:scale-125'
 

           >
           <img 
             src={github}
             alt='github'
             className='w-[80%] object-contain '
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
      <p className={`${styles.sectionSubText} xs: ml-[-33px]`} > 
        My Projects
         </p>
        <h2 className={`${styles.sectionHeadText} xs: ml-[-33px]`}> 
        Projects. </h2>
      </motion.div>

      <div className='w-full justify-center flex xs:mx-[-20px] p-0'>
        <motion.p
        variants={fadeIn ('','',0.1,1)}
        className='mt-10 text-center text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories . It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively alone, as well as part of a team.

        </motion.p>
      </div>
        <div className=' mt-20 flex flex-wrap gap-5 ' >
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