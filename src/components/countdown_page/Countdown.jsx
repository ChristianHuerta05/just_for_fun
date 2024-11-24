import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Countdown.css';
import objects from './assets/objects.svg';

const Countdown = () => {
    const navigate = useNavigate();
    const targetDate = new Date('February 24, 2025 00:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());
    const [isSkipping, setIsSkipping] = useState(false);


    useEffect(() => {
        let interval;

        if (isSkipping) {
            interval = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 0) {
                        clearInterval(interval);
                        navigate('/landing'); 
                        return 0;
                    }
                    return prev - 50000000;
                });
            }, 10); 
        } else {
            interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance <= 0) {
                    clearInterval(interval);
                    navigate('/landing'); 
                }

                setTimeRemaining(distance);
            }, 10);
        }

        return () => clearInterval(interval);
    }, [isSkipping, navigate, targetDate]);


    const formatTime = (time) => {
        const milliseconds = Math.floor((time % 1000) / 10);
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return `${days.toString().padStart(2, '0')}:${hours
            .toString()
            .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='countdown-container'>
            <img src={objects} alt="objects" className="objects" />
            <div className="countdown-content">
                <h1 className='title-countdown'>TIME UNTIL LIFTOFF</h1>
                <h1 className="countdown-timer">{formatTime(timeRemaining)}</h1>
                <button className="skip-button" onClick={() => setIsSkipping(true)}>
                    Skip Countdown
                </button>
            </div>
        </div>
    );
};

export default Countdown;
