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
          {reviews.map((review, i) => (
            <div className="reviews-container" key={i}>
              <div className="review-box">
                <div className="review-username">
                  {review.user.first_name}&nbsp;{review.user.last_name}
                </div>
                <div className="review-message">{review.message}</div>
                <div className="review-message">{review.created_at.substring(0,10)}</div>
                <div className="review-rating">{review.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ReviewsIndex;
