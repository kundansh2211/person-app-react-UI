import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-warning-subtle">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
            <NavLink className="nav-link" to="/create">Add Person</NavLink>
            <NavLink className="nav-link" to="/show">Persons</NavLink>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar