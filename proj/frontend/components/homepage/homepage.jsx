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
                <div className="home-logo">
                    <img src="https://i.imgur.com/JrsNpWu.png" />
                </div>
                <div className="home-background">
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/fa8d73b85ad8/assets/img/home/hero_photos/J4bBEXXBIHmYLl50X1l72g.jpg"/>
                </div>
                <GreetingContainer />
            </div>
        );
    }
}

export default Homepage;
