import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
<link rel="stylesheet" href="index.css" />
const Homepage = () => {
  return (
    <div className='bg-black  h-screen w-screen overflow-hidden'>
      <Navbar/>
      <section className=' selection:bg-white max-sm:pt-7 selection:text-black text-white h-full'>
        <article className='h-[10vh] w-screen flex items-center justify-center font-mono text-2xl text-center'>You are very welcome to our website confess trinity</article>
     <article className='flex flex-col rainbow items-center justify-center text-emerald-400 font-mono'>lets get started
     <span > What would you like to do?
     </span></article>  
     <section className='flex items-center gap-4 justify-center flex-col pt-10'>
      <Link to={"feed"}  className='p-2 rounded-xl border-[1px] w-[150px] flex items-center justify-center capitalize h-[6vh] hover:bg-white hover:text-black duration-100 ease-linear shadow-md glow  border-white'>Watch the feed </Link>
      <Link to={"chat"} className='p-2 rounded-xl border-[1px] w-[150px] flex items-center justify-center capitalize h-[6vh] hover:bg-white hover:text-black duration-100 ease-linear shadow-md glow  border-white'>Chat</Link>
      </section>   
        </section>
    </div>
  )
}

export default Homepage