import React from "react";

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false,
      dropDown: false,
    };
    this.toggleDrop = this.toggleDrop.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.business.id).then(() => {
      this.setState({ hasFetched: true });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.props.fetchReviews(this.props.business.id);
    }
  }

  shouldComponentUpdate() {
    if (this.state.hasFetched) {
      return false;
    }
    return true;
  }

  toggleDrop() {
    this.setState((prevState) => ({ dropDown: !prevState.dropDown }));
  }

  render() {
    if (!this.state.hasFetched) return null;
    let { reviews } = this.props;
    return (
      <>
        <div className="review-page-container">
          {reviews.map((review, i) => {
            return (
            <div className="review-message" key={i}>{review.message}</div>
            // <div className="review-username" key={i}>{review.author.first_name}</div>
            // <div className="review-date" key={i}>{date}</div>
          )})}
        </div>
      </>
    );
  }
}

export default ReviewsIndex;
