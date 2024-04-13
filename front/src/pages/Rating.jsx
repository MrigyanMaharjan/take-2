import React, { useState, useEffect } from 'react';
import Loader from "react-js-loader";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Rating = () => {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState([]);
    const [like,setLike]=useState({Item:""})


     const handleclick=async(e)=>{
        e.target.innerText++
        const postdata = await fetch('https://take-2-3.onrender.com/likes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({Item:e.target.id})
          });
         
        if(postdata.ok){
          console.log(postdata);
          
        }
        else{
        }
          
     }
     
     console.log(like);

   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://take-2-3.onrender.com/add', { method: "GET" });
                const fetchedData = await response.json();
                setData(fetchedData);
                setFetched(true);
                console.log(fetchedData);
                  const postdata = await fetch('https://take-2-3.onrender.com/likes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(like)
          });
         
        if(postdata.ok){
          console.log(postdata);
        }
        else{
        }
          
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-gray-900 overflow-y-auto overflow-x-hidden min-h-screen max-w-screen max-sm:px-5 gap-[0rem] text-white flex items-center flex-col justify-start pt-10'>
                <div className='bg-gray-800 hidden md:flex pt-10 fixed md:pl-5 px-2 left-10 top-[120px] h-[80vh]  text-wrap items-center justify-start gap-10 flex-col w-[20%]'>
                    <section className='uppercase'>Information</section>
                        <ol type='1' className='  list-disc'>
                            <li>You can like multiple times.</li>
                            <li>Do not post any thing graphic.</li>
                            <li>Be polite and kind.</li>
                        </ol>
                        <section>Enjoy!!!</section>
                    
                </div>
            <h1 className='text-3xl w-[100%] text-center text-gray-200 flex items-center justify-around'><span className='w-1/2'>Rating</span> <Link to={"/add"} className='text-sm pr-10 bg-blue-300 text-black p-2 hover:cursor-pointer hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white transition duration-200  rounded-lg '>Add Items?</Link></h1>
           
        
            {fetched ? (
                
                <ul className='flex p-10 min-h-screen w-screen gap-4 justify-center items-center flex-col-reverse md:w-[70%] '>
                    
                    {data.map((item, index) => (
                        <article className='bg-gray-800 gap-[30px] w-[80%] hover:scale-[1.0] transition min-h-[40vh] flex rounded-md items-center p-2 justify-start flex-col text-center' key={index}>
                            <section className='text-2xl h-[10%]'>{item.Item}</section>
                            <section className='min-h-[40vh] w-[100%] bg-gray-900'></section>
                            <section>{item.description}</section>
                            <section className=' h-[10vh] w-[100%]  aspect-square flex px-7 items-center justify-start gap-8'>
                                <span onClick={(e)=>handleclick(e)} id={item.Item} key={item.liked} defaultValue={item.likes} className=' selection:bg-transparent scale-[1.8] flex hover:cursor-pointer hover:brightness-105 hover:scale-[1.9] text-sm duration-150 transition '><AiOutlineLike pointerEvents={'none'}/>{item.likes}</span>
                                <span  className='scale-[1.5] '><FaRegComment/></span>
                                </section>
                        </article>
                    ))}
                </ul>
            ) : (
                <div className='h-screen w-screen flex items-center justify-center'>
                <Loader type="bubble-scale" bgColor={"gray"} color={"whte"} title={"Please wait.."} size={45} />
                </div>
            )}
        </div>
    );
};

export default Rating;
