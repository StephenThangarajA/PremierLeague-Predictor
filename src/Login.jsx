import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import google from './assets/google.png';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleSignupForm = () => {
        setShowSignup(!showSignup);
    };

    const homepage = () => {
        navigate('/');
    };

    return (
        <section className={`container forms ${showSignup ? 'show-signup' : ''}`}>

            {/* Login */}
            <div className={`form login ${showSignup ? 'hide' : ''}`}>
                <div className="form-content">
                    <div className="top">
                        <p href="#">Predictor</p>
                    </div>
                    <div className="bottom">
                        <p className="wel">Welcome Back!!</p>
                    </div><br />
                    <header>Login</header>
                    <form action="homepage.html">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input" />
                        </div>
                        <div className="field input-field">
                            <input type={showPassword ? "text" : "password"} placeholder="Password" className="password" />
                            <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} eye-icon`} onClick={togglePasswordVisibility}></i>
                        </div>
                        <div className="form-link">
                            <a href="#" className="forgot-pass">Forgot password?</a>
                        </div>
                        <div className="field button-field">
                            <button onClick={homepage}>Login</button>
                        </div>
                    </form>
                    <div className="form-link">
                        <span>Don't have an account? <a href="#" className="link" onClick={toggleSignupForm}>Signup</a></span>
                    </div>
                </div>
                <div className="line"></div>
                <div className="media-options">
                    <a className="field google" onClick={homepage}>
                        <img src={google} alt="Google Logo" className="google-img" />
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>

            {/* Signup */}
            <div className={`form signup ${showSignup ? '' : 'hide'}`}>
                <div className="form-content">
                    <div className="top">
                        <p href="#">Predictor</p>
                    </div>
                    <div className="bottom">
                        <p className="wel">Welcome to Predictor</p>
                    </div><br />
                    <header>Signup</header>
                    <form action="loginpage.html">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input" />
                        </div>
                        <div className="field input-field">
                            <input type={showPassword ? "text" : "password"} placeholder="Create password" className="password" />
                            <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} eye-icon`} onClick={togglePasswordVisibility}></i>
                        </div>
                        <div className="field input-field">
                            <input type={showPassword ? "text" : "password"} placeholder="Confirm password" className="password" />
                            <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} eye-icon`} onClick={togglePasswordVisibility}></i>
                        </div>
                        <div className="field button-field">
                            <button onClick={homepage}>Signup</button>
                        </div>
                    </form>
                    <div className="form-link">
                        <span>Already have an account? <a href="#" className="link" onClick={toggleSignupForm}>Login</a></span>
                    </div>
                </div>
                <div className="media-options">
                    <a href="loginpage.html" className="field google" onClick={homepage}>
                        <img src={google} alt="Google Logo" className="google-img" />
                        <span>Signup with Google</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Login;