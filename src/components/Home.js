import React from 'react'
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const navigate=useNavigate();
    const handleNavigate=async()=>{
        navigate('/invoice-manager')
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-2xl font-bold'>
                <Typewriter
                    options={{
                        strings: ['Welcome to the invoice assignment'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>


          <button className='mt-5 bg-black text-white w-28 h-14 rounded-lg' onClick={handleNavigate}>Click to Start</button>
        </div>
    )
}

export default Home
