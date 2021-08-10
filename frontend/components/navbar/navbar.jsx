import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_form/search_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.formType === 'home') {
      this.type = 'home'
    } else if (this.props.formType === 'other') {
      this.type = 'other'
    } else if (this.props.formType === 'review') {
      this.type = 'review'
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.loginContainer = this.loginContainer.bind(this);
    this.logoutContainer = this.logoutContainer.bind(this);
    this.setDropdown = this.setDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      dropdown: false
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  setDropdown(e) {
    e.stopPropagation();
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  container = React.createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (
      this.container.current && 
      !this.container.current.contains(e.target)
    ) {
      this.setState({
        dropdown: false,
      })
    }
  }

  loginContainer () {
    let firstName = this.props.currentUser.first_name;
    let lastName = this.props.currentUser.last_name;
    
    return (
      <>
        <div className="user-session-container" ref={this.container}>
          <button onClick={(e) => this.setDropdown(e)} className="dropbtn">
            <img src="https://i.imgur.com/eHreOGm.jpg" alt="profpic" />
          </button>
          {this.state.dropdown ? (
            <div className="user-session-content">
              <div className="user-name-container">
                <img src="https://i.imgur.com/eHreOGm.jpg" alt="profpic" />
              </div>
              <div className="user-info">
                {firstName}&nbsp;{lastName}
              </div>
              <div>
                <button className="session-button" onClick={this.logoutUser}>
                  Logout
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </>
    );
  }

  logoutContainer() {
    return (

      <div className="nav-logout-container">
        <div className="nav-logout-content">
          <Link to="/login" className="login-greeting">
            Log In
          </Link>
          <Link to="/signup" className="signup-greeting">
            Sign up
          </Link>
        </div>
      </div>

    );
  }

  render() {

    let sessionButtons = (this.props.currentUser) ? 
        this.loginContainer() : this.logoutContainer();

    return (
      <>
        <div className={`navbar-container-${this.type}`}>
          {sessionButtons}
        </div>
      </>
    );
  }
}


export default NavBar;
