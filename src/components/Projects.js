import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import app from '../login-6.5.png'
import apple from '../app-store.png'
import desktop from '../desktop.png'

export default function Projects() {
  return (
   <section id='work'>
        <Carousel dynamicHeight={true} autoPlay infiniteLoop showThumbs={false}>
              

                <div className='carousel-container'>
                    
                    <img className='carousel-img' src={app}  />
                    <div className='carousel-info'>
                    <h1 id='carousel-header-2'>Mobile Apps</h1>
                        <p className='carousel-p-2'>Care Quality Digital helps domicilliary care companies manage staff, clients, medication and much more.</p>

                        <p className='carousel-p-2'>Dedicated apps for Management and for Staff on both App stores.</p>

                        <img id='app-store' src={apple}/>
                    </div>
                </div>
                
        </Carousel>
        </section>
  )
}
