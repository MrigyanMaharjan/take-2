import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Add = () => {
  const [formdata,setFormdata] = useState({})
  const [loading,setLoading]= useState(false)
  const [res,setRes]=useState("")
  const navigate = useNavigate()

let text=document.querySelector(".textarea");


  const handlechange=(e)=>{
   
    
    setRes("")
    setFormdata({...formdata,[e.target.id]:e.target.value.trim()})
 
}
console.log(formdata);
const handlepost = async () => {
  text.value=""
    setLoading(true)
    const postdata = await fetch('https://take-2-3.onrender.com/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata)
    });
   
    setLoading(false)
    console.log(loading);
  if(postdata.ok){
    console.log("fetchcomplete");
    setRes("Added")
    navigate('/rating')
  }
  else{
   setRes("Enter something")
  }
    
    
    console.log(postdata);
  
}
  return (
    <div className='h-screen w-screen bg-gray-900 text-white flex-col flex pt-[20vh] justify-center items-center overflow-auto overflow-x-hidden'>
      <section className='h-[10vh] max-sm:w-[90vw] w-[90%] lg:w-[60vw] text-center text-xl  '> Add Items
      </section>
      <section className='w-[60%] h-[70%] flex gap-2  items-center justify-start flex-col '>
        <section className='w-[100%] text-start pl-10'>Enter an Item</section>
        <input onChange={(e)=>handlechange(e)} id='Item' type="text" placeholder='Enter an item ' className='textarea text-white bg-violet-500/50 text-start text-wrap overflow-clip placeholder:justify-start h-[9vh] placeholder:text-sm outline-none active:scale-[1.01] focus:scale-[1.01] hover:scale-[1.01] transition placeholder:text-white text-sm px-2 rounded-md w-[90%]'/>
        <section className='w-[100%] text-start pl-10'>Enter Item description</section>
        <input onChange={(e)=>handlechange(e)} id='description' type="text" placeholder='Enter description ' className='textarea text-white bg-violet-500/50 text-start text-wrap overflow-clip placeholder:justify-start h-[9vh] placeholder:text-sm outline-none active:scale-[1.01] focus:scale-[1.01] hover:scale-[1.01] transition placeholder:text-white text-sm px-2 rounded-md w-[90%]'/>
        
      </section>

      
      <button onClick={handlepost} className='border-2 border-indigo-400 p-2 rounded-md hover:bg-indigo-400 hover:text-black duration-150 active:translate-y-1'>{!loading?"Add Item":"wait"}</button>

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