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
      backgroundPosition: "0 0px",
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
              <div className="biz-stars">{avgStars}</div>
              <div className="num-reviews">
                {numReviews}
                <p>Reviews</p>
              </div>
            </div>
            <div className="biz-categories-container">
              {this.props.business.categories.map((category, i) => {
                if (i !== this.props.business.categories.length - 1) {
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
