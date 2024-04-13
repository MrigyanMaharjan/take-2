import React, { useState, useEffect } from 'react';
import Loader from "react-js-loader";

const Rating = () => {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://take-2-3.onrender.com/add', { method: "GET" });
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
        <div className='bg-gray-900 overflow-y-auto overflow-x-hidden h-screen w-screen max-sm:px-5 gap-[1rem] text-white flex items-center flex-col justify-start pt-10'>
            <h1 className='text-3xl text-gray-200'>Ratings</h1>
            {fetched ? (
                <ul className='grid pb-10 min-h-screen w-screen gap-4 lg:grid-cols-4 sm:grid-cols-1 max-sm:text-sm md:text-sm lg:text-md ms:grid-cols-2 md:grid-cols-3'>
                    {data.map((item, index) => (
                        <article className='bg-gray-800 w-full hover:scale-[1.0] transition min-h-[15vh] flex rounded-md items-start p-2 justify-center text-center' key={index}>{item.Item} {item.description}</article>
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
