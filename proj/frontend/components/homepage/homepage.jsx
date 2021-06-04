import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GreetingContainer />
            </div>
        );
    }
}

export default Homepage;
