import './styles/About.css';
import cappy from './assets/cappy.svg';
import moon from './assets/about-assets.svg';
import alien from './assets/alien.svg';

const About = () => {
    return (
        <div className="about-container">
            <div className="moon-wrapper">
                <div className='moon-text-container'>
                <h1>About</h1>
                <div className='paragraph-moon-bucket'>
                <p>We are Cal State University Fullerton's (CSUF) student-run hackathon. 
                We plan to host 600 students for a 24-hour coding event in April 2025.</p>
                <br></br>
                <p>Our goal is to bring together students interested in building impactful, innovative projects, with the bonus opportunity to network with industry
                professionals and win prizes!</p>
                </div>
                </div>
                <img src={moon} alt="moon" className="moon-image" />
            </div>
        </div>
    );
};

export default About;