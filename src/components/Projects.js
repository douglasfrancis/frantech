import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../frantech.png'

export default function Projects() {
  return (
   <section id='work'>
        <Carousel dynamicHeight={true} autoPlay infiniteLoop showThumbs={false}>
                <div className='carousel-container' id={'green'}>
                    
                    <img className='carousel-img' src={logo}  />
                    <div>
                    <h1 className='carousel-header'>Licenseable Software</h1>
                        <p>Care Quality Digital helps domicilliary care companies manage staff, clients, medication and much more.</p>

                        <p>Dedicated apps for Management, Staff and on the App stores.</p>
                    </div>
                    <p className="legend">Legend 1</p>
                </div>
                <div className='carousel-container'>
                    <img className='carousel-img'  src={logo}  />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='carousel-container'>
                    <img className='carousel-img'  src={logo}  />
                    <p className="legend">Legend 3</p>
                </div>
        </Carousel>
        </section>
  )
}
