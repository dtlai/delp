
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions';
// import { searchBusinesses } from '../../actions/business_actions';

const mSTP = (state, ownProps) => { 
    return {
        businesses: Object.values(state.entities.businesses),
        formType: 'other_pages',
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        // searchBusinesses: search => dispatch(searchBusinesses(search)),
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        logout: () => dispatch(logout()),
    }
}

export default withRouter(connect(mSTP, mDTP)(BusinessIndex))