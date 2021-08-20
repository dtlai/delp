import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import BusinessIndexMap from "../google_maps/business_index_map";
import SearchBarContainer from "../search_form/search_form_container";
import Footer from "../footer/footer";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false,
      search: this.props.location.search.split("=")[1],
    };
  }

  componentDidMount() {
    if (!this.state.search) {
      this.props.fetchBusinesses().then(() => {
        this.setState({ hasFetched: true });
      });
    } else {
      this.props
        .searchBusinesses(this.state.search)
        .then(() => this.setState({ hasFetched: true }));
    }
  }

  render() {
    if (!this.state.hasFetched) {
      return <div>Loading...</div>;
    } else if ((this.state.hasFetched) && (Object.keys(this.props.businesses).length === 0) || !Array.isArray(this.props.businesses)) {
      return (
        <>
          <div className="businesses-container">
            <div className="nav-header-container">
              <div className="nav-header">
                <Link to="/" className="logo-link">
                  <img src="https://i.imgur.com/JrsNpWu.png" />
                </Link>
                <SearchBarContainer formType={this.props.formType} />
                <div className="navbar-links">
                  <a
                    href="https://www.linkedin.com/in/davidlai9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin
                      className="about-icon"
                      size={30}
                      color="black"
                    />
                  </a>
                  <a
                    href="https://github.com/dtlai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="about-icon" size={30} color="black" />
                  </a>
                  <a
                    href="https://angel.co/u/davidtlai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaAngellist
                      className="about-icon"
                      size={30}
                      color="black"
                    />
                  </a>
                </div>
                <div className="nav-user-header">
                  <NavBarContainer formType={this.props.formType} />
                </div>
              </div>
            </div>
            <div className="no-search-container">
              <h1>No results for {this.state.search} in Los Angeles, CA</h1>
              <div className="suggestions">
                <h2>Suggestions for improving your results:</h2>
                <li>Try a search for some listed categories</li>
                <li>Try businesses in Los Angeles area</li>
                <li>Check the spelling or try alternate spellings</li>
                <li>Try a more general search, e.g. "pizza" instead of "pepperoni"</li>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <div className="businesses-container">
            <div className="nav-header-container">
              <div className="nav-header">
                <Link to="/" className="logo-link">
                  <img src="https://i.imgur.com/JrsNpWu.png" />
                </Link>
                <SearchBarContainer formType={this.props.formType} />
                <div className="navbar-links">
                  <a
                    href="https://www.linkedin.com/in/davidlai9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin
                      className="about-icon"
                      size={30}
                      color="black"
                    />
                  </a>
                  <a
                    href="https://github.com/dtlai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="about-icon" size={30} color="black" />
                  </a>
                  <a
                    href="https://angel.co/u/davidtlai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaAngellist
                      className="about-icon"
                      size={30}
                      color="black"
                    />
                  </a>
                </div>
                <div className="nav-user-header">
                  <NavBarContainer formType={this.props.formType} />
                </div>
              </div>
            </div>
            <div className="businesses-map">
              {/* <BusinessIndexMap businesses={this.props.businesses}/> */}
            </div>
            <div className="list-of-bizs">
              {this.props.businesses.map((business, i) => (
                <Link to={`/businesses/${business.id}`} key={i}>
                  {business.name}
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </>
      );
    }
    
  }
}

export default BusinessIndex;
