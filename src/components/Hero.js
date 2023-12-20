import React from 'react'
import './Hero.css'

export default function Hero({handleOpen}) {
  return (
    <div id='hero'>
      <div id='hero-overlay'>
        <h2>New Year</h2>
        <h2>New Website</h2>
        <h1><span style={{fontFamily: 'Inter', fontWeight: 900, fontSize: 48}}>£</span>999</h1>

        <p style={{width: 900, maxWidth: '90vw', color: '#dfdfdf'}}>Elevate your online presence with our New Year offer! Get a sleek and functional website for just £999. Don't miss this limited-time opportunity to launch your dream website and turn your vision into reality!</p>

        <button onClick={handleOpen} className='frantech-btn'>Find Out more</button>
      </div>
    </div>
  )
}
