import React from 'react';
import { FaArrowUpRightDots, FaArrowsToDot } from "react-icons/fa6";
import data from '../../Data/Middle'; // Correct the default import

const { middi, loop } = data; // Destructure the imported data

const Middle = () => {
  return (
    <div className="max flex flex-col md:flex-row justify-center ml-10 py-10 px-4 md:px-12">
      <div className='flex flex-wrap justify-center w-full md:w-1/2'>
        <div className='flex flex-col justify-center w-full'>
          <ul className='flex flex-col gap-5 text-start xl:w-10/12 md:w-full'>
            {middi.map((item, i) => (
              <li key={i} className='border-2 rounded-lg p-2 border-gray-600 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-linear'>
                {item.icon}
                {item.dex}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* // ? Two Rows working  flex-cloum start */}
      <div className='flex flex-wrap justify-center w-full md:w-1/2 mt-10 md:mt-0'>
        <div className='flex flex-col justify-center w-full'>
          <ul className='flex flex-col gap-5 text-start md:w-full xl:w-10/12'>
            {loop.map((item, i) => (
              <li key={i} className='border-2 rounded-lg p-2 border-gray-600 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-linear'>
                {item.icon}
                {item.dex}
              </li>
            ))}
          </ul>
        </div>
      </div>
          {/* // ? Two Rows working  flex-cloum end */}
    </div>
  );
};

export default Middle;
