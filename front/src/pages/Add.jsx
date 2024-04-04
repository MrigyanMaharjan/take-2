import React, { useState } from 'react';

const Add = () => {
  const [formdata,setFormdata] = useState({})
  const handlechange=(e)=>{
    console.log(e.target.value)
    setFormdata({...formdata,[e.target.id]:e.target.value})
    console.log(formdata);
}
const handlepost = async () => {
  const postdata = await fetch('http://localhost:3000/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata)
  });
  console.log(postdata);


}
  return (
    <div className='h-screen w-screen bg-black text-white flex items-center justify-center'>
      <article className='h-[70vh] rounded-lg p-5 w-[35vw] bg-black border-2 border-indigo-400 gap-3 text-white text-lg capitalize flex items-center justify-start flex-col'>
      <section>upload a picture that others can see</section>
      <section className='h-[10vh] w-[100%] '>Name:
        <input onChange={(e)=>handlechange(e)} id='name' type="text" placeholder='Enter the name of person ' className='h-[7vh] placeholder:text-sm text-black placeholder:text-black text-sm px-2 rounded-md w-[100%]'/>
      </section>
      <section className='h-[10vh] w-[100%] text-white'>image
        <input onChange={(e)=>handlechange(e)} id='image' type='file' placeholder='Enter the image ' className='h-[90px] placeholder:text-sm text-black placeholder:text-black text-sm px-2 rounded-md w-[100%]'/>
      </section>
      <section className='h-[10vh] w-[100%] '>description
        <input onChange={(e)=>handlechange(e)} id='description' type="text" placeholder='Enter some description (optional) ' className='h-[7vh] placeholder:text-sm text-black placeholder:text-black text-sm px-2 rounded-md w-[100%]'/>
      </section>
      <button onClick={handlepost} className='border-2 border-indigo-400 p-2 rounded-md mt-5 hover:bg-indigo-400 hover:text-black duration-150 active:translate-y-1'>Add person</button>
      </article>
      

    </div>
  )
}

export default Add