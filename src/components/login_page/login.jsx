import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import loginBackground from './assets/login.svg';
import arrow from './assets/right.svg';
import github from './assets/github.svg';
import capy from './assets/capy.svg';
import './login.css';

const Login = () => {
    const navigate = useNavigate(); 

    return (
        <div className="login-container">
            <button className="return-button" onClick={() => navigate('/')}>
                Back to Home <img src={arrow} alt="arrow" />
            </button>
            <div className="login-section">
                <img src={capy} alt="capy" className="capy" />
                <h1>WELCOME TO FULLYHACKS!</h1>
                <h2>Let’s sign in and start your application</h2>
                <button className="btn-signin">
                    Sign In with Github <img src={github} alt="github" className="github" />
                </button>
                <p>Note: We use Github to keep track of your submission</p>
            </div>
        </div>
    );
};

export default Login;
