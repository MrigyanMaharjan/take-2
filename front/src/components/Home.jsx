import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Home = () => {
 
  const [active,setActive]=useState(false)
  
  useEffect(() => {
    let main = document.querySelector(".main")
    let hover=document.querySelector(".hover")
 
    console.log(hover);

    hover.addEventListener("mouseenter",()=>{
      main.classList.add("bg-black")
      main.classList.remove("bg-white")
      main.classList.add("text-white")
      main.classList.remove("text-black")
      console.log(active)
      hover.addEventListener("mouseleave",()=>{
        main.classList.remove("bg-black")
        main.classList.add("bg-white")
        main.classList.add("text-black")
        main.classList.remove("text-white")
        
        console.log(active)
        })
      })
      
    
  

  }, [])
  console.log(active)

  

  return (
    <motion.div  className=' main h-screen group w-screen bg-white duration-150 text-black flex items-center justify-start pt-[20vh] flex-col'>
    <div className=' h-[20vh] group w-screen bg-transparent text-white flex items-center justify-end flex-col'></div>
    <div className=' font-semibold text-center  focus-within:bg-red-400  text-5xl pb-4'>Welcome to confesstrinity</div>
    <section >Trinity's First confession webpage</section>
  
    <Link to={"/auth"} className=' hover hover:shadow-indigo-500/50 shadow-xl ring-2 border-separate ring-offset-0 mt-7 rounded-lg p-3 duration-150 relative after:left-0 after:top-[100%] after:hover:top-0 after:hover:left-0 after:duration-[0.1s] after:rounded-lg after:h-0 after:hover:h-[100%] after:w-[100%] after:bg-indgo-500/50  after:text-black after:absolute after:hover:block '>Click here to enter</Link>
    </motion.div>

  )
}

export default Home