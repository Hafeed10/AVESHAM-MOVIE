import React, { useState, useEffect } from 'react';
import dtaimg from '../../Data/image';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = dtaimg; // Use the imported images array

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row justify-between ml-10 py-10 px-4 md:px-12">
      <div>
        <div className="font-bold">
          <h1 className="text-2xl line-through">New Movies Slider</h1>
        </div>
        <div className="relative overflow-hidden py-10">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 10}%)`, width: `${images.length * 10}%` }}
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/5 px-1">
                <img src={src} alt={`Slide ${index + 1}`} className="block mx-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
