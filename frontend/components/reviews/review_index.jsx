import React from "react";
import { BsThreeDots } from "react-icons/bs";

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
        <div className="reviews-wrapper">
          {reviews.map((review) => {
            let date = review.created_at.slice(0, 10);
            let styleStars = {
              width: "108px",
              height: "4px",
              display: "inlineBlock",
              verticalAlign: "middle",
              background:
                'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
              backgroundPosition: "0 -500px",
            };
            if (review.rating === 5) {
              styleStars = {
                width: "108px",
                height: "4px",
                display: "inlineBlock",
                verticalAlign: "middle",
                background:
                  'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
                backgroundPosition: "0 -500px",
              };
            } else if (review.rating === 4) {
              styleStars = {
                width: "108px",
                height: "4px",
                display: "inlineBlock",
                verticalAlign: "middle",
                background:
                  'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
                backgroundPosition: "0 -480px",
              };
            } else if (review.rating === 3) {
              styleStars = {
                width: "108px",
                height: "4px",
                display: "inlineBlock",
                verticalAlign: "middle",
                background:
                  'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
                backgroundPosition: "0 -440px",
              };
            } else if (review.rating === 2) {
              styleStars = {
                width: "108px",
                height: "4px",
                display: "inlineBlock",
                verticalAlign: "middle",
                background:
                  'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
                backgroundPosition: "0 -400px",
              };
            } else if (review.rating === 1) {
              styleStars = {
                width: "108px",
                height: "4px",
                display: "inlineBlock",
                verticalAlign: "middle",
                background:
                  'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
                backgroundPosition: "0 -360px",
              };
            }
            let stars = <div style={styleStars}></div>;
            return (
              <div className="reviews-container">
                <div className="review-user-info">
                  <div>{review.author.first_name}</div>
                  <div>
                    <button
                      className="update-delete-button"
                      onClick={this.toggleDrop}
                    >
                      <BsThreeDots />
                    </button>
                  </div>
                  {this.state.dropDown ? (
                    <div>
                      <button>Edit review</button>
                      <button>Delete review</button>
                    </div>
                  ) : null}
                </div>
                <div className="rating-container">
                  {stars}
                  <div className="date">{date}</div>
                </div>
                <div className="review-body">{review.body}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ReviewsIndex;
