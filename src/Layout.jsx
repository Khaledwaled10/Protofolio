import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Copy from './Copy';

export default function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet/>

    
  
  <div className=' clr '>
    <div className=''>
    <Footer></Footer>

    </div>
</div>

    </>
  )
}
