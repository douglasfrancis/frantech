import React, { useState} from 'react'
import logo from '../frantech.png'
import './Navbar.css'

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    window.addEventListener("scroll", function(e){

        if ( window.pageYOffset > 10 ) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }});

  return (
      <header className={scrolled ? 'navbar-scrolled' : 'navbar'}>
            <div id='title-container'>
                <img className={scrolled ? 'logo-scrolled' : 'logo'} src={logo} />
                <h2 id="head-title">Frantech Web Solutions</h2>

            </div>


            <nav>
                <a href="#portfolio-body">Portfolio</a>
                <a href="#contact">Contact Us</a>
            </nav>
      </header>

  )
}
