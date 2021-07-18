import React from "react";

import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      body: "",
      rating: 1,
      authorId: this.props.userId,
      businessId: this.props.business.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.business.id);
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

  handleBody(e) {
    this.setState({ body: e.target.value });
  }

  handleRating(e) {
    this.setState({ rating: e.target.value });
  }

  hoverRating(value) {
    this.setState({ rating: value });
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
    if (!this.props.business) return null;
    return (
      <>
        <div className="review-form-container">
          <h3>{this.props.business.name}</h3>
          <div className="review-form">
            <form onSubmit={this.handleSubmit} className="review-form-box">
              <div className="review-content-container">
                <label>
                  Not Good
                  <input
                    name="rating"
                    type="radio"
                    // checked={this.state.rating === 1}
                    onChange={this.handleRating}
                    value="1"
                  />
                </label>
                <label>
                  Could've been better
                  <input
                    name="rating"
                    type="radio"
                    // checked={this.state.rating === 2}
                    onChange={this.handleRating}
                    value="2"
                  />
                </label>
                <label>
                  OK
                  <input
                    name="rating"
                    type="radio"
                    // checked={this.state.rating === 3}
                    onChange={this.handleRating}
                    value="3"
                  />
                </label>
                <label>
                  Good
                  <input
                    name="rating"
                    type="radio"
                    // checked={this.state.rating === 4}
                    onChange={this.handleRating}
                    value="4"
                  />
                </label>
                <label>
                  Great
                  <input
                    name="rating"
                    type="radio"
                    // checked={this.state.rating === 5}
                    onChange={this.handleRating}
                    value="5"
                  />
                </label>
              </div>
              <div>
                  <input type="text-area" className="review-message-body" onChange={this.handleBody} value={this.state.body} placeholder="Please write a message"/>
              </div>
              <div>
                  <button className="review-submit-button">Post Review</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ReviewForm);
