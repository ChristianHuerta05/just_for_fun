import React, { useState } from 'react';
import './styles/Team.css';
import background from './assets/teams-background.svg';
import directors from './assets/teams/directors.svg';
import marketing from './assets/teams/marketing-team.svg';
import design from './assets/teams/design-team.svg';
import web from './assets/teams/web-team.svg';
import operations from './assets/teams/operations-team.svg';
import leftarrow from './assets/teams/AngleLeftIcon.svg';
import rightarrow from './assets/teams/AngleRightIcon.svg';

const Team = () => {
    const teams = [
        { title: "Directors", image: directors },
        { title: "Marketing Team", image: marketing },
        { title: "Design Team", image: design },
        { title: "Web Team", image: web },
        { title: "Operations Team", image: operations },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    const handleNext = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
            setFadeClass('fade-in');
        }, 300);
    };

    const handlePrevious = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + teams.length) % teams.length);
            setFadeClass('fade-in');
        }, 300); 
    };

    return (
        <div className='team-main-container'>
            <img src={background} alt="background" className='background-teams' />
            <div className='container-for-stuff-i-ran-out-of-names'>
                <div className='not-arrow'>
                    <div className='teams-section'>
                        <p className='team-title'>OUR TEAMS</p>
                        <p className={`${fadeClass} team-title`}>{teams[currentIndex].title}</p>
                        <div className='middle-section-teams'>
                            <img
                                src={leftarrow}
                                alt="left arrow"
                                className='is-arrow'
                                onClick={handlePrevious}
                            />
                            <img
                                src={teams[currentIndex].image}
                                alt={teams[currentIndex].title}
                                className={`team-image ${fadeClass}`}
                            />
                            <img
                                src={rightarrow}
                                alt="right arrow"
                                className='is-arrow'
                                onClick={handleNext}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;