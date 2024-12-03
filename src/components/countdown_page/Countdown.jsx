import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Countdown.css';

const Countdown = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const targetDate = new Date('February 24, 2025 00:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());
    const [showCountdown, setShowCountdown] = useState(true);
    const [isVideoReady, setIsVideoReady] = useState(true); 
    const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

    useEffect(() => {
        let interval;

        const updateTime = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setShowCountdown(false);
                setShouldPlayVideo(true);

            }

            setTimeRemaining(distance);
        };


        interval = setInterval(updateTime, 100);

        return () => {
            clearInterval(interval);

        };
    }, [targetDate]);

    useEffect(() => {
        if (shouldPlayVideo && videoRef.current) {

            videoRef.current.play().catch((error) => {
                console.error('Error playing video:', error);
            });
        }
    }, [shouldPlayVideo]);

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
        <div className="countdown-container">
            <video
                ref={videoRef}
                className="background-video"
                src="/small.mp4"
                type="video/mp4"
                muted
                loop={false}
                playsInline
                preload="auto" 
                onCanPlay={() => {
                    setIsVideoReady(true); 

                }}
                onEnded={() => {

                    navigate('/landing');
                }}
                onError={(error) => {
                    console.error('Video failed to load:', error);
                }}
            />
            {isVideoReady && showCountdown && (
                <div className="countdown-overlay">
                    <h1 className="countdown-timer">{formatTime(timeRemaining)}</h1>
                    <button
                        className="skip-button"
                        onClick={() => {

                            setShowCountdown(false);
                            setShouldPlayVideo(true);
                        }}
                    >
                        Skip Countdown
                    </button>
                </div>
            )}
        </div>
    );
};

export default Countdown;
