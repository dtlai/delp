import React from 'react'
// import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
        this.type = (this.props.formType === 'home') ? 'home' : 'other';
        this.find = (this.props.formType === 'home') ? 'Find' : '';
        this.near = (this.props.formType === 'home') ? 'Near' : '';
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
        console.log(this.props)
        this.props
          .searchBusinesses(this.state.query)
          .then(() => this.props.history.push(`/businesses?query=${this.state.query}`));
        
    }

    render () {
        return (
            <>
                <div className="search-form-container">
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <label className={`search-container-${this.type}`}>
                            {this.find}
                            <input className={`search-content-${this.type}`} type="text" value={this.state.query} placeholder="Find a restaurant" onChange={this.handleChange('query')} />
                        </label>
                        <input className="search-form-submit" type="submit" value="Search" />
                    </form>
                </div>
            </>
        )
    }

}

export default SearchBar;