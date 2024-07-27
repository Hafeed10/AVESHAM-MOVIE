import React from 'react';
import { FaArrowUpRightDots, FaArrowsToDot } from "react-icons/fa6";
import pop from '../../Data/poupap'

const Poupap = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-10 py-10 px-4 md:px-12">
      <div className='w-full flex flex-col flex-wrap'>
        <div>
          <h1 className='text-2xl font-bold line-through'>Poupap Section</h1>
        </div>
        {/* //* Item create which the hover any thing work start  */}
        <div className='flex justify-between flex-wrap items-center py-10 gap-5'>
          {
            pop.map((item) => (
              <div key={item.id} className='text-center border-2 border-gray-700 p-10 rounded-md cursor-pointer hover:bg-[#29c0ce] hover:text-white hover:border-none md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <div className='border-2 border-gray-900 p-1 h-fit m-0 w-full hover:border-none'>
                  {item.icon}
                  <p>{item.title}</p>
                </div>
              </div>
            ))
          }
        </div>
         {/* //* Item create which the hover any thing work end  */}
      </div>
      
    </div>
  );
}

export default Poupap;