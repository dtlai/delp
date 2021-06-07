import React from 'react'

class Business extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
            .then(() => {this.setState({hasFetched: true})})
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.hasFetched) {
            return false;
        }
        return true;
    }



    render() {
        return (
            <>
                {business.name}
            </>
        )
    }
}

export default Business;
