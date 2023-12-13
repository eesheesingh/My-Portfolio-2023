import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      duration: 25,
      repeatType: 'mirror',
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Eesheepal Singh</motion.h2>
          <motion.h1 variants={textVariants}>Crafting Websites & Graduation Goals</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#portfolio">
                See the Latest Works
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="../pdf/Eesheepal_Singh_Resume (6).pdf" target="_blank" rel="noopener noreferrer" download>
                👁️ At My Resume
              </a>
            </motion.button>
          </motion.div>
          <motion.img src="/scroll.png" animate="scrollButton" alt="" variants={textVariants} />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Your Ideas into Code
      </motion.div>
      <div className="imageContainer">
        <img src="/avatar.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
