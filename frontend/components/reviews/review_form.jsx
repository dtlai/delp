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
      .createReview(review, this.props.business.businessId)
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
      debugger;
      error = this.props.errors[0];
      if (error.includes("Message")) {
        error = "Please explain your review";
      } else {
        error =
          "Please select a rating for this business.";
      }
    }
  }

  render() {
    if (!this.props.business) return null;
    return (
      <>
        <p>hello</p>
      </>
    );
  }
}

export default withRouter(ReviewForm);
