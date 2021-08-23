import React from "react";
import { Link } from "react-router-dom";
import ReviewShow from '../reviews/review_show';
// import { FiMessageSquare } from 'react-icons/fi';
class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let avgStar = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background:
          'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -360px",
      };

      let sumRating = 0;
      let avgRating = 0;
      let numReviews = this.props.business.reviews.length;

      for (let i = 0; i < numReviews; i++) {
        sumRating += this.props.business.reviews[i].rating;
      }

      avgRating = (sumRating / numReviews).toFixed(2);


      if (avgRating >= 1 && avgRating < 1.5) {
        avgStar["backgroundPosition"] = "0 -360px";
      } else if (avgRating >= 1.5 && avgRating < 2) {
        avgStar["backgroundPosition"] = "0 -340px";
      } else if (avgRating >= 2 && avgRating < 2.5) {
        avgStar["backgroundPosition"] = "0 -400px";
      } else if (avgRating >= 2.5 && avgRating < 3) {
        avgStar["backgroundPosition"] = "0 -380px";
      } else if (avgRating >= 3 && avgRating < 3.5) {
        avgStar["backgroundPosition"] = "0 -440px";
      } else if (avgRating >= 3.5 && avgRating < 4) {
        avgStar["backgroundPosition"] = "0 -420px";
      } else if (avgRating >= 4 && avgRating < 4.5) {
        avgStar["backgroundPosition"] = "0 -480px";
      } else if (avgRating >= 4.5 && avgRating < 5) {
        avgStar["backgroundPosition"] = "0 -460px";
      } else if (avgRating === 5) {
        avgStar["backgroundPosition"] = "0 -500px";
      }

      let avgStars = <div style={avgStar}></div>;
      let business = this.props.business;
      let i = this.props.i;
      let idx = i + 1;

      return (
        <Link
          to={`/businesses/${business.id}`}
          key={i}
          className="biz-card-link"
        >
          <div className="biz-card-container">
            <div className="card-pic-container">
              <img src={business.photoUrls[0]} alt="cardpic" />
            </div>
            <div className="card-info-container">
              <h1>
                {idx}.&nbsp;{business.name}
              </h1>
              <h2>{avgStars}</h2>
              <div className="biz-card-info">
                <div className="card-categories-container">
                  {business.categories.map((category, i) => {
                    return (
                      <div className="card-category" key={i}>
                        {category.category}
                      </div>
                    );
                  })}
                </div>
                <div>{business.price_range}</div>
              </div>
              <div className="biz-card-review">
                {/* <FiMessageSquare className="biz-review-icon" size={10}/> */}
                <ReviewShow idx={i} business={business} />
              </div>
            </div>
          </div>
        </Link>
      );
  }

}

export default BusinessCard;