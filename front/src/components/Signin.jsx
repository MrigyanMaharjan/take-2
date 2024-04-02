import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Authcontext from '../context/authcontext';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


const Signin = () => {
  const [form, setForm] = useState({});
  const [err, setErr] = useState();
  const navigate = useNavigate();
const Auth=useContext(Authcontext)
const [see, setSee] = useState(false);

  const handleSubmit = async () => {

   
    try {
      const res = await fetch('https://take-2-3.onrender.com/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        Auth.value=true;
        console.log('success');
        navigate('/home');

        
      }
      setErr(data.message)
    } catch (error) {
     console.log(error)
     
    }
  };
  const handlesee=()=>{
    if(see===true){
      setSee(false)
    }
    else{
      setSee(true)
    }
    
  }
  console.log(see);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
    
  };


  return (
    <div className='h-screen w-screen bg-emerald-400 text-white flex items-center pt-3 justify-center'>
      <div>
        <section className='h-[5vh] w-[40vw] text-white font-semibold text-2xl capitalize text-center '>
          Sign in
        </section>
        <div className='h-[55vh] w-[40vw] bg-emerald-100 rounded-lg flex flex-col items-center pt-11 p-5 max-lg:h-[60vh] max-lg:w-[90vw] max-sm:h-[60vh] max-sm:w-[90vw] gap-3 justify-start'>
          <label className='text-black text-md w-[100%] text-left '>
            E-mail
            <input
              onChange={(e) => handleChange(e)}
              id={'email'}
              type='text'
              placeholder='Enter your e-mail'
              className='rounded-md bg-emerald-300 shadow-lg focus:shadow-emerald-500/50 duration-150 placeholder:text-gray-700 h-[55px] w-full p-1'
            />
          </label>
          <label className='text-black text-md w-[100%] text-left '>
            Password
            <input
              onChange={(e) => handleChange(e)}
              id={'password'}
              type={see?"password":'text'} placeholder='Enter a password' className='  rounded-md bg-emerald-300 shadow-lg focus:shadow-emerald-500/50 duration-150 placeholder:text-gray-700 h-[55px] w-full p-1' />
            <span onClick={handlesee} className='absolute hover:brightness-90 left-[66.2vw] top-[22.4rem] hover:cursor-pointer bg-emerald-300 p-2 rounded-lg'>
              {see?<IoIosEye />:<IoIosEyeOff/>}
</span>
          </label>
          <button
            onClick={handleSubmit}
            className='w-[37vw] h-[5vh] ring-2 rounded-md text-black hover:bg-emerald-400 duration-150 mt-5 hover:shadow-lg'
          >
            Sign in
          </button>
          <section className='text-black text-center'>
            Dont have an account?<Link to={'/auth'} className='text-blue-400 '>
              {' '}
              Sign up
            </Link>
          </section>
          {err?
            <span className='h-[8vh] rounded-lg w-[100%] text-black flex items-center justify-center bg-red-400'>
              {err}
            </span>
          :
          <span className='h-[8vh] rounded-lg w-[100%] flex items-center justify-center bg-transparent'>
          
        </span>
}        
        </div>
      </div>
    </div>
  );
};

export default Signin;
