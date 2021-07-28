import React from 'react'
// import {withRouter} from 'react-router-dom';
import { GiMagnifyingGlass } from "react-icons/gi";


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
                <label className={`search-container1-${this.type}`}>
                  {this.find}
                  <input
                    className={`search-content1-${this.type}`}
                    type="text"
                    value={this.state.query}
                    placeholder="restaurants, businesses..."
                    onChange={this.handleChange("query")}
                  />
                </label>
                <label className={`search-container2-${this.type}`}>
                  {this.near}
                  <input
                    className={`search-content2-${this.type}`}
                    type="text"
                    placeholder="Los Angeles, CA 90012"
                  />
                </label>
                <button className={`search-button-${this.type}`}>
                  <GiMagnifyingGlass className="search-icon" size={30} color="white" />
                </button>
              </form>
            </div>
          </>
        );
    }

}

export default SearchBar;