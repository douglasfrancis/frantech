import React from 'react'
import './ReadyToWork.css'

export default function ReadyToWork({ handleOpen }) {
  return (
    <div id='ready'>
        <h2>READY TO WORK WITH US?</h2>
        <button onClick={handleOpen} className='frantech-btn'>GET IN TOUCH</button>
    </div>
  )
}
