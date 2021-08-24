import React from "react";
class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.business.reviews;
    return (
      <div className="indiv-review-container">
        <div>"{reviews[this.props.idx].message}"</div>
      </div>
    );
  }
}

export default ReviewShow;

