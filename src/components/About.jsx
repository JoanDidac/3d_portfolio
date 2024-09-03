import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome/i.test(navigator.userAgent);

const ServiceCard = ({ index, title, icon }) => {
  const tiltOptions = isMobile
    ? {
        max: 25,
        scale: 1.05,
        speed: 300,
        transition: true,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
      }
    : {
        max: 45,
        scale: 1,
        speed: 450,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
      };



  
  return (
    <Tilt className='xs:w-[143px] xl:w-[200px]   w-full ' options={tiltOptions} >
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
      <motion.div variants={textVariant} className='xl:translate-x-[5vw] text-center'>
        <p className={`${styles.sectionSubText}`}>Introduction </p>
        <h2 className={`${styles.sectionHeadText}xl:translate-x-[4em] text-[2em]`}>Overview.
        </h2>
      </motion.div>
      <div className='flex justify-center items-center xl:translate-x-[5vw] '>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=' w-full h-full text-center sm:grid-cols-2 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center' 
        >
         My name is Joan Dídac Hernandez 👋 <br/>
         Born and raised in Barcelona, I'm a Full-Stack developer with a rich background in Facilities Management and the culinary industry. Father of a 5-year-old tornado and an enthusiast of music and technology, I bring a unique , diverse and fresh perspective to tech solutions. Known for embracing challenges and driven by a passion for innovation. Let's connect and create.
      </motion.p>
      </div>
       <div className='w-[100%] mt-16 flex flex-wrap items-center justify-center size-full  gap-10  xl:ml-[5vw]'  >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> //To change the content refer to const services in index.js
        ))}
       </div>


    </>
  );
};

export default  SectionWrapper ( About, "about" );