import React from 'react'
import {motion} from 'framer-motion'

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen((prev) => !prev)}>
        <motion.svg viewBox="0 0 100 80" width="30" height="40"
         whileHover={{ scale: 1.2 }}
        >
  <motion.rect width="100" height="15" />
  <motion.rect y="30" width="100" height="15" />
  <motion.rect y="60" width="100" height="15" />
</motion.svg>
    </button>
  )
}

export default ToggleButton