import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            zipcode: '',
            birthday: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillUnmount() {
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
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
            </style>
            <div className="whole-signup-page">
                <div className="header-logo-link">
                    <Link to="/" className="logo-link">
                        {/* <h1>Delp</h1> */}
                        <img src="https://i.imgur.com/JrsNpWu.png" />
                    </Link>
                </div>
                <div className="signup-header">Sign Up for Delp</div>
                <div className="signup-header-2">Connect with great local businesses</div>
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        {this.renderErrors()}
                        <div className="signup-form">
                            <label> 
                            <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    placeholder="First Name"
                                    className="signup-input"
                                />
                            </label>

                            <label>
                            <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    placeholder="Last Name"
                                    className="signup-input"
                                />
                            </label>

                            <label>
                            <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                    className="signup-input"
                                />
                            </label>

                            <label>
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    className="signup-input"
                                />
                            </label>
                            <label>
                                <input type="text"
                                    value={this.state.zipcode}
                                    onChange={this.update('zipcode')}
                                    placeholder="Zip Code"
                                    className="signup-input"
                                />
                            </label>
                            <label>Birthday
                                <input type="text"
                                    value={this.state.birthday}
                                    onChange={this.update('birthday')}
                                    placeholder="Birthday"
                                    className="signup-input"
                                />
                            </label>

                            <input className="signup-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                    <div className="login-pic">
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="imgnotfound" />
                    </div>
                    <div className="signup-button">
                    Already on Delp?&nbsp;{this.props.navLink}
                </div>
                </div>
            </div>
            </>
        );
    }
}

export default SignupForm;
