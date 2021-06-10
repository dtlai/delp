import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.demo = {
            email: 'guest_user@email.com',
            password: 'guestuser'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount () {
        this.props.receiveErrors([]);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        </style>

        <div className="loginheader-logo-link">
          <Link to="/" className="logo-link">
            <img src="https://delp-seeds.s3.us-west-1.amazonaws.com/actual_delp.png" />
          </Link>
        </div>
        <div className="whole-login-page">
          <div className="login-form-container">
            <div className="login-header">Log in to Delp</div>
            <div className="login-header-2">
              New to Delp? {this.props.navLink}
            </div>
            <div className="login-form-field-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                {this.renderErrors()}
                <div className="login-form-fields">
                  <div>
                    <label>
                      <input
                        type="email"
                        value={this.state.email}
                        onChange={this.update("email")}
                        placeholder="Email"
                        className="login-input"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="password-text">
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        placeholder="Password"
                        className="login-input"
                      />
                    </label>
                  </div>

                  <input
                    className="login-submit"
                    type="submit"
                    value={this.props.formType}
                  />
                </div>
              </form>
              <div className="demo-button">
                <button
                  className="guest-user-submit"
                  onClick={() => this.props.processForm(this.demo)}
                >
                  Guest User
                </button>
              </div>
              <div className="signup-button">
                New to Delp?&nbsp;{this.props.navLink}
              </div>
            </div>
          </div>
          <div className="login-pic">
            <img
              src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
              alt="imgnotfound"
            />
          </div>
        </div>
      </>
    );
    }
}

export default LoginForm;
