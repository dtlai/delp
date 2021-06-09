import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
import BusinessContainer from '../business_page/business_container'
import BusinessIndexContainer from '../business_page/business_index_container'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                </style>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="nav-bar">
                            <ul className="header-nav">
                                <li>Write a Review</li>&nbsp; &nbsp; &nbsp;
                                <li>Events</li>&nbsp; &nbsp; &nbsp;
                                <li>Talk</li>
                                
                            </ul>
                            <div className="greetings">
                                <GreetingContainer />
                            </div>
                        </div>
                        <div className="hero-inner">
                            <div className="home-logo-wrapper">
                                <img className="home-logo" src="https://i.imgur.com/JrsNpWu.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/businesses" className="home-business-link">Businesses</Link>

                </div>
            </div>
        );
    }
}

export default Homepage;
