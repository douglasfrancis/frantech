import React from 'react'
import './Hero.css'

export default function Hero({handleOpen}) {
  return (
    <div id='hero'>
      <div id='hero-overlay'>
        <h2>Future proof</h2>
        <h2>your business</h2>

        <p style={{width: 900, maxWidth: '90vw', color: '#dfdfdf', textAlign:'center'}}>Elevate your online presence with cutting-edge web solutions designed to adapt and thrive in a constantly evolving digital landscape.</p>

        <button onClick={handleOpen} className='frantech-btn'>Find Out more</button>

    </div>
    </div>

  )
}
