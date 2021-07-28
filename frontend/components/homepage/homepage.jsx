import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container'
import BusinessContainer from '../business_page/business_container'
import BusinessIndexContainer from '../business_page/business_index_container'
import SearchBarContainer from '../search_form/search_form_container'
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <>
            <div className="hero-container">
              <div className="hero-content">
                <div className="nav-bar">
                  <div className="header-nav">
                    <div className="other-proj-links">
                      <a
                        href="mailto:davidlai9@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Write an Email
                      </a>
                    </div>
                    <div className="other-proj-links">
                      <a
                        href="https://ridealong-app.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        RideAlong
                      </a>
                    </div>
                    <div className="other-proj-links">
                      <a
                        href="https://dtlai.github.io/stocktok/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        StockTok
                      </a>
                    </div>
                  </div>
                  <div className="greetings">
                    <NavBarContainer formType={this.props.formType} />
                  </div>
                </div>
                <div className="hero-inner">
                  <div className="home-logo-wrapper">
                    <img
                      className="home-logo"
                      src="https://delp-seeds.s3.us-west-1.amazonaws.com/actual_delp.png"
                    />
                  </div>
                  <div className="search-bar-form">
                    <SearchBarContainer formType={this.props.formType} />
                  </div>
                  <div className="about-me-container">
                    <div className="about-links">
                      <a
                        href="https://www.linkedin.com/in/davidlai9/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="about-us-icon" size={30} color="white"/>
                      </a>
                    </div>
                  </div>
                  <div className="photo-creds">
                    <h3>龍天門</h3>
                    <p>Photo by トモ T.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-biz-link">
              {/* <Link to="/businesses" className="home-business-link">
                <img src="https://delp-seeds.s3.us-west-1.amazonaws.com/briefcase.png" />
              </Link> */}
              Find the Best Restaurants in Town
            </div>
          </>
        );
    }
}

export default Homepage;
