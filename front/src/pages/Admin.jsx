

import React, { useState } from 'react';


const Admin = () => {

    const [formdata, setFormdata] = useState({});
 console.log(username);
    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.id]: e.target.value });
    }
    

    const handleSubmit = () => {
        console.log(formdata);
       
        if (formdata.username ==='Admin') {
            console.log("confirmed");
        }
    }

    return (
        <div className='h-screen w-screen bg-gray-200 flex items-center flex-col justify-center'>
            <article>Verify you are an admin</article>
            <section className='h-[40vh] p-10 rounded-lg w-[40vw] flex items-center justify-start flex-col bg-gray-300'>
                <section className='h-1/2 flex flex-col gap-2 w-[100%]'>
                    <span className='w-[100%]'>Enter admin username</span>
                    <input id='username' onChange={(e) => handleChange(e)} placeholder='Enter your admin username' className='w-[100%] h-[6vh] rounded-md px-3' type="text" />
                </section>
                <section className='h-1/2 flex flex-col gap-2 w-[100%]'>
                    <span className='w-[100%]'>Enter admin Password</span>
                    <input id='Password' onChange={(e) => handleChange(e)} placeholder='Enter your admin Password' className='w-[100%] h-[6vh] rounded-md px-3' type="password" />
                </section>
                <button onClick={handleSubmit}>Confirm</button>
            </section>
        </div>
    );
}

export default Admin;
