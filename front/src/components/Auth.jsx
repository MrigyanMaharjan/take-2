import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Corrected import
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate=useNavigate()
  const [form, setForm] = useState({});
  const [see, setSee] = useState(false);
  
  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await fetch('https://take-2-3.onrender.com/autho', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log(data);
      if(res.ok){
       navigate("/signin")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

const handlesee=()=>{
  if(see===true){
    setSee(false)
  }
  else{
    setSee(true)
  }
  
}
console.log(see);
  const handlechange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  return (
    <div className='h-screen w-screen bg-indigo-400 text-white flex items-center pt-3 justify-center'>
      <div>
        <section className='h-[5vh] w-[40vw] text-white font-semibold text-2xl  capitalize text-center flex items-center justify-center '><section className='max-sm:w-[100vw'>Sign up</section></section>
        <div className='h-[60vh] w-[40vw] bg-indigo-100 rounded-lg flex flex-col items-center pt-11 p-5 max-lg:h-[60vh] max-lg:w-[90vw] shadow-lg max-lg:pt-5 max-sm:h-[70vh] max-sm:w-[90vw] gap-3 justify-start'>
          <label className='text-black text-md w-[100%] text-left'>Username
            <input onChange={handlechange} id="username" type="text" placeholder='Enter a Username' className='  rounded-md bg-indigo-300 shadow-lg focus:shadow-indigo-500/50 duration-150 placeholder:text-gray-700 h-[55px] w-full p-1' />
          </label>
          <label className='text-black text-md w-[100%] text-left'>E-mail
            <input onChange={handlechange} id="email" type="text" placeholder='Enter an E-mail' className='  rounded-md bg-indigo-300 shadow-lg focus:shadow-indigo-500/50 duration-150 placeholder:text-gray-700 h-[55px] w-full p-1' />
          </label>
          <label className='text-black text-md w-[100%] text-left'>Password
            <input onChange={handlechange} id="password" type={see?"password":'text'} placeholder='Enter a password' className='  rounded-md bg-indigo-300 shadow-lg focus:shadow-indigo-500/50 duration-150 placeholder:text-gray-700 h-[55px] w-full p-1' />
            <span onClick={handlesee} className='absolute  left-[66.2vw] top-[26.9rem] hover:brightness-90 hover:cursor-pointer bg-indigo-300 p-2 rounded-lg'>
              {see?<IoIosEye />:<IoIosEyeOff/>}
</span>
          </label>
          <button onClick={handlesubmit} className='w-[37vw] h-[5vh] ring-2 rounded-md text-black hover:bg-indigo-400 duration-150 mt-5 hover:shadow-lg'>Sign Up</button>
          <section className='text-black'>Already have an account?<Link to="/signin" className='text-blue-400'> Sign in</Link></section>
        </div>
      </div>
     
    </div>
  );
}

export default Auth;
