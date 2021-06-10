import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import BusinessesReducer from './businesses_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    businesses: BusinessesReducer,
});

export default EntitiesReducer;
