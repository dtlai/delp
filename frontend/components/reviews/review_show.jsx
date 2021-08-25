import React from "react";
class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.business.reviews;
    let max = reviews.length - 1;
    let random = Math.floor(Math.random() * max);
    let idx = this.props.idx;

    if (idx > max) {
      idx = random;
    }

    return (
      <div className="indiv-review-container">
        <div className="card-review">"{reviews[idx].message}"</div>
      </div>
    );
  }
}

export default ReviewShow;

