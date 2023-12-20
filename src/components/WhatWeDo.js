import React, { useState} from 'react'
import './WhatWeDo.css'

export default function WhatWeDo({handleOpen}) {

  const [open, setOpen] = useState("")

  const handleClick = (accordion) => {
    if(open === accordion){
      setOpen("")
    } else {
      setOpen(accordion)
    }
  }

  return (
    <div id='what-we-do'>
        <h2>WHAT WE DO</h2>

        <div id='accordion-container'>

          <div className='accordion' onClick={() => handleClick("Website")}>
            <p>WEBSITES</p>
            <div >
              <h1 className={open === "Website" ? 'plus-closed' : 'plus-open'}>+</h1>
            </div>
          </div>
          <div className={open === "Website" ? 'accordion-info-open' : 'accordion-info-closed'}>
            <p>We understand the pivotal role a website plays in establishing a strong online presence for your business.</p>
            <p>Our team of skilled designers and developers is dedicated to crafting visually stunning, user-freindly websites that seamlessly align with your brand.</p>
            <p>Whether you're a startup looking to make a bold entrance into the digital realm or an established business seeking a website revamp, we've got you covered.</p>
          </div >
         

          <div className='accordion' onClick={() => handleClick("Web")}>
            <p>WEB APPS</p>

            <div >
              <h1 className={open === "Web" ? 'plus-closed' : 'plus-open'}>+</h1>
            </div>
          </div>
          <div className={open === "Web" ? 'accordion-info-open' : 'accordion-info-closed'}>
            <p>We understand the pivotal role a website plays in establishing a strong online presence for your business.</p>
            <p>Our team of skilled designers and developers is dedicated to crafting visually stunning, user-freindly websites that seamlessly align with your brand.</p>
            <p>Whether you're a startup looking to make a bold entrance into the digital realm or an established business seeking a website revamp, we've got you covered.</p>
          </div >

          <div className='accordion' onClick={() => handleClick("Mobile")}>
            <p>MOBILE APPS</p>
            <div >
              <h1 className={open === "Mobile" ? 'plus-closed' : 'plus-open'}>+</h1>
            </div>
          </div>
          <div className={open === "Mobile" ? 'accordion-info-open' : 'accordion-info-closed'}>
            <p>We understand the pivotal role a website plays in establishing a strong online presence for your business.</p>
            <p>Our team of skilled designers and developers is dedicated to crafting visually stunning, user-freindly websites that seamlessly align with your brand.</p>
            <p>Whether you're a startup looking to make a bold entrance into the digital realm or an established business seeking a website revamp, we've got you covered.</p>
          </div >

          <div className='accordion' onClick={() => handleClick("Branding")}>
            <p>BRANDING</p>
            <div >
              <h1 className={open === "Branding" ? 'plus-closed' : 'plus-open'}>+</h1>
            </div>
          </div>
          <div className={open === "Branding" ? 'accordion-info-open' : 'accordion-info-closed'}>
            <p>We understand the pivotal role a website plays in establishing a strong online presence for your business.</p>
            <p>Our team of skilled designers and developers is dedicated to crafting visually stunning, user-freindly websites that seamlessly align with your brand.</p>
            <p>Whether you're a startup looking to make a bold entrance into the digital realm or an established business seeking a website revamp, we've got you covered.</p>
          </div >

          <button onClick={handleOpen} style={{marginTop: 40}} className='frantech-btn'>GET IN TOUCH</button>
        </div>
    </div>
  )
}
