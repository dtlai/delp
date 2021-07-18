import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions';
import ReviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    currentUser: state.entities.users[state.session.id],
    userId: state.session.id,
    errors: state.errors.review,
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    createReview: (review, businessId) => dispatch(createReview(review, businessId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
