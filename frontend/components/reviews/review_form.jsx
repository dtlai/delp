import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../footer/footer";
import NavBarContainer from '../navbar/navbar_container'
import { Link } from "react-router-dom";
import SearchBarContainer from '../search_form/search_form_container'
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      message: "",
      rating: 1,
      user_id : this.props.userId,
      business_id: this.props.business.id,
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.business.id)
        .then(() => this.setState({
            loading: false,
        }))
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props
      .createReview(review, this.props.business.id)
      .then(() =>
        this.props.history.push(`/businesses/${this.props.business.id}`)
      );
  }

  handleMessage(e) {
    this.setState({ message: e.target.value });
  }

  handleRating(e) {
    this.setState({ rating: e.target.value });
  }

  renderErrors() {
    let error;
    if (this.props.errors.length !== 0) {
      error = this.props.errors[0];
      if (error.includes("Message")) {
        error = "Please explain your review";
      } else {
        error =
          "Please select a rating for this business.";
      }
    }
    return (
        <p className="review-form-error">{error}</p>
    )
  }

  render() {
    if (!this.props.business || this.state.loading) return null;
    return (
      <>
        <div className="review-form-container">
          <div className="nav-header-container">
            <div className="nav-header">
              <Link to="/" className="logo-link">
                <img src="https://i.imgur.com/JrsNpWu.png" />
              </Link>
              <SearchBarContainer formType={this.props.formType} />
              <div className="navbar-links">
                <a
                  href="https://www.linkedin.com/in/davidlai9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="about-icon" size={30} color="black" />
                </a>
                <a
                  href="https://github.com/dtlai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="about-icon" size={30} color="black" />
                </a>
                <a
                  href="https://angel.co/u/davidtlai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaAngellist className="about-icon" size={30} color="black" />
                </a>
              </div>
              <div className="nav-user-header">
                <NavBarContainer formType={this.props.formType} />
              </div>
            </div>
          </div>
          <div className="form-container">
            <h3>{this.props.business.name}</h3>
            <div className="review-form">
              <form onSubmit={this.handleSubmit} className="review-form-box">
                <div className="review-content-container">
                  <label>
                    Not Good
                    <input
                      name="rating"
                      type="radio"
                      onChange={this.handleRating}
                      value="1"
                    />
                  </label>
                  <label>
                    Could've been better
                    <input
                      name="rating"
                      type="radio"
                      onChange={this.handleRating}
                      value="2"
                    />
                  </label>
                  <label>
                    OK
                    <input
                      name="rating"
                      type="radio"
                      onChange={this.handleRating}
                      value="3"
                    />
                  </label>
                  <label>
                    Good
                    <input
                      name="rating"
                      type="radio"
                      onChange={this.handleRating}
                      value="4"
                    />
                  </label>
                  <label>
                    Great
                    <input
                      name="rating"
                      type="radio"
                      onChange={this.handleRating}
                      value="5"
                    />
                  </label>
                </div>
                <div>
                  <textarea
                    // type="text-area"
                    className="review-message-message"
                    onChange={this.handleMessage}
                    value={this.state.message}
                    placeholder="Please write a review for this business. Also if you would like, you can also leave a review for this application and let me know what you think of it. I do hope you had a good experience and enjoyed browsing through my Yelp-inspired application. Many thanks."
                  />
                </div>
                {/* <div className="review-submit-button"> */}
                  <button className="submit-button">Post Review</button>
                {/* </div> */}
              </form>
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(ReviewForm);
