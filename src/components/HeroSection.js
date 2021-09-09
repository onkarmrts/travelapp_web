import React from 'react';
import{ Button } from './Button';
import '../App.css'
import './HeroSection.css';


function HeroSection() {
          return (
                 
                    <div className='hero-container'>
                     <video src="/videos/video-2.mp4" autoPlay loop muted></video>
                     <h1>TRAVEL YOURWAY</h1>
                     <p>LEAVE BEHIND THE DESTINATIONS</p>
                     <div className="hero-btns">
                              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH ADVENTURE <i className='far fa-play-circle'/></Button>
                     </div>
                    </div>
                  
          )
}

export default HeroSection;
