import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import Business from './business'
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions'