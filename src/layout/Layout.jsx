import React from 'react';
import Navbar from '../components/Header/Navbar';
import Home from '../components/Home/Home'
import Middle from '../components/Middle/Middle'
import Slider from '../components/Slider/Slider'
import Poupap from  '../components/poupap/poupap'
import Arrow from '../components/arrow/Arrow'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Middle/>
    <Slider/>
    <Poupap/>
    <Arrow/>
      
    </>
  );
}

export default Layout;
