import React, { useState, useEffect } from 'react';

const Confession = () => {
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
        <div className='bg-gray-900 overflow-y-auto overflow-x-hidden h-screen w-screen gap-[1rem] text-white flex items-center flex-col justify-start pt-10'>
            <h1 className='text-3xl text-gray-200'>Confessions</h1>
            {fetched ? (
                <ul className='grid pb-10 min-h-screen w-screen gap-4 lg:grid-cols-4 sm:grid-cols-1 max-sm:text-sm md:text-md lg:text-md ms:grid-cols-2 md:grid-cols-3'>
                    {data.map((item, index) => (
                        <article className='bg-gray-800 w-full hover:scale-[1.0] transition min-h-[15vh] flex rounded-md items-center justify-center' key={index}>{item.confession}</article>
                    ))}
                </ul>
            ) : (
                "Fetching data..."
            )}
        </div>
    );
};

export default Confession;
