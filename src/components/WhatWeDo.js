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
            <p>Our seasoned team of designers and developers collaborates closely with you to craft custom admin systems and business tools that seamlessly integrate with your unique workflow.</p>
            <p>Focused on intuitive and user-centric design, our solutions enhance efficiency, allowing you to manage tasks, data, and communication effortlessly.</p>
            <p>Transform your business operations – contact us today to elevate your digital efficiency and maintain a competitive edge in the market.</p>
          </div >

          <div className='accordion' onClick={() => handleClick("Mobile")}>
            <p>MOBILE APPS</p>
            <div >
              <h1 className={open === "Mobile" ? 'plus-closed' : 'plus-open'}>+</h1>
            </div>
          </div>
          <div className={open === "Mobile" ? 'accordion-info-open' : 'accordion-info-closed'}>
            <p>We recognise the growing trend of businesses leveraging mobile apps to efficiently manage both clients and staff.</p>
            <p>Our experienced team of designers and developers collaborates closely with you to design custom mobile apps tailored to meet your unique business demands.</p>
            <p>Reach out to us today to elevate your digital efficiency and maintain a competitive edge in the mobile app market.</p>
          </div >

          <div className='accordion' onClick={() => handleClick("Branding")}>
            <p>BRANDING</p>
            <div >
              <h1 className={open === "Branding" ? 'plus-closed' : 'plus-open'}>+</h1>
            </div>
          </div>
          <div className={open === "Branding" ? 'accordion-info-open' : 'accordion-info-closed'}>
            <p>From crafting memorable logos and selecting cohesive color palettes to choosing fonts that convey your brand personality, our branding services are designed to enhance your visual presence and leave a lasting impression.</p>
            <p>Whether you're establishing a new brand or looking to refresh your existing identity through rebranding, Our team of skilled designers collaborates closely with you to develop a unique brand identity that resonates with your target audience.</p>
          </div >

          <button onClick={handleOpen} style={{marginTop: 40}} className='frantech-btn'>GET IN TOUCH</button>
        </div>
    </div>
  )
}
