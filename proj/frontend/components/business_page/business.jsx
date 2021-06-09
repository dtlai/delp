import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'

class Business extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFetched: false
        }
    }

    componentDidMount () {
        this.props.fetchBusiness(this.props.match.params.businessId)
            .then(() => {this.setState({hasFetched: true})})
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
            this.props.fetchBusiness(this.props.match.params.businessId)
        }
        window.scrollTo(0, 0)
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.hasFetched) {
            return false;
        }
        return true;
    }



    render() {
        if (!this.props.business) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div className="login-header">
                    <Link to="/" className="logo-link">
                        <img src="https://i.imgur.com/JrsNpWu.png" />
                    </Link>
                </div>
                <div className="business-user-header">
                    <GreetingContainer />
                </div>
                <div className="business-pics-container">
                    {this.props.business.photoUrls.map((photoUrl, i) => (
                        <img className={`biz-pic`} key={i} src={photoUrl} alt="" />
                    ))}
                </div>
                <ul className="business-info">
                    <li id='biz-name'>{this.props.business.name}</li>
                    <li id='biz-address'>{this.props.business.address}</li>
                    <li id='biz-city'>{this.props.business.city}</li>
                    <li id='biz-state'>{this.props.business.state}</li>
                    <li id='biz-biz-zipcode'>{this.props.business.biz_zipcode}</li>
                    <li id='biz-price-range'>{this.props.business.price_range}</li>
                    <li id='biz-phone-number'>{this.props.business.phone_number}</li>
                </ul>
                
            </div>
        )
    }
}

export default Business;
