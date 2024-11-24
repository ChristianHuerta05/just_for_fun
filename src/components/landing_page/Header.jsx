import './styles/Header.css';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div className='header-container'>
            <ul className='navigation-items'>
                <li><a href="#about">About</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to="/login">Log In</Link></li> 
            </ul>
        </div>
    );
}

export default Header;
