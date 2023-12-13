import React, { useRef } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'


const items = [
    {
        id:1,
        title: 'Sportikon',
        img:"./sportikon-banner.png",
        desc:"Sportikon is Website built website on CMS. My College offered me to built this website to gain audience who are interested in sports. Includes customize PHp plugins and CSS styles on the page. Along with unique design and optimzed for every device."
    },

    {
        id:2,
        title: 'React Freshlo Landing Page',
        img:"./freshlo-banner.png",
        desc:"The website starts with a prominent hero section that introduces the product or service. It includes a headline, a subheadline, and a call-to-action button. The hero section also features an image of a person using the Freshlo product.  The landing page has a clean and modern design with a predominantly white background. The use of vibrant illustrations adds visual interest and draws attention."
    },

    {
        id:3,
        title: 'TodoApp React',
        img:"./todoapp-react.png",
        desc:"This powerful and user-friendly task management app utilizes React to provide a seamless and responsive user interface. It allows users to efficiently organize their tasks with features like multiple task lists categorized by criteria such as work, personal, or shopping. Users can add tasks with descriptions, due dates, and priority levels to enhance their task management experience"
    },

    {
        id:4,
        title: 'React Dashboard',
        img:"./dashboard React.png",
        desc:"This app offers a comprehensive toolset, including Theming, Tables and Charts, customizable components, and seamless data management. It has a responsive design, making it accessible and usable on different devices. Users can seamlessly access and interact with the dashboard on desktops, tablets, or mobile devices."
    }
];

const Single = ({item}) => {

    const ref = useRef(); 
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            // offset:["start start", "end start"]

    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300])

    return (
        <section id='portfolio'>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
        <motion.div className="textContainer" 
        style={{y}}
        >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Check Out My Demo</button>
        </motion.div>
        </div>
            </div>
    </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll(
        {
            target: ref, 
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className='portfolio'>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
        <Single item={item} key={item.id}/>
    ))}</div>
  )
}

export default Portfolio