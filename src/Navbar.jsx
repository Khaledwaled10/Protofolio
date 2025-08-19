import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-dark navbar navbar-expand-lg p-3">
        <div className="container-fluid ms-lg-5">
          <Link className="navbar-brand clr font-xl ms-lg-5" to="/">PROTFOLIO</Link>
          
          {/* زرار الموبايل */}
          <button 
            className="navbar-toggler text-white border-0" 
            type="button" 
            onClick={toggleMenu}
          >
            {/* 3 شرط (Hamburger icon) */}
            <span style={{fontSize: "24px"}}>☰</span>
          </button>

          {/* القائمة */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-lg-5 mb-2 mb-lg-0 ms-auto">
              <li className="nav-item ms-2">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link" to='/protfolio'>Protfolio</NavLink>
              </li>
              <li className="nav-item ms-2 me-4 me-lg-5">
                <NavLink className="nav-link me-lg-5" to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
