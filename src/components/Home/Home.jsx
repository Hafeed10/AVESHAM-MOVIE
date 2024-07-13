import React from 'react';
import Img from '../asetss/Home/3fffd702d48852ede79ed71d04f36a2b.jpg';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import pop from '../../Data/Home'

const Home = () => {
  return (
    <div className="max-w-full flex flex-col md:flex-col items-center justify-between py-10 px-12">
      <div className="flex flex-wrap justify-center items-center py-10">
        <div className="w-60 ">
          <img src={Img} alt="Aavesham Poster"/>
        </div>
        <div className="flex flex-wrap flex-col justify-end items-end xl:w-2/4 content-center md:justify-center">
          <p className="text-start p-5 w-full">
           {
            pop.map((p, i) => (
              <p key={i} className="text-2xl text-left p-5 w-full">
                {p.title}
              </p>
            ))
            }
           
          </p>

          {/* // * button section start  */}
          <div className="flex justify-center">
            <button 
              className="flex items-center justify-between 
              bg-blue-300 hover:bg-blue-400 text-white w-40 p-3 
              rounded-md"
            >
              Start <FaArrowRight className="ml-2"/>
            </button>
          </div>
           {/* // * button section end */}

        </div>
      </div>

       {/* // ! scroll button start  */}
      <div className='border border-gray-400 border-2 p-1 rounded-full hover:bg-gray-300'>
      <FaArrowDown size={20}/>
      </div>
       {/* // ! scroll button start  */}
       
    </div>
  );
};

export default Home;