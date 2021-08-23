import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  fetchReviews,
} from "../../actions/review_actions";


class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.business.reviews;
    return (
      <div className="indiv-review-container">
        <div>{reviews[this.props.idx].message}</div>
      </div>
    );
  }
}

export default ReviewShow;

