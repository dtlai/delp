import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  fetchReviews,
} from "../../actions/review_actions";


class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false
    };
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchReviews(this.props.business.id).then(() => {
      this.setState({ hasFetched: true });
    });
  }

  render() {
    if (!this.state.hasFetched) return null;
    let reviews = this.props.reviews;
    // console.log(reviews)
    return (
      <div className="indiv-review-container">
        <div>{reviews[this.props.idx].message}</div>
      </div>
    );
  }
}

const mapStateToProps = (state = {}, ownProps) => ({
  reviews: Object.values(state.entities.reviews),
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewShow));

