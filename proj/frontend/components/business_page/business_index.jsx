import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFetched: false
        }
    }

    componentDidMount() {
        this.props.fetchBusinesses()
            .then(() => { this.setState({ hasFetched: true }) })
    }


    render() {
        // console.log(this.props.businesses)
        if (!this.state.hasFetched) {
            return null;
        }
        return (
            <div>
                <div className="login-header">
                    <Link to="/" className="logo-link">
                        <img src="https://i.imgur.com/JrsNpWu.png" />
                    </Link>
                </div>
                <div className="greetings">
                    <GreetingContainer />
                </div>
                <div className="list-of-bizs">
                    {this.props.businesses.map((business, i) => (
                        <Link to={`/businesses/${business.id}`} key={i}>{business.name}</Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default BusinessIndex;
