// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Root from './components/root';
import configureStore from './store/store';
import {fetchBusinesses} from './actions/business_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;


    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        // delete window.currentUser;
    } else {
        store = configureStore();
    }

    // testing start 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBusinesses = fetchBusinesses;
    // testing end 

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
