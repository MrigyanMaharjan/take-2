import React, { useState } from 'react';
import Confession from './Confession';

const Add = () => {
  const [formdata,setFormdata] = useState({confession:""})
  const [loading,setLoading]= useState(false)
  const [res,setRes]=useState("")

let text=document.querySelector(".textarea");


  const handlechange=(e)=>{
   
    
    setRes("")
    setFormdata({...formdata,confession:e.target.value.trim()})
 
}
const handlepost = async () => {
  text.value=""
    setLoading(true)
    const postdata = await fetch('https://take-2-3.onrender.com/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
    });
    
    setLoading(false)
  if(postdata.ok){
    console.log("fetchcomplete");
    setRes("posted")
  }
  else{
   setRes("Enter something")
  }
    
    
    console.log(postdata);
  
}
  return (
    <div className='h-screen w-screen bg-gray-900 text-white flex-col gap-10 flex items-center justify-center overflow-auto overflow-x-hidden'>
      <section className='h-[30vh] max-sm:w-[90vw] w-[90%] lg:w-[60vw] text-center text-xl uppercase '>Confession
        <textarea onChange={(e)=>handlechange(e)} id='confession' type="text" placeholder='Enter a confession ' className='textarea text-white bg-slate-500 text-center text-wrap overflow-clip placeholder:justify-start h-full placeholder:text-sm outline-none active:scale-[1.01] focus:scale-[1.01] hover:scale-[1.01] transition placeholder:text-white text-sm px-2 rounded-md w-[100%]'/>
      </section>
      <button onClick={handlepost} className='border-2 border-indigo-400 p-2 rounded-md mt-5 hover:bg-indigo-400 hover:text-black duration-150 active:translate-y-1'>{!loading?"Add Confession":"wait"}</button>

      {
        res?
        <div  className='bg-gray-600 h-[7vh] w-[30vw] flex items-center justify-center rounded-lg'>{res}</div>
        :
        <div className=' h-[7vh] w-[30vw] flex items-center justify-center rounded-lg'></div>
      }
    </div>
  )
}

export default Add