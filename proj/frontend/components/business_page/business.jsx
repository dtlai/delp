import React from 'react'

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
            <>
                <div className="indiv-biz">
                    {this.props.business.photoUrls.map((photoUrl, i) => (
                        <img className="biz-pics" key={i} src={photoUrl} alt="" />
                    ))}
                </div>
            </>
        )
    }
}

export default Business;
