import React from 'react'
import logo from '../frantech.png'

export default function Navbar() {
  return (
      <header>
            <div>
                <img id='logo' src={logo} />
                <h2 id="head-title">Frantech Web Solutions</h2>

            </div>

            <nav>
                <a href="#about">About</a>
                <a href="#work">Our Work</a>
                <a href="#contact">Contact Us</a>
            </nav>
      </header>

  )
}
