import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('http://localhost:3000/add', {
                    responseType: 'arraybuffer'
                });
                const contentType = response.headers['content-type'];
                const blob = new Blob([response.data], { type: contentType });
                const imageUrl = URL.createObjectURL(blob);
                setImageData(imageUrl);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImage();
    }, []);

    return (
        <div>
            {imageData && <img src={imageData} alt="Image" />}
        </div>
    );
};

export default ImageComponent;
