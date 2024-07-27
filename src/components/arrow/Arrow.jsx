import React, { useState } from 'react';
import { BsDisplay } from 'react-icons/bs';
import { FaArrowRight } from "react-icons/fa";
const Arrow = () => {
    const [arrow,setArrow] = useState(false);
    const toggleArrow = () => !setArrow(arrow)
   
  return (
    <div className="flex flex-col md:flex-row justify-center mx-10 py-10 px-4 md:px-12">
        <div>
          {/*
            arrow && ( */}
                <div className='flex items-center space-x-3 border-2 border-gray-500 p-2 rounded-sm'>
                   <FaArrowRight size={20} className='cursor-pointer' />
                   <div>
                      <p>lcomedy film directed by Jithu Madhavan and produced by Nazriya </p>
                   </div>
                   <p className='text-4xl font-bold cursor-pointer ' onClick={toggleArrow}>+</p>
                  
                </div>
                <div className='hidden' onClick={toggleArrow}>
                    <h1>hello world</h1>
                   </div>
        {/* //     ) */}
        {/* // } */}
      
        </div>
      </div>
  );
}

export default Arrow;
