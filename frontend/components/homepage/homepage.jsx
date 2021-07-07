import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container'
import BusinessContainer from '../business_page/business_container'
import BusinessIndexContainer from '../business_page/business_index_container'

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
                  <ul className="header-nav">
                    <li>Write a Review</li>&nbsp; &nbsp; &nbsp;
                    <li>Events</li>&nbsp; &nbsp; &nbsp;
                    <li>Talk</li>
                  </ul>
                  <div className="greetings">
                    <NavBarContainer />
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
