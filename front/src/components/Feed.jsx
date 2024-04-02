import React from 'react'
import { GrArticle, GrHomeRounded } from "react-icons/gr";
import { IoPeopleOutline,IoPersonCircleSharp  } from "react-icons/io5";
import { IoMdAdd,IoMdArrowRoundBack  } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';



const Feed = () => {
  const navigate=useNavigate()

  const handleclick=(e)=>{
console.log(e.target.id);
navigate(`/${e.target.id}`)
  }

  const post=[
    {

    }
  ]

  const options=[
    {
      icon:<GrHomeRounded/>,
      name:"Home",
      id:"home",
    },
    {
      icon:<IoPeopleOutline/>,
      name:"People",
      id:"people",
    },
    {
      icon:<CiCircleMore/>,
      name:"More",
      id:"more",
    },
    {
      icon:<IoMdAdd/>,
      name:"Add people",
      id:"add",
    },
    {
      icon:<TbHelpOctagonFilled/>,
      name:"Help",
      id:"help",
    },
    {
      icon:<IoMdArrowRoundBack/>,
      name:"Back",
      id:"back",
    }
  ]

  return (
    <div className='h-screen w-screen bg-black text-white flex items-center justify-center'>
        <div className='flex items-center justify-left h-[100%] w-screen'>
            <section className='bg-blackfixed flex px-6 pt-10 items-center justify-start flex-col border-r-2 w-[20%] h-[100%]'>
                <section className='w-[100%] flex gap-2 items-center justify-start border-b-2 pb-3'><span className=' flex items-center justify-center scale-[2] w-[2vw] '><IoPersonCircleSharp/></span><label className='uppercase'>Name</label></section>
                <section className='h-full mt-2 overflow-hidden flex flex-col items-start justify-top w-[20vw] bg-black pt-5'>
                  
                    {
                  options.map((items,index)=>(<article key={index} onClick={(e)=>handleclick(e)} id={items.id} className='hover:bg-gray-500/50 duration-150 hover:brightness-150 hover:scale-105 px-3  flex items-center justify-start pl-4 gap-2 h-[8vh] w-[100%] '><span className='h-[100%] w-[2vw] scale-150  flex items-center justify-center pointer-events-none'>{items.icon}</span>{items.name}</article> ))


                }</section>


            </section>
            <section className='bg-black overflow-x-hidden pt-10 overflow-y-scroll flex items-start justify-center w-full h-[100%]'>
              <article className='min-h-[70vh] rounded-md w-[30vw] relative bg-red-400'>
                <section className='flex items-center justify-center w-[100%] h-[5vh]'>This is top section</section>
                <section className='flex items-center justify-center w-[100%] min-h-[50vh] bg-blue-500'>This is main photo section</section>
                <section className='w-[100%] flex items-center justify-center h-[5vh]'>This is like and comments</section>
                <section className=' min-h-[10vh] overflow-hidden bg-purple-400 rounded-md w-[100%] flex items-center justify-center'>

                </section>
              </article>
            </section>

        </div>
    </div>
  )
}

export default Feed