import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import ReviewFormContainer from "../reviews/review_form_container";
import ReviewIndexContainer from "../reviews/review_index_container";
import { BusinessMap } from "../google_maps/business_map";
import SearchBarContainer from "../search_form/search_form_container";
import Footer from "../footer/footer";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { AiFillCheckCircle } from 'react-icons/ai';

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false,
    };
    
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId).then(() => {
      this.setState({ hasFetched: true });
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.businessId !== this.props.match.params.businessId
    ) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hasFetched) {
      return false;
    }
    return true;
  }

  goCreateReview() {
    this.props.history.push(`${this.props.business.id}/createReview`);
  }

  render() {
    if (!this.props.business) {
      return <div>Loading...</div>;
    }

    let avgStar = {
      width: "176px",
      height: "32px",
      display: "inlineBlock",
      verticalAlign: "middle",
      background:
        'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
      backgroundPosition: "0 -64px",
    };

    let sumRating = 0;
    let avgRating = 0;
    let numReviews = this.props.business.reviews.length;


    for (let i = 0; i < numReviews; i++) {
      sumRating += this.props.business.reviews[i].rating;
    }

    avgRating = (sumRating / numReviews).toFixed(2);


    if (avgRating >= 1 && avgRating < 1.5) {
      avgStar["backgroundPosition"] = "0 -64px";
    } else if (avgRating >= 1.5 && avgRating < 2) {
      avgStar["backgroundPosition"] = "0 -32px";
    } else if (avgRating >= 2 && avgRating < 2.5) {
      avgStar["backgroundPosition"] = "0 -128px";
    } else if (avgRating >= 2.5 && avgRating < 3) {
      avgStar["backgroundPosition"] = "0 -96px";
    } else if (avgRating >= 3 && avgRating < 3.5) {
      avgStar["backgroundPosition"] = "0 -192px";
    } else if (avgRating >= 3.5 && avgRating < 4) {
      avgStar["backgroundPosition"] = "0 -160px";
    } else if (avgRating >= 4 && avgRating < 4.5) {
      avgStar["backgroundPosition"] = "0 -256px";
    } else if (avgRating >= 4.5 && avgRating < 5) {
      avgStar["backgroundPosition"] = "0 -224px";
    } else if (avgRating === 5 ) {
      avgStar["backgroundPosition"] = "0 -288px";
    }
  
    let avgStars = <div style={avgStar}></div>;
    let business = this.props.business;

    return (
      <>
        <div className="indiv-business-page">
          <div className="nav-header-container">
            <div className="nav-header">
              <Link to="/" className="logo-link">
                <img src="https://i.imgur.com/JrsNpWu.png" />
              </Link>
              <SearchBarContainer formType={this.props.formType} />
              <div className="navbar-links">
                <a
                  href="https://www.linkedin.com/in/davidlai9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="about-icon" size={30} color="black" />
                </a>
                <a
                  href="https://github.com/dtlai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="about-icon" size={30} color="black" />
                </a>
                <a
                  href="https://angel.co/u/davidtlai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaAngellist className="about-icon" size={30} color="black" />
                </a>
              </div>
              <div className="nav-user-header">
                <NavBarContainer formType={this.props.formType} />
              </div>
            </div>
          </div>
          <div className="indiv-business-container">
            <div className="business-pics-container">
              {business.photoUrls.map((photoUrl, i) => (
                <div className="biz-pic-container" key={i}>
                  <img className={`biz-pic`} src={photoUrl} alt="" />
                </div>
              ))}
            </div>
            <div className="biz-reviews-container">
              <div className="biz-stars">{avgStars}</div>
              <div className="num-reviews">
                {numReviews}
                <p>Reviews</p>
              </div>
            </div>
            <div className="biz-categories-container">
              {business.categories.map((category, i) => {
                if (i !== business.categories.length - 1) {
                  return (
                    <div className="biz-category" key={i}>
                      {category.category},{" "}
                    </div>
                  );
                } else {
                  return (
                    <div className="biz-category" key={i}>
                      {category.category}{" "}
                    </div>
                  );
                }
              })}
            </div>
            <div className="biz-costs">
              <AiFillCheckCircle className="claimed" />
              <h3 className="claimed">Claimed</h3>
              <p>&#8226;</p>
              {business.price_range}
              <p>&#8226;</p>
            </div>
            <div className="biz-hours">
              <h3>Open</h3>
              <p>8:00 AM - 9:00 PM</p>
            </div>

            <div className="create-review-button">
              <button
                className="review-button"
                onClick={() => this.goCreateReview()}
              >
                <div className="star-pic">
                  <BsStar />
                </div>
                Write a Review
              </button>
            </div>
            <div className="biz-name-container">
              <p className="biz-name">{business.name}</p>
            </div>

            <div className="biz-page-container">
              <div className="biz-sidebar">
                <div className="business-info">
                  <div className="order-food-box">
                    <h1>Order Food</h1>
                    <div className="delivery-address-container">
                      <div className="delivery-address">
                        <h1>Delivery Address:</h1>
                        <p>140 New Montgomery, San Francisco, CA 94105</p>
                      </div>
                    </div>
                    <div className="start-email-button">
                      <a
                        href="mailto:davidlai9@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Start Email
                      </a>
                    </div>
                  </div>
                  <div className="num-directions-box">
                    <p className="biz-phone-number">{business.phone_number}</p>
                    <div className="border-line"></div>
                    <h2>Get Directions</h2>
                    <p className="biz-address">
                      {business.address}&nbsp;
                      {business.city}&nbsp;
                      {business.state}&nbsp;
                      {business.biz_zipcode}
                    </p>
                  </div>
                </div>
              </div>
              <div className="biz-line"></div>
              <div className="business-map">
                <h2>Location & Directions</h2>
                <BusinessMap business={business} />
                <div className="location-info">
                  <h3>{business.address}&nbsp;</h3>
                  <p>{business.city}&nbsp;</p>
                  <p>{business.state}&nbsp;</p>
                  <p>{business.biz_zipcode}</p>
                </div>
              </div>
              <div className="biz-line"></div>
              <div className="business-reviews">
                <ReviewIndexContainer />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Business;
