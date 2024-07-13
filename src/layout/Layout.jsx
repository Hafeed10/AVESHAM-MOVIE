import React from 'react';
import Navbar from '../components/Header/Navbar';
import Home from '../components/Home/Home'
import Middle from '../components/Middle/Middle'
import Slider from '../components/Slider/Slider'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Middle/>
    <Slider/>
      
    </>
  );
}

export default Layout;
