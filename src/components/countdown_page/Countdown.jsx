import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Countdown.css';

const Countdown = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const targetDate = new Date('February 24, 2025 00:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());
    const [isSkipping, setIsSkipping] = useState(false);
    const [showCountdown, setShowCountdown] = useState(true);
    const [isVideoReady, setIsVideoReady] = useState(false);
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

        if (isSkipping) {
            interval = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 0) {
                        clearInterval(interval);
                        setShowCountdown(false);
                        setShouldPlayVideo(true);
                        return 0;
                    }
                    return prev - 50000000;
                });
            }, 10);
        } else {
            interval = setInterval(updateTime, 10);
        }

        return () => clearInterval(interval);
    }, [isSkipping, targetDate]);

    useEffect(() => {
        if (shouldPlayVideo && videoRef.current) {
            videoRef.current.play();
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
            {!isVideoReady && (
                <div className="loading-screen">
                    <h1>Loading...</h1>
                </div>
            )}
            <video
                ref={videoRef}
                className="background-video"
                src="/vid8mp.mp4"
                type="video/mp4"
                muted
                loop={false}
                playsInline
                preload="auto"
                onCanPlayThrough={() => {
                    setIsVideoReady(true);
                }}
                onEnded={() => {
                    navigate('/landing');
                }}
            />
            {isVideoReady && showCountdown && (
                <div className="countdown-overlay">
                    <h1 className="countdown-timer">{formatTime(timeRemaining)}</h1>
                    <button className="skip-button" onClick={() => setIsSkipping(true)}>
                        Skip Countdown
                    </button>
                </div>
            )}
        </div>
    );
};

export default Countdown;
