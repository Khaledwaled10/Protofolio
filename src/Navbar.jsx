import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="bg-dark navbar navbar-expand-lg p-3">
  <div className="container-fluid ms-5">
    <Link className="navbar-brand clr font-xl ms-5" to="/">PROTFOLIO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-lg-5  mb-2 mb-lg-0 ms-auto">

        <li className="nav-item ms-2">
          <NavLink className="nav-link" to='/about' >About</NavLink>
        </li>
                <li className="nav-item ms-2">
          <NavLink className="nav-link" to='/protfolio' >Protfolio</NavLink>
        </li>

                <li className="nav-item ms-2 me-4 me-lg-5">
          <NavLink className="nav-link me-lg-5" to='/contact' >Contact</NavLink>
        </li>
        
      </ul>
      
      
    </div>
  </div>
</nav>

    </>
  )
}
