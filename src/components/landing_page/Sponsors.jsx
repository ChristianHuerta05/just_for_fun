import './styles/Sponsors.css';
import spaceship from './assets/sponsor-assets.svg'
const Sponsors = () => {
    return (
        <div className='sponsors-container'>
            <img src={spaceship} alt="spaceship-with-sponsor-info" className="spaceship" />

        </div>
    );
}

export default Sponsors;