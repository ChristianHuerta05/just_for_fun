import React, { useState, useEffect, useRef } from 'react';
import './styles/FAQ.css';
import background from './assets/faq-assets.svg';

const FAQ = () => {
    const [imageHeight, setImageHeight] = useState('auto');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    const imageRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (imageRef.current && !isMobile) {
                setImageHeight(imageRef.current.offsetHeight);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            updateHeight(); 
        };

        updateHeight(); 
        window.addEventListener('resize', handleResize); 

        return () => window.removeEventListener('resize', handleResize); 
    }, [isMobile]);

    return (
        <div
            className="faq-container"
            style={!isMobile ? { height: imageHeight } : {}} 
        >
            <img
                src={background}
                alt="cool stuff"
                className="cool-background-stuff"
                ref={imageRef}
                onLoad={() => {
                    if (!isMobile) setImageHeight(imageRef.current.offsetHeight);
                }}
            />
            <h1>FAQ</h1>
            <div className="questions-faq">
                <div className="boxy">beans</div>
                <p>cool beans</p>
                <div className="boxy">beans</div>
                <p>cool beans</p>
                <div className="boxy">beans</div>
                <p>cool beans</p>
                <div className="boxy">Why the obsession with beans</div>
                <p>not cool beans</p>
                <div className="boxy">less beans</div>
                <p>no more beans</p>
                <div className="boxy">sushi</div>
                <p>sushi better</p>
                <div className="boxy">wing stop</div>
                <p>wing stops fire</p>
                <div className="boxy">49ers lost</div>
                <p>49ers lost sad</p>
                <div className="boxy">panda</div>
                <p>panda good</p>
                <div className="boxy">back to beans</div>
                <p>back to beans</p>
                <div className="some-interesting-text">
                    More questions? Reach out to us at fullyhacks@gmail.com and we'll get back to you ASAP!
                </div>
            </div>
        </div>
    );
};

export default FAQ;