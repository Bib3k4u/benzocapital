"use client";
import React from 'react';

const Hero = () => {
  return (
    <div className='h-screen pt-16 p-4 w-full bg-gradient-to-b from-[#000001] to-[#030067] relative'>
      <div
        className="absolute top-16 left-0 w-96 h-52 bg-cover bg-center"
        style={{ backgroundImage: "url('./topleft.png')" }}
      >
      </div>
      <div className=' w-full flex text-white h-full'>
        <div className='w-full p-32'>
            <div className='text-6xl flex items-center justify-center h-full flex-col tracking-wider font-bold font-mono w-full'>
                <div>
                <p className='p-2 text-start'>Invest smart,</p>
                <p className='p-2 text-start'>Invest safe,</p>
                <p className='p-2'>Invest with</p>
                <p className='p-2'>Benzo.</p>
                </div>
                <div className='my-12 text-lg bg-white text-blue-900 hover:text-white hover:bg-blue-900 p-2 rounded-md'>
                <button>
                    Start Trading
                </button>
            </div>
            </div>
            
        </div>
        <div className=' w-full flex items-center justify-end'>
            <img src='./illustration.png'/>
        </div>
      </div>

      <div className='absolute bottom-0 right-0 w-96 h-52 bg-cover bg-center'>
        <div
          style={{ backgroundImage: "url('./bottomright.png')", backgroundRepeat:'no-repeat' }}
          className="w-full h-full"
        >
        </div>
      </div>
    </div>
  );
}

export default Hero;
