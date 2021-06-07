import React from 'react'

class Business extends React.Component {
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

export default Business;
