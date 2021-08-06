import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container'
import SearchBarContainer from '../search_form/search_form_container'
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import Categories from '../categories/categories';
import Footer from '../footer/footer';
import OtherProj from '../other_proj/other_proj';

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
                    <div className="contact-links">
                      <a
                        href="mailto:davidlai9@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Write an Email
                      </a>
                    </div>
                    <div className="contact-links">
                      <a
                        href="https://drive.google.com/file/d/1-A2tkofYsHarCbIIde8SU9T5rwFg7tNe/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </div>
                    <div className="contact-links">
                      <a
                        href="https://davidtlai.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Portfolio
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
                        <FaLinkedin
                          className="about-icon"
                          size={20}
                          color="white"
                        />
                        <p>LinkedIn</p>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/davidlai9/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub
                          className="about-icon"
                          size={20}
                          color="white"
                        />
                        <p>GitHub</p>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/davidlai9/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaAngellist
                          className="about-icon"
                          size={20}
                          color="white"
                        />
                        <p>AngelList</p>
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
            <Categories />
            <OtherProj />
            <Footer />
          </>
        );
    }
}

export default Homepage;
