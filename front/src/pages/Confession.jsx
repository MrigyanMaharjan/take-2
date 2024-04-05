import React, { useState, useEffect } from 'react';

const Confession = () => {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState([]);

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
        <div>
            {fetched ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                "Fetching data..."
            )}
        </div>
    );
};

export default Confession;
