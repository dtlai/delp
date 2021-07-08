import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import HomepageContainer from './homepage/homepage_container'
import BusinessIndexContainer from './business_page/business_index_container'
import BusinessContainer from './business_page/business_container'
// import SearchContainer from './search/search_container';
// took out routes
import { AuthRoute, DefaultRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/businesses" component={BusinessIndexContainer}/>
            <Route exact path="/businesses/:businessId" component={BusinessContainer}/>
            <Route exact path="/" component={HomepageContainer} />
            <DefaultRoute path="*" />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
            <Route path="/benches/:benchId" component={BenchShowContainer} />
            <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
    </div>
);

export default App;
