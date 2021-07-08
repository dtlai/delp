import { connect } from "react-redux";
import React from 'react';
import { withRouter } from "react-router";
import { searchBusinesses } from "../../actions/business_actions";
import SearchBar from "./search_form";

const mapStateToProps = () => {
  return {
      
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchBusinesses: (search) => dispatch(searchBusinesses(search))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
