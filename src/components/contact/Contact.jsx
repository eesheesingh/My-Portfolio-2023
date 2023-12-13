import { useRef, useState } from 'react'
import './contact.scss'
import {motion, useInView} from 'framer-motion' 
import emailjs from '@emailjs/browser';



const variants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const isInView = useInView(ref,{margin:"-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_985zkds', 'template_7qjr6gf', formRef.current, 'taRjwOIaPXFtZTvfA')
          .then((result) => {
              setSuccess(true)
          }, (error) => {
            setError(true)
          });
      };
    

  return (
    <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={{variants}}>
            <motion.h1 variants={variants}>Drop Me A Hi</motion.h1>

            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>singheeshee@gmail.com</span>
            </motion.div>

            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>In My Paradise</span>
            </motion.div>

            <motion.div className="item" variants={variants}>
                <h2>Call Me</h2>
                <span>+91 8169499331</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg" initial={{opacity:1}} 
            whileInView={{opacity:0}} transition={{delay:2, duration:1}}>
        <svg width="450px" height="450px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration: 4}} d="M4 21C4 17.134 7.13401 14 11 14C11.3395 14 11.6734 14.0242 12 14.0709M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z" stroke="orange"/>
</svg>

    </motion.div>
            <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} 
whileInView={{opacity:1}} transition={{delay:3, duration:1}}>
                <input type="text" required placeholder='Name' name='name'/>
                <input type="email" required placeholder='Email' name='email' />
                <textarea name="message" id="" placeholder="Message" rows={8}  />
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}

            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact