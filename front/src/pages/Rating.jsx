import React, { useState, useEffect } from 'react';
import Loader from "react-js-loader";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";


const Rating = () => {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState([]);
    const [like,setLike]=useState({})


     const handleclick=async(e)=>{
    e.target.innerText++
        setLike({Item:e.target.id})
        const postdata = await fetch('http://localhost:3000/likes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(like)
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
                const response = await fetch('http://localhost:3000/add', { method: "GET" });
                const fetchedData = await response.json();
                setData(fetchedData);
                setFetched(true);
                console.log(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-gray-900 overflow-y-auto overflow-x-hidden min-h-screen max-w-screen max-sm:px-5 gap-[0rem] text-white flex items-center flex-col justify-start pt-10'>
            <h1 className='text-3xl text-gray-200'>Ratings</h1>
            {fetched ? (
                <ul className='flex p-10 min-h-screen w-screen gap-4 justify-center items-center flex-col-reverse md:w-[70%] '>
                    {data.map((item, index) => (
                        <article className='bg-gray-800 gap-[30px] w-[80%] hover:scale-[1.0] transition min-h-[40vh] flex rounded-md items-center p-2 justify-start flex-col text-center' key={index}>
                            <section className='text-2xl h-[10%]'>{item.Item}</section>
                            <section className='min-h-[40vh] w-[100%] bg-gray-900'></section>
                            <section>{item.description}</section>
                            <section className=' h-[10vh] w-[100%]  aspect-square flex px-7 items-start justify-start gap-5'>
                                <span onClick={(e)=>handleclick(e)} id={item.Item} key={item.liked} defaultValue={item.likes} className='scale-[1.6] flex flex-col hover:cursor-pointer hover:brightness-105 hover:scale-150 text-[10px] duration-150 transition '><AiOutlineLike pointerEvents={'none'}/>{item.likes}</span>
                                <span  className='scale-[1.4] '><FaRegComment/></span>
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
