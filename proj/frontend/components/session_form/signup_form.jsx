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
            <div className="signup-form-container">
                <div className="header-logo-link">
                <Link to="/" className="logo-link">
                    {/* <h1>Delp</h1> */}
                    <img src="https://i.imgur.com/JrsNpWu.png" />
                </Link>
                </div>
            <form onSubmit={this.handleSubmit} className="signup-form-box">
                    Sign Up for Delp 
            <br />
            Connect with great local businesses
            Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <div className="signup-form">
                    <label>First Name: 
                    <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className="signup-input"
                        />
                    </label>
                    <br />
                    <label>Last Name: 
                    <input type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className="signup-input"
                        />
                    </label>
                    <br />
                    <label>Email: 
                    <input type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input"
                        />
                    </label>
                    <br />
                    <label>Password: 
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input"
                        />
                    </label>
                    <br />
                    <input className="signup-submit" type="submit" value={this.props.formType} />
                </div>
            </form>
            </div>
        );
    }
}

export default SignupForm;
