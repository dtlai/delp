import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
            </style>
            <Link to="/login" className="login-greeting">Login</Link>
            <Link to="/signup" className="signup-greeting">Sign up</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
            </style>
            <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
