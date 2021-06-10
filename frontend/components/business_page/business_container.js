import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import Business from './business'
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions'
// import { searchBusinesses } from '../../util/business_api_util';

const mSTP = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId],
        categoryId: ownProps.match.params.categoryId,
        formType: 'other_pages',
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        logout: () => dispatch(logout()),
        // searchBusinesses: search => dispatch(searchBusinesses(search))
    }
}

export default withRouter(connect(mSTP, mDTP)(Business))
