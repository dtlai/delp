import React from 'react'
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return e => (
            this.setState({
                [field]: e.currentTarget.value
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props
          .searchBusinesses(this.state.query)
          .then(() => this.props.history.push(`/businesses?query=${this.state.query}`));
        
    }

    render () {
        return (
            <>
                <div className="search-form-container">
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.query} placeholder="Find a business" onChange={this.handleChange('query')} />
                        <input className="search-form-submit" type="submit" value="Search" />
                    </form>
                </div>
            </>
        )
    }

}

export default withRouter(SearchBar);