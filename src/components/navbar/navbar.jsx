import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from 'framer-motion'
const navbar = () => {
  return (
    <div className='navbar'>
    {/* sidebar */}
    <Sidebar />
    <div className="wrapper">
        <motion.span
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1 , scale:1 }}
        transition={{duration:0.5}}
        >Eeshee</motion.span>
        <div className="social">
            <a href="https://github.com/eesheesingh"><img src="/github.png" alt="" /></a>
            <a href="https://www.instagram.com/eesheepal/"><img src="/instagram.png" alt="" /></a>
            <a href="https://www.instagram.com/eesheepal/"><img src="/linkedin.png" alt="" /></a>
        </div>
    </div>
    </div>
  )
}

export default navbar