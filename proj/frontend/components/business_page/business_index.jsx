import React from 'react'
import { Link } from 'react-router-dom'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }



    render() {
        return (
            <>

            </>
        )
    }
}

export default BusinessIndex;
