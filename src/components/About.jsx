import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ( { index, title, icon }) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText} >
        Introduction </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' 
        >
        My name is Joan Didac Hernandez 👋 <br/>
        I'm a full-stack web developer, leveraging my past experience in Facilities Management and the culinary industry to bring a unique perspective to tech solutions. I graduated from Ironhack Barcelona's web development bootcamp and have a strong grasp of the MERN stack.
      </motion.p>
       <div className='mt-20 flex flex-wrap gap-10'  >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> //To change the content refer to const services in index.js
        ))}
       </div>


    </>
  )
}

export default About