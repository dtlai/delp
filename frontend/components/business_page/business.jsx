import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import ReviewFormContainer from "../reviews/review_form_container";
import ReviewIndexContainer from "../reviews/review_index_container";
import { BusinessMap } from "../google_maps/business_map";
import SearchBarContainer from "../search_form/search_form_container";
import Footer from "../footer/footer";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import { BsStar } from "react-icons/bs"

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false,
    };
    this.avgStar = 1;
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

    let sumRating = 0;
    let avgRating = 0;
    let numReviews = this.props.business.reviews.length;

    for (let i = 0; i < numReviews; i++) {
      sumRating += this.props.business.reviews[i].rating;
    }

    avgRating = sumRating / numReviews * 1.00;

    if (avgRating === 0) {
      avgRating = 1;
    }

    this.avgStar = avgRating;
    // let businessRating = avgRating;

    // switch (avgRating) {
    //   case (avgRating >= 1) || (avgRating < 1.5):
    //     this.avgStar = this.oneStar;
    //     break;
    //   case (avgRating >= 1.5) || (avgRating < 2):
    //     this.avgStar = this.oneHalfStar;
    //     break;
    //   case (avgRating >= 2) || (avgRating < 2.5):
    //     this.avgStar = this.twoStar;
    //     break;
    //   case (avgRating >= 2.5) || (avgRating < 3):
    //     this.avgStar = this.twoHalfStar;
    //     break;
    //   case (avgRating >= 3) || (avgRating < 3.5):
    //     this.avgStar = this.threeStar;
    //     break;
    //   case (avgRating >= 3.5) || (avgRating < 4):
    //     this.avgStar = this.threeHalfStar;
    //     break;
    //   case (avgRating >= 4) || (avgRating < 4.5):
    //     this.avgStar = this.fourStar;
    //     break;
    //   case (avgRating >= 4.5) || (avgRating < 5):
    //     this.avgStar = this.fourHalfStar;
    //     break;
    //   case (avgRating === 5):
    //     this.avgStar = this.fiveStar;
    //     break;
    
    //   default:
    //     this.avgStar;
    // }

    return (
      <>
        <div className="businesses-container">
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
              {this.props.business.photoUrls.map((photoUrl, i) => (
                <div className="biz-pic-container" key={i}>
                  <img className={`biz-pic`} src={photoUrl} alt="" />
                </div>
              ))}
            </div>
            <div className="biz-reviews-container">
              <div className="biz-stars">{this.avgStar}</div>
              {/* <div className="biz-stars">{avgRating}</div> */}
              <div className="num-reviews">{numReviews}</div>
            </div>
            <div className="biz-categories-container">
              {this.props.business.categories.map((category, i) => (
                <div className="biz-category" key={i}>
                  {category.category}
                </div>
              ))}
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
                {/* <img
                  className="star-pic"
                  src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2@2x.yji-6fb03840141c3117356e128a78ab81e7.png"
                  alt="star"
                /> */}
                Write a Review
              </button>
            </div>
            <div className="biz-name-container">
              <p className="biz-name">{this.props.business.name}</p>
            </div>
            <div className="business-info">
              <p className="biz-address">{this.props.business.address}</p>
              <p className="biz-city">{this.props.business.city}</p>
              <p className="biz-state">{this.props.business.state}</p>
              <p className="biz-biz-zipcode">
                {this.props.business.biz_zipcode}
              </p>
              <p className="biz-price-range">
                {this.props.business.price_range}
              </p>
              <p className="biz-phone-number">
                {this.props.business.phone_number}
              </p>
            </div>
            <Link to="/businesses" className="logo-link">
              <img src="https://delp-seeds.s3.us-west-1.amazonaws.com/briefcase.png" />
            </Link>
          </div>
          <div className="business-map">
            <BusinessMap business={this.props.business} />
          </div>
          <div>
            <ReviewIndexContainer />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Business;
