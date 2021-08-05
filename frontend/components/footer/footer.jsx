import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer-links">
        <div className="links-container">
          <h3>About</h3>
          <a
            href="https://www.linkedin.com/in/davidlai9/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LinkedIn</p>
          </a>
          <a
            href="https://www.linkedin.com/in/davidlai9/"
            target="_blank"
            rel="noreferrer"
          >
            <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/davidlai9/"
            target="_blank"
            rel="noreferrer"
          >
            <p>AngelList</p>
          </a>
        </div>

        <div className="links-container">
          <h3>Projects</h3>

          <a href="http://www.davidtlai.com/" target="_blank" rel="noreferrer">
            <p>Portfolio</p>
          </a>
          <a
            href="https://ridealong-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p>RideAlong</p>
          </a>
          <a
            href="https://dtlai.github.io/stocktok/"
            target="_blank"
            rel="noreferrer"
          >
            <p>StockTok</p>
          </a>
        </div>

        <div className="links-container">
          <h3>Get Started</h3>

          <Link className="get-started-link" to="/login">
            <p>Login</p>
          </Link>
          <Link className="get-started-link" to="/signup">
            <p>Sign Up</p>
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
