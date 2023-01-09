import React from 'react'
import globe from "../assets/globe-icon.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={globe} />
      <h1 className="navbar-title">my travel journal.</h1>
    </nav>
  )
}

export default Navbar