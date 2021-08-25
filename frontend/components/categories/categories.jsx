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
                    onClick={() => this.handleClick("Chinese")}
                  >
                    <div className="card-content">
                      <img
                        src="https://delp-seeds.s3.us-west-1.amazonaws.com/business_pics/yangchow2.jpeg"
                        alt="chinesefood"
                      />
                      <p>Chinese</p>
                    </div>
                  </div>
                </div>
                <div className="categories-card-container">
                  <div
                    className="categories-card"
                    onClick={() => this.handleClick("Mexican")}
                  >
                    <div className="card-content">
                      <img
                        src="https://i.imgur.com/b9nBW88.png"
                        alt="mexicanfood"
                      />
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
                      <img
                        src="https://i.imgur.com/ezW1IYA.png"
                        alt="vietfood"
                      />
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
                      <img
                        src="https://i.imgur.com/6aoMuEU.png"
                        alt="japanesefood"
                      />
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
                      <img
                        src="https://i.imgur.com/QOBYd64.png"
                        alt="koreanfood"
                      />
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
