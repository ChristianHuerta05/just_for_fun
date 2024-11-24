import './styles/Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <ul className='navigation-items'>
                <li><a href="#about">About</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a >Log In</a></li>
            </ul>
        </div>
    );
}

export default Header;
