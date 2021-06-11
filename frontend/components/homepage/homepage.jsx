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
              @import
              url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
            </style>
            <div className="hero-container">
              <div className="hero-content">
                <div className="nav-bar">
                  <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                  </style>
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
                    <img
                      className="home-logo"
                      src="https://delp-seeds.s3.us-west-1.amazonaws.com/actual_delp.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-biz-link">
              <Link to="/businesses" className="home-business-link">
                <img src="https://delp-seeds.s3.us-west-1.amazonaws.com/briefcase.png" />
              </Link>
            </div>
          </div>
        );
    }
}

export default Homepage;
