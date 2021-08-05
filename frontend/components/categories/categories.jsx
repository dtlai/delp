import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchBusinesses } from "../../actions/business_actions";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        this.props.searchBusinesses(type).then(() => this.props.history.push(`/businesses?query=${type}`))
    }

    render () {
        return (
          <>
            <div className="categories-page-container">
              <h1 className="biz-card-title">
                Find the Best Restaurants in Town
              </h1>
              <div className="card-container">
                <div className="categories-card-container">
                  <div
                    className="categories-card"
                    onClick={() => this.handleClick("American")}
                  >
                    <div className="card-content">
                      <p>American</p>
                    </div>
                  </div>
                </div>
                <div className="categories-card-container">
                  <div
                    className="categories-card"
                    onClick={() => this.handleClick("Mexican")}
                  >
                    <div className="card-content">
                      <p>Mexican</p>
                    </div>
                  </div>
                </div>
                <div className="categories-card-container">
                  <div
                    className="categories-card"
                    onClick={() => this.handleClick("Vietnamese")}
                  >
                    <div className="card-content">
                      <p>Vietnamese</p>
                    </div>
                  </div>
                </div>
                <div className="categories-card-container">
                  <div
                    className="categories-card"
                    onClick={() => this.handleClick("Japanese")}
                  >
                    <div className="card-content">
                      <p>Japanese</p>
                    </div>
                  </div>
                </div>
                <div className="categories-card-container">
                  <div
                    className="categories-card"
                    onClick={() => this.handleClick("Korean")}
                  >
                    <div className="card-content">
                      <p>Korean</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}

const msp = (state, ownProps) => ({});

const mdp = (dispatch) => ({
  searchBusinesses: (search) => dispatch(searchBusinesses(search)),
});

export default withRouter(connect(msp, mdp)(Categories));
