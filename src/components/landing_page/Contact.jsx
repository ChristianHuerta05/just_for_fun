import React, { useState, useEffect, useRef } from 'react';
import './styles/Contact.css';
import background from './assets/contact/background.svg';
import linkedin from './assets/contact/linkedin.svg';
import instagram from './assets/contact/instagram.svg';
import acm from './assets/contact/acm.svg';
import discord from './assets/contact/discord.svg';
import flying_dude from './assets/contact/flying-capy.svg';

const Contact = () => {
    const [imageHeight, setImageHeight] = useState('auto');
    const flyingCapyRef = useRef(null);
    const containerRef = useRef(null);

    const handleImageLoad = (e) => {
        setImageHeight(e.target.offsetHeight);
    };

    useEffect(() => {
        const capy = flyingCapyRef.current;
        const container = containerRef.current;

        let x = 50; 
        let y = 50;
        let dx = 1; 
        let dy = 1; 
        let rotation = 0; 

        const moveCapy = () => {
            if (!capy || !container) return;

            const capyRect = capy.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();


            if (x + capyRect.width >= containerRect.width || x <= 0) {
                dx = -dx; 
            }
            if (y + capyRect.height >= containerRect.height || y <= 0) {
                dy = -dy; 
            }


            x += dx;
            y += dy;


            rotation += 1;


            capy.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        };


        const intervalId = setInterval(moveCapy, 16); 

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div className="contact-main-container" ref={containerRef} style={{ height: imageHeight }}>
            <img
                src={background}
                alt="cool stuff"
                className="cool-background-stuff"
                onLoad={handleImageLoad}
            />
            <img src={flying_dude} alt="flying capybara" className="flying-capy" ref={flyingCapyRef} />
            <p>fullyhacks@gmail.com</p>
            <div className="social-media">
                <img src={linkedin} alt="linkedin" className="social-media-icon" />
                <img src={discord} alt="discord" className="social-media-icon" />
                <img src={acm} alt="acm" className="social-media-icon" />
                <img src={instagram} alt="instagram" className="social-media-icon" />
            </div>
        </div>
    );
};

export default Contact;