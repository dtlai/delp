import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login" className="login-greeting">Login</Link>
            <Link to="/signup" className="signup-greeting">Sign up</Link>
        </nav>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, &nbsp; {currentUser.first_name}!</h2>
        <button className="header-button" onClick={logout}>
          Log Out
        </button>
      </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
