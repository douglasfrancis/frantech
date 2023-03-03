import { Scale } from '@mui/icons-material';
import { style } from '@mui/system';
import React, { useState, useRef, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Projects.css'
import thiago from '../Assets/thiago.png'
import musicLogo from '../Assets/music.png'
import cqd from '../Assets/cqd.png'
import rotalLogo from '../Assets/rota.png'
import uphill from '../Assets/uphill.png'
import marketing from '../Assets/marketing.png'
import mobile from '../Assets/mobile.png'
import software from '../Assets/software.png'
import shopping from '../Assets/shopping.png'

export default function Projects() {

const mouse = useRef(null)
const scroll = useRef(window.pageYOffset)
const track = useRef(null)
const percentageRef = useRef(null)
const prevPercentageRef = useRef(null)
const title = useRef()

const tequila = useRef()
const music = useRef()
const care = useRef()
const rota = useRef()
const dog = useRef()

useEffect(()=>{
  
  const timeout = setTimeout(() => {
    title.current.style.transform = 'scale(1)'

  }, 200)

  return () => clearTimeout(timeout)
},[])

const handleOnDown = e => mouse.current = e.clientX;

const handleOnUp = () => {
  mouse.current = "0";  
  prevPercentageRef.current = percentageRef.current
}

const handleOnMove = e => {
  if(mouse.current === "0") return;
  
  let mouseDelta = mouse.current - e.clientX
  let maxDelta = window.innerWidth / 2;
  
  let percentage = (mouseDelta / maxDelta) * -100
  let nextPercentageUnconstrained = prevPercentageRef.current + percentage
  let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  percentageRef.current = nextPercentage;
  
  track.current.animate({
    transform: `translate(${nextPercentage}%, -35%)`
  }, { duration: 1200, fill: "forwards" });

  title.current.animate({
    transform: `translate(0%, ${nextPercentage*4}%)`
  }, { duration: 1200, fill: "forwards" });
  title.current.style.opacity = `${100-(nextPercentage*-5)}%`

  
  for(const image of track.current.getElementsByClassName("portfolio-item")) {
    image.animate({
      backgroundPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

  window.onmousedown = e => handleOnDown(e);
  window.ontouchstart = e => handleOnDown(e.touches[0]);
  window.onmouseup = e => handleOnUp(e);
  window.ontouchend = e => handleOnUp(e.touches[0]);
  window.onmousemove = e => handleOnMove(e);
  window.ontouchmove = e => handleOnMove(e.touches[0]);

  // Setup isScrolling variable
let isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
		// Run the callback
    scroll.current = window.pageYOffset
    prevPercentageRef.current = percentageRef.current
	}, 66);

}, false);

  window.addEventListener('scroll', () => {  
    if(scroll.current === "0") return;

    let scrollDelta = window.pageYOffset - scroll.current 
    let maxDelta = window.innerWidth / 2;
    
    let percentage = (scrollDelta / maxDelta) * -100
    let nextPercentageUnconstrained = prevPercentageRef.current + percentage
    let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    percentageRef.current = nextPercentage;
    
    track.current.animate({transform: `translate(${nextPercentage}%, -35%)`}, { duration: 1200, fill: "forwards" });

  title.current.animate({transform: `translate(0%, ${nextPercentage*4}%)`}, { duration: 1200, fill: "forwards" });
  title.current.style.opacity = `${100-(nextPercentage*-5)}%`

    
    for(const image of track.current.getElementsByClassName("portfolio-item")) {
      image.animate({
        backgroundPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  });

  const addClass = (item) =>{
    item.current.classList.toggle('portfolio-item-open')
    track.current.classList.toggle('portfolio-track-open')
  }

  const openLink = (url) => {
    let link = document.createElement("a")
    link.href = url
    link.target = "_blank"
    link.click()
  }
    
  return (
   <section id='portfolio-body'>

     <div id='portfolio-title' ref={title} >
       <h1 style={{fontWeight:'light', letterSpacing: 3, width: '100%', marginLeft: '1rem' }}>Our Work</h1>

       <div className='work-container'>
         <img src={mobile} alt='Mobile Icon' />
         <h3>Mobile Apps</h3>
         <p>We understand the importance of mobile technology in today's digital age and are committed to work closely with you to help you achieve your business goals through innovative and custom app development.</p>
       </div>
       <div className='work-container'>
        <img src={software} alt='Software Icon' />
        <h3>Business Systems &amp; Tools</h3>
        <p>In need of a web app, database solution, or enterprise software? We create tailored software solutions to help businesses thrive in today's digital world. Our approach is to best understand your unique needs and create customised software that aligns with your business objectives.</p>
       </div>
       <div className='work-container'>
        <img src={shopping} alt='Shopping Icon' />
        <h3>Ecommerce</h3>
        <p>Whether you need a small online store or a comprehensive ecommerce platform, we've got you covered. We are committed to delivering high-quality solutions that meet your expectations and help you achieve your business goals.</p>
       </div>
       <div className='work-container'>
        <img src={marketing} alt='Marketing Icon' />
        <h3>Marketing Integration &amp; SEO</h3>
        <p>We specialise in helping small businesses integrate marketing strategies into their websites and improve their search engine rankings through effective SEO. Helping you improve your online visibility and drive more traffic to your website.</p>
       </div>
     </div>

     <div id='portfolio-track' ref={track}>
       <div id='tequila' ref={tequila} className='portfolio-item' onClick={()=>openLink('https://thiagotequila.com')} ><div className='gradient' /><img style={{width: '25%'}} src={thiago} alt='Thiago Logo'/></div>
       <div id='music' ref={music} className='portfolio-item'onClick={()=>openLink('https://www.musicgofer.com')} ><div className='gradient' /><img id='music-logo' style={{width: '40%'}} src={musicLogo} alt='Music Gofer Logo'/></div>
       <div id='care' ref={care} className='portfolio-item' onClick={()=>openLink('https://www.cqd.org.uk')}><div className='gradient' /><img src={cqd} alt='Care Quality Digital Logo'/></div>
       <div id='rota' ref={rota} className='portfolio-item' onClick={()=>openLink('https://www.staff-rota.co.uk')}><div className='gradient' /><img src={rotalLogo} alt='Staff Rota Logo'/></div>
       <div id='dog' ref={dog} className='portfolio-item' onClick={()=>openLink('https://uphillndowndale.co.uk')}><div className='gradient' /><img src={uphill} alt='Uphill Logo'/></div>
     </div>

     <div className="scroll-icon ex-3">
      <span className="wheel"></span>
      <span className="arrow up"></span>
      <span className="arrow down"></span>
    </div>


    </section>
  )
}
