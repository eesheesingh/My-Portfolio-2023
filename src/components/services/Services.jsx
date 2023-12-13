import React, { useRef, useState } from 'react'
import './services.scss'
import {motion, useInView} from 'framer-motion'
import SkillSetPopup from './SkillSetPopup'; // Import the SkillSetPopup component


const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate: {
        x:0,
        opacity:1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        },
    },
};

const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"});
    const [isSkillSetPopupOpen, setIsSkillSetPopupOpen] = useState(false);

    const openSkillSetPopup = () => {
        setIsSkillSetPopupOpen(true);
      };
    
      const closeSkillSetPopup = () => {
        setIsSkillSetPopupOpen(false);
      };


  return (
    <div className='services' 
    // variants={variants} 
    // initial="initial" 
    // // // whileInView="animate"
    // animate={isInView && "animate"}
    ref={ref}
    >


        <motion.div className="textContainer" variants={variants}><p>
            I Command the narrative of my success story <br/>
            with a cool precision</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"red"}}>HTML </motion.b> CSS 
                    <motion.b whileHover={{color:"yellow"}}> JavaScript</motion.b>
                </h1>
            </div>

            <div className="title">
                <h1>
                With <motion.b whileHover={{color:"cyan"}}> ReactJS</motion.b> 
                    <motion.b whileHover={{color:"orange"}}> AWS </motion.b>
                </h1>
                <button onClick={openSkillSetPopup} className='skill-btn'>My Skill Set?</button>


                

{/* <motion.div className="mobile-skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
         
          <div className="skill-item">
            
          
        </div>
      </motion.div> */}

                {isSkillSetPopupOpen && (
        <SkillSetPopup onClose={closeSkillSetPopup} />
      )}
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor: 'lightgray', color: 'black'}}>
                <h2>TrainerGoesOnline</h2>
                <p>Engaged in detailed discussions with clients to understand their specific design needs and project requirements.
                    Conducted comprehensive assessments of clients’ existing websites, identifying areas for improvement and
                    recommending design enhancements. Utilized WordPress development tools, such as themes and plugins, to create visually appealing and functional
                    websites tailored to clients’ unique requirements.
                    </p>
                    <a href="https://trainergoesonline.com/" target="_blank" rel="noopener noreferrer"><button>Visit Company</button></a>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor: 'lightgray', color: 'black'}}>
                <h2>Key4You</h2>
                <p>Engaged in detailed discussions with clients to understand their specific design needs and project requirements. 
                    Conducted comprehensive assessments of clients’ existing websites, identifying areas for improvement and 
                    recommending design enhancements.</p>
                    <a href="https://key4you.in/" target="_blank" rel="noopener noreferrer"><button>Visit Company</button></a>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor: 'lightgray', color: 'black'}}>
                <h2>Honest Web Designs</h2>
                <p> Conducted in-depth client consultations to identify design needs and performed thorough assessments of existing
                    websites, recommending targeted design improvements.
                    Leveraged WordPress tools and programming languages like HTML, CSS, and JavaScript to create and customize
                    visually appealing, functional websites that meet unique client requirements.</p>
                    <a href="https://www.honestwebs.com/" target="_blank" rel="noopener noreferrer"><button>Visit Company</button></a>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor: 'lightgray', color: 'black', transition: 'all 5s ease-'}}>
                <h2>Primite Marketing</h2>
                <p>Assisted in the creation and maintenance of websites using WordPress, focusing on theme customization, plugin 
                    integration, and content management to enhance user experience and functionality. Engaged in coding and developing web applications, employing languages like HTML, CSS, and JavaScript, and
                    contributing to various stages of the development lifecycle, from design to deployment.
</p>
                    <a href="https://primite.in/" target="_blank" rel="noopener noreferrer"><button>Visit Company</button></a>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Services