import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

<link rel="stylesheet" href="index.css" />
const Homepage = () => {
  return (
    <div className=' bg-gradient-to-b from-gray-900 from-70% to-gray-800 max-sm:text-md   h-screen w-screen overflow-hidden'>
      <Navbar  />
   
      <motion.section  className=' selection:bg-white relative z-10 flex flex-col gap-5 max-sm:pt-10 selection:text-black text-white h-full'>
        <motion.article  initial={{y:"-50%",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.2,delay:0.1}}  className='h-[10vh] w-screen flex items-center justify-center font-mono text-2xl text-center'>You are very welcome to our website confess trinity</motion.article>
     <motion.article initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,type:'tween' ,delay:0.3}} className='flex flex-col rainbow items-center justify-center text-emerald-400 font-mono'>lets get started
     <span > What would you like to do?
     </span></motion.article>  
     <motion.section initial={{y:'100%',opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.2 ,type:"spring"}} className='flex items-center gap-4 justify-center flex-col pt-10'>
      <Link  to={"feed"}  className='p-2 rounded-xl border-[1px] w-[150px] flex items-center justify-center capitalize h-[6vh] hover:bg-white hover:text-black duration-100 ease-linear shadow-md glow  border-white'>Watch the feed </Link>
      <Link to={"chat"} className='p-2 rounded-xl border-[1px] w-[150px] flex items-center justify-center capitalize h-[6vh] hover:bg-white hover:text-black duration-100 ease-linear shadow-md glow  border-white'>Chat</Link>
      </motion.section>   
        </motion.section>
    </div>
  )
}

export default Homepage