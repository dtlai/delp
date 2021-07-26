import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container"
import ReviewFormContainer from '../reviews/review_form_container'
import ReviewIndexContainer from '../reviews/review_index_container'
import {BusinessMap} from "../google_maps/business_map";
import SearchBarContainer from '../search_form/search_form_container'

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

  goCreateReview () {
    this.props.history.push(`${this.props.business.id}/createReview`);
  }

  render() {
    if (!this.props.business) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <div className="businesses-header-container">
          <Link to="/" className="logo-link">
            <img src="https://delp-seeds.s3.us-west-1.amazonaws.com/actual_delp.png" />
          </Link>
          <div className="businesses-user-header">
            <NavBarContainer />
            <SearchBarContainer formtype={this.props.formType} />
          </div>
        </div>
        <div className="business-map">
          <BusinessMap business={this.props.business}/>
        </div>
        <div>
          <ReviewIndexContainer />
        </div>
        <div className="create-review-button">
          <button className="review-button" onClick={() => this.goCreateReview()}>Write a Review
          </button>
        </div>
        <div className="indiv-business-container">
          <div className="business-pics-container">
            {this.props.business.photoUrls.map((photoUrl, i) => (
              <img className={`biz-pic`} key={i} src={photoUrl} alt="" />
            ))}
          </div>
        <div className="biz-name-container">
            <p id="biz-name">{this.props.business.name}</p>
        </div>  
          <ul className="business-info">
            <li id="biz-address">{this.props.business.address}</li>
            <li id="biz-city">{this.props.business.city}</li>
            <li id="biz-state">{this.props.business.state}</li>
            <li id="biz-biz-zipcode">{this.props.business.biz_zipcode}</li>
            <li id="biz-price-range">{this.props.business.price_range}</li>
            <li id="biz-phone-number">{this.props.business.phone_number}</li>
          </ul>
          <Link to="/businesses" className="go-back-to-biz">
            <img src="https://delp-seeds.s3.us-west-1.amazonaws.com/briefcase.png" />
          </Link>
        </div>
      </>
    );
  }
}

export default Business;
