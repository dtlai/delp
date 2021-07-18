import React from "react";

import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      body: "",
      rating: 1,
      author_id: this.props.user_id,
      business_id: this.props.business.id,
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
      .processForm(review, this.props.business.business_id)
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
