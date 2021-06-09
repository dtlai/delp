import React from 'react'
import { Link } from 'react-router-dom'


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
            <>
                <div className="list-of-bizs">
                    {this.props.businesses.map((business) => {
                        // console.log(business.name)
                        return business.name 
                    })}
                </div>
            </>
        )
    }
}

export default BusinessIndex;
