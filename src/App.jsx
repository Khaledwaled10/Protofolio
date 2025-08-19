import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import About from './About';
import Protfolio from './Protfolio';
import Contact from './Contact';
function App() {
const routes=createBrowserRouter([
  {path:'/',element:<Layout></Layout>,children:[
{index:true,element:<Home></Home>},
{path:'/about',element:<About></About>},
{path:'/protfolio',element:<Protfolio></Protfolio>},
{path:'/contact',element:<Contact></Contact>}
  ]}
])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
