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
          <h3>Recommended Reviews</h3>
          {reviews.map((review, i) => {
            let date = new Date(review.created_at)
            let reviewDate =
              date.getMonth() +
              1 +
              "/" +
              date.getDate() +
              "/" +
              date.getFullYear();

            let starRating = {
              width: "176px",
              height: "32px",
              display: "inlineBlock",
              verticalAlign: "middle",
              background:
                'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
              backgroundPosition: "0 0px",
            };

            if (review.rating === 1) {
              starRating["backgroundPosition"] = "0 -64px";
            } else if (review.rating === 2) {
              starRating["backgroundPosition"] = "0 -128px";
            } else if (review.rating === 3) {
              starRating["backgroundPosition"] = "0 -192px";
            } else if (review.rating === 4) {
              starRating["backgroundPosition"] = "0 -256px";
            } else {
              starRating["backgroundPosition"] = "0 -288px";
            }

            let reviewStars = <div style={starRating}></div>;
            
            return (
              <div className="reviews-container" key={i}>
                <div className="review-box">
                  <div className="review-user-pic">
                    <img src="https://i.imgur.com/eHreOGm.jpg" alt="profpic" />
                    <div className="review-username">
                      {review.user.first_name}&nbsp;{review.user.last_name.substring(0,1)}.
                      <div className="review-user-zip">{review.user.zipcode}</div>
                    </div>
                  </div>

                  <div className="review-date">
                    <div className="review-stars">
                      {reviewStars}
                    </div>
                    {reviewDate}
                  </div>
                  <div className="review-message">{review.message}</div>

                  <div className="review-rating">{review.rating}</div>
                </div>
              </div>
            )})}
        </div>
      </>
    );
  }
}

export default ReviewsIndex;
