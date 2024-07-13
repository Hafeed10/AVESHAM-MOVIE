import React from 'react';
import { FaArrowUpRightDots, FaArrowsToDot } from "react-icons/fa6";
import data from '../../Data/Middle'; // Correct the default import

const { middi, loop } = data; // Destructure the imported data

const Middle = () => {
  return (
    <div className="max-w-full flex flex-col md:flex-col justify-between py-10 px-12">
      <div className='flex justify-center'>
        <ul className='flex w-full  md:flex-col-1 gap-5 text-start max-w-full'>
          {
            middi.map((items, i) => (
              <li key={i}  className='border-2 rounded-lg p-2 border-gray-600 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-linear'>
                {items.icon}
                {items.dex}
              </li>
            ))
          }
        </ul>
      </div>
      <div className='flex justify-between mt-10 '>
        <ul className='flex w-full md:flex-col-1 gap-5 text-start max-w-full'>
          {
            loop.map((item, i) => (
              <li key={i} className='border-2 rounded-lg p-2 border-gray-600 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-linear'>
                {item.icon}
                {item.dex}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Middle;
