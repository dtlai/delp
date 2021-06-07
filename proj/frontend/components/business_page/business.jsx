import React from 'react'

class Business extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFetched: false
        }
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
        if (!this.props.business) {
            return <div>Loading...</div>;
        }
        return (
            <>
                <div className="indiv-biz">
                    {this.props.business.name}
                </div>
            </>
        )
    }
}

export default Business;
