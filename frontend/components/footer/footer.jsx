import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer-titles">
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Get Started</h3>
      </div>
      <div className="footer-links">
        <div className="about-container">
          <a
            href="https://www.linkedin.com/in/davidlai9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/davidlai9/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davidlai9/"
            target="_blank"
            rel="noreferrer"
          >
            AngelList
          </a>
        </div>

        <div className="projects-container">
          <a href="http://www.davidtlai.com/" target="_blank" rel="noreferrer">
            Portfolio
          </a>
          <a
            href="https://ridealong-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            RideAlong
          </a>
          <a
            href="https://dtlai.github.io/stocktok/"
            target="_blank"
            rel="noreferrer"
          >
            StockTok
          </a>
        </div>

        <div className="get-started-container">
          <Link className="get-started-link" to="/login">
            Login
          </Link>
          <Link className="get-started-link" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="footer-img">
        <img
          src="https://s3-media0.fl.yelpcdn.com/assets/public/footer_cityscape.yji-573fa19c843556eac5a998fc6d1f80f8.png"
          alt="none"
        />
      </div>
      <div className="copyright-container">
        <p>Copyright &copy; 2021 Delp Inc.</p>
      </div>
    </div>
  </>
);

export default Footer;
