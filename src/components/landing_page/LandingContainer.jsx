import React from 'react'
import Header from './Header'
import FAQ from './FAQ'
import About from './About'
import Contact from './Contact'
import Sponsors from './Sponsors'
import Team from './Team'
import starLarge from './assets/stars-large.svg';

import './styles/LandingContainer.css';


const LandingContainer = () => {
    return (
        <div className='landing-container'>
            <div className='top-section'>
            <Header />
            <img src={starLarge} alt="stars" className='stars-top'/>
            <div className='title-items'>
           
                <h1>FULLYHACKS 2025</h1>
                <p>CS BUILDING: FEB 24 - FEB 25 </p>
                <div className='btn-container-as'>
                    <button className='apply-btn'>Apply</button>
                    <button className='sponsor-btn'>Sponsor Us</button>
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            </div>
            <div id="sponsors">
                <Sponsors />
            </div>
            <div id="team">
                <Team />
            </div>
            <div id="faq">
                <FAQ />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default LandingContainer;
