import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact.jsx';
import About from '../pages/About.jsx';
import Add from '../pages/Add.jsx';
import More from '../pages/More.jsx';
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleSidebar = () => {
        setActive(prev => !prev);
    };

    return (
        <div  className='selection:bg-black selection:text-white h-[10vh] bg-gray-800 sm:bg-gray-900 text-white border-b-2 border-b-gray-200 flex items-center md:flex-nowrap  sm:gap-[40px]  mx-[0px] sm:mx-[40px] relative'>
            <section  className='selection:bg-black selection:text-white text-xl pl-2 capitalize font-mono tracking-tight lg:text-nowrap'>Confess trinity</section>
            <article className=' sm:text-sm lg:text-[15px] flex max-sm:hidden items-center w-[100%] justify-center lg:-left-[5rem] sm:tracking-tighter  relative '>
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-gray-50 sm:text-nowrap  hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/Confessions"} element={<Contact/>}>Confessions</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-gray-50 sm:text-nowrap   hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/About"} element={<About/>}>About Us</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-gray-50 sm:text-nowrap  hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/Add confession"} element={<Add/>}>Add confession</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-gray-50 sm:text-nowrap  hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/Contact"} element={<Contact/>}>Contact Us</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-gray-50 sm:text-nowrap  hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/More"} element={<More/>}>More</Link>
                    
                </article>
            
            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: active ? 0 : "100%", opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className='h-screen bg-gray-700 max-sm:flex w-[60%] absolute top-0 right-0'
            >
                <section onClick={toggleSidebar} className='absolute right-2 top-3 max-sm:flex hidden'></section>
                <ul className='flex flex-col w-[100%] pt-[3rem] gap-5'>
                    <Link to={"/Confessions"} className='active:translate-y-1 w-[100%] hover:bg-gray-500 border-2 hover:text-black hover:shadow-lg hover:shadow-indigo-900/50 hover:opacity-55 p-[10px] border-transparent duration-100'>
                        Confessions</Link>
                        <Link to={"/add"} className='active:translate-y-1 w-[100%] hover:bg-gray-500 border-2 hover:text-black hover:shadow-lg hover:shadow-indigo-900/50 hover:opacity-55 p-[10px] border-transparent duration-100'>
                        Add confession</Link>
                        <Link to={"/Contact"} className='active:translate-y-1 w-[100%] hover:bg-gray-500 border-2 hover:text-black hover:shadow-lg hover:shadow-indigo-900/50 hover:opacity-55 p-[10px] border-transparent duration-100'>
                        Contact Us</Link>
                        <Link to={"/More"} className='active:translate-y-1 w-[100%] hover:bg-gray-500 border-2 hover:text-black hover:shadow-lg hover:shadow-indigo-900/50 hover:opacity-55 p-[10px] border-transparent duration-100'>
                        More</Link>
                        <Link to={"/About"} className='active:translate-y-1 w-[100%] hover:bg-gray-500 border-2 hover:text-black hover:shadow-lg hover:shadow-indigo-900/50 hover:opacity-55 p-[10px] border-transparent duration-100'>
                        About</Link>
                </ul>
            </motion.div>

            {/* Hamburger Icon */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: active ? 0 : "-100%" }}
                transition={{ duration: 0.3 }}
                onClick={toggleSidebar}
                className='hamburger absolute right-3 top-[3.5vh]  max-sm:flex hidden'
            >
                {active ? <TfiClose /> : <TfiAlignJustify />}
            </motion.div>
        </div>
    );
};

export default Navbar;
