import React from 'react';
import { Link } from 'react-router-dom';
import greeting_container from '../greeting/greeting_container';
import GreetingContainer from '../greeting/greeting_container'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="nav-bar">

                        </div>
                        <GreetingContainer />
                        <div className="hero-inner">
                            <div className="home-logo-wrapper">
                                <img className="home-logo" src="https://i.imgur.com/JrsNpWu.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit sunt itaque id expedita consectetur quidem corrupti nesciunt incidunt soluta dignissimos mollitia ab unde, necessitatibus aut temporibus dolorum nihil officiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit sunt itaque id expedita consectetur quidem corrupti nesciunt incidunt soluta dignissimos mollitia ab unde, necessitatibus aut temporibus dolorum nihil officiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit sunt itaque id expedita consectetur quidem corrupti nesciunt incidunt soluta dignissimos mollitia ab unde, necessitatibus aut temporibus dolorum nihil officiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit sunt itaque id expedita consectetur quidem corrupti nesciunt incidunt soluta dignissimos mollitia ab unde, necessitatibus aut temporibus dolorum nihil officiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit sunt itaque id expedita consectetur quidem corrupti nesciunt incidunt soluta dignissimos mollitia ab unde, necessitatibus aut temporibus dolorum nihil officiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit sunt itaque id expedita consectetur quidem corrupti nesciunt incidunt soluta dignissimos mollitia ab unde, necessitatibus aut temporibus dolorum nihil officiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit sunt itaque id expedita consectetur quidem corrupti nesciunt incidunt soluta dignissimos mollitia ab unde, necessitatibus aut temporibus dolorum nihil officiis.</p>
            </div>
        );
    }
}

export default Homepage;
