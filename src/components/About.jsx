import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ( { index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full ' >
    <motion.div 
     variants={ fadeIn('right', "spring", 0.5 * index, 0.75)}
     className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
     >
     <div
     option= {{
      max: 45,
      scale: 1,
      speed: 450
     }}
     className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
     >
     <img src={icon} alt={title}
     className='w-16 h-16 object-contain'/>
     <h3 className='text-white text-[20px] font-bold text-center' 
     > 
     {title}

     </h3>


     </div>
    </motion.div>
  </Tilt>
  )
} 

const About = () => {
  return (
    < >
      <motion.div variants={textVariant} className='xl:translate-x-[4em] text-center'>
        <p className={`${styles.sectionSubText}`}>Introduction </p>
        <h2 className={`${styles.sectionHeadText}xl:translate-x-[4em]`}>Overview.
        </h2>
      </motion.div>
      <div className='flex justify-center items-center xl:translate-x-[4em] '>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=' w-full h-full text-center  mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center' 
        >
        My name is Joan Dídac Hernandez 👋 <br/>
        I'm a full-stack web developer, leveraging my past experience in Facilities Management and the culinary industry to bring a unique perspective to tech solutions. 
      </motion.p>
      </div>
       <div className='w-[100%] mt-16 flex flex-wrap items-center justify-center size-full  gap-10 xl:ml-[66.6px]  '  >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> //To change the content refer to const services in index.js
        ))}
       </div>


    </>
  )
}

export default  SectionWrapper ( About, "about" )