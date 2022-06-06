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
                <div className='carousel-container' style={{backgroundColor: '#dfeeed'}}>
                    
                    <img className='carousel-img' src={desktop} style={{height:'70%'}} />
                    <div className='carousel-info'>
                        <h1 className='carousel-header'>Web Apps</h1>
                        <p>Care Quality Digital helps domicilliary care companies manage staff, clients, medication and much more.</p>

                        <p>Dedicated apps for Management, Staff and on the App stores.</p>

                        <img id='app-store' src={apple}/>
                    </div>
                </div>

                <div className='carousel-container' id={'green'}>
                    
                    <img className='carousel-img' src={app}  />
                    <div className='carousel-info'>
                    <h1 className='carousel-header'>Mobile Apps</h1>
                        <p>Care Quality Digital helps domicilliary care companies manage staff, clients, medication and much more.</p>

                        <p>Dedicated apps for Management, Staff and on the App stores.</p>

                        <img id='app-store' src={apple}/>
                    </div>
                </div>
                
        </Carousel>
        </section>
  )
}
