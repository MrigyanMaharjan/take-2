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
        <div  className='selection:bg-black selection:text-white h-[10vh] bg-black text-white border-b-2 border-b-gray-200 flex items-center gap-[20vw] mx-[40px] relative'>
            <section  className='selection:bg-black selection:text-white text-xl capitalize font-mono tracking-tight'>Confess trinity</section>
            <article className='flex max-sm:hidden items-center justify-center  relative '>
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-white   hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/Confessions"} element={<Contact/>}>Confessions</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-white   hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/About"} element={<About/>}>About Us</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-white   hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/Add confession"} element={<Add/>}>Add confession</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-white   hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/Contact"} element={<Contact/>}>Contact Us</Link>
                    
                    
                        <Link className='active:translate-y-1 max-sm:hover:w-[90%] h-[10vh] px-5 flex items-center justify-center hover:bg-white   hover:shadow-xl hover:shadow-white/50 ease-linear hover:border-black p-[7px] hover:text-black  border-white  duration-150' to={"/More"} element={<More/>}>More</Link>
                    
                </article>
            
            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: active ? 0 : "100%", opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className='h-screen bg-green-300 max-sm:flex w-[60%] absolute top-0 right-0'
            >
                <section onClick={toggleSidebar} className='absolute right-2 top-3 max-sm:flex hidden'></section>
                <ul className='flex flex-col pt-9 gap-5'>
                    <li className='active:translate-y-1 max-sm:hover:w-[50vw] hover:opacity-75 border-2 hover:text-black hover:rounded-lg hover:shadow-lg hover:shadow-indigo-900/50 hover:border-black p-[10px] border-transparent duration-100'>
                        <Link to={"/Confessions"} element={<Contact/>}>Confessions</Link>
                    </li>
                    <li className='active:translate-y-1 max-sm:hover:w-[50vw] hover:opacity-75 border-2 hover:text-black hover:rounded-lg hover:shadow-lg hover:shadow-indigo-900/50 hover:border-black p-[10px] border-transparent duration-100'>
                        <Link to={"/About"} element={<About/>}>About Us</Link>
                    </li>
                    <li className='active:translate-y-1 max-sm:hover:w-[50vw] hover:opacity-75 border-2 hover:text-black hover:rounded-lg hover:shadow-lg hover:shadow-indigo-900/50 hover:border-black p-[10px] border-transparent duration-100'>
                        <Link to={"/Add confession"} element={<Add/>}>Add confession</Link>
                    </li>
                    <li className='active:translate-y-1 max-sm:hover:w-[50vw] hover:opacity-75 border-2 hover:text-black hover:rounded-lg hover:shadow-lg hover:shadow-indigo-900/50 hover:border-black p-[10px] border-transparent duration-100'>
                        <Link to={"/Contact"} element={<Contact/>}>Contact Us</Link>
                    </li>
                    <li className='active:translate-y-1 max-sm:hover:w-[50vw] hover:opacity-75 border-2 hover:text-black hover:rounded-lg hover:shadow-lg hover:shadow-indigo-900/50 hover:border-black p-[10px] border-transparent duration-100'>
                        <Link to={"/More"} element={<More/>}>More</Link>
                    </li>
                </ul>
            </motion.div>

            {/* Hamburger Icon */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: active ? 0 : "-100%" }}
                transition={{ duration: 0.3 }}
                onClick={toggleSidebar}
                className='hamburger absolute right-2 top-6 max-sm:flex hidden'
            >
                {active ? <TfiClose /> : <TfiAlignJustify />}
            </motion.div>
        </div>
    );
};

export default Navbar;
