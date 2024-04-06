import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Corrected import
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'

const Auth = () => {
  const navigate=useNavigate()
  const[loading,setLoading]=useState(false);
  const [form, setForm] = useState({});
  const [see, setSee] = useState(false);
  const [err,setErr]= useState("")
  
  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      setLoading(true)
      const res = await fetch('https://take-2-3.onrender.com/autho', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setLoading(false)
      if(res.ok){
       navigate("/signin")
       setLoading(false)
      }
      else{
        setErr(data.message)

      }
      console.log(err);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
    }
  }

const handlesee=()=>{
  if(see===true){
    setSee(false)
    setLoading(false)
  }
  else{
    setSee(true)
    setLoading(false)
  }
  
}
console.log(see);
  const handlechange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value.trim() });
    setErr("")
  }

  return (
    <div className='h-screen w-screen bg-indigo-400 text-white flex items-center pr-[2.5] pt-3 justify-center overflow-hidden'>
      <div>
        <section className='h-[5vh] w-[40vw] text-white font-semibold text-2xl  capitalize text-center flex items-center justify-center '><section className='max-sm:w-[100vw'>Sign up</section></section>
        <div className='min-h-[500px] w-[40vw] bg-indigo-100 rounded-lg flex flex-col items-center pt-11 p-5 max-lg:h-[60vh] max-lg:w-[90vw] shadow-lg max-lg:pt-5 max-sm:h-[70vh] max-sm:w-[90vw] gap-3 justify-start'>
          <label className='text-black text-md w-[100%] text-left'>Username
            <input onChange={handlechange} id="username" type="text" placeholder='Enter a Username' className='  rounded-md bg-indigo-300 shadow-lg focus:shadow-indigo-500/50 duration-150 placeholder:text-gray-700 h-[55px] w-full p-1' />
          </label>
          <label className='text-black text-md w-[100%] text-left'>E-mail
            <input onChange={handlechange} id="email" type="text" placeholder='Enter an E-mail' className='  rounded-md bg-indigo-300 shadow-lg focus:shadow-indigo-500/50 duration-150 placeholder:text-gray-700 h-[55px] w-full p-1' />
          </label>
          <label className='text-black text-md w-[100%] text-left'>Password
            <input onChange={handlechange} id="password" type={see?"password":'text'} placeholder='Enter a password' className='  rounded-md bg-indigo-300 shadow-lg focus:shadow-indigo-500/50 duration-150 relative placeholder:text-gray-700 h-[55px] w-full p-1' />
            <span onClick={handlesee} className='relative left-[92%] -top-[58px] hover:brightness-90 hover:cursor-pointer p-2 rounded-lg'>
              {see?<IoIosEye />:<IoIosEyeOff/>}
</span>
          </label>
          <button onClick={handlesubmit} className='w-[37vw] h-[40px] ring-2 rounded-md text-black hover:bg-indigo-400 duration-150  hover:shadow-lg'>{loading?
            <Audio
  height="20"
  width="650"
  radius="9"
  color="black"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>:"Sign up"}</button>
          <section className='text-black'>Already have an account?<Link to="/signin" className='text-blue-400'> sign in</Link></section>
          {err?
            <span className='h-[70px] rounded-lg w-[100%] text-black flex items-center justify-center bg-red-400'>
              {err}
            </span>
          :
          <span className='h-[8vh] rounded-lg w-[100%] flex items-center justify-center bg-transparent'>
          
        </span>}
        </div>

      </div>
     
    </div>
  );
}

export default Auth;
