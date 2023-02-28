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
    transform: `translate(${nextPercentage}%, -40%)`
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
    
    track.current.animate({transform: `translate(${nextPercentage}%, -40%)`}, { duration: 1200, fill: "forwards" });

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
    
  return (
   <section id='portfolio-body'>
     <div id='portfolio-title' ref={title} >
       <h1 style={{fontWeight:'light', letterSpacing: 3 }}>Our Work</h1>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet magna aliquam, eleifend ante a, rutrum eros. Nulla cursus efficitur sem sit amet tincidunt. Ut varius et nibh non ullamcorper. Ut sed urna lacus. Mauris vitae mi rhoncus, dapibus massa vel, aliquam odio. Maecenas consequat vehicula vehicula. Aliquam ut malesuada sapien, a facilisis justo. Morbi et nisi sit amet ante imperdiet sollicitudin. Maecenas in bibendum quam. Duis posuere a diam non ornare. Curabitur quis tincidunt diam. Maecenas eget nulla quis diam rutrum luctus tincidunt ac tortor. Curabitur porta risus nec enim finibus dictum.
      </div>
     <div id='portfolio-track' ref={track}>
       <div id='tequila' ref={tequila} className='portfolio-item' onClick={() => addClass(tequila)} ><div className='gradient' /><img style={{width: '25%'}} src={thiago} alt='Thiago Logo'/></div>
       <div id='music' ref={music} className='portfolio-item' onClick={() => addClass(music)}><div className='gradient' /><img style={{width: '40%'}} src={musicLogo} alt='Music Gofer Logo'/></div>
       <div id='care' ref={care} className='portfolio-item' onClick={() => addClass(care)}><div className='gradient' /><img src={cqd} alt='Care Quality Digital Logo'/></div>
       <div id='rota' ref={rota} className='portfolio-item' onClick={() => addClass(rota)}><div className='gradient' /><img src={rotalLogo} alt='Staff Rota Logo'/></div>
       <div id='dog' ref={dog} className='portfolio-item' onClick={() => addClass(dog)}><div className='gradient' /><img src={uphill} alt='Uphill Logo'/></div>
     </div>
    </section>
  )
}
