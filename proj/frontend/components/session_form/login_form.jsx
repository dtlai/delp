import React from 'react';

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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to Delp!
                <br />
                Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                <div className="login-form">
                        <br />
                    <label>Email:
                        <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                            />
                    </label>
                    <br />

                    <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
                <div className="demo-button">
                    <button className="guest-user-submit" onClick={() => this.props.processForm(this.demo)}>Guest User</button>
                </div>
            </div>
        );
    }
}

export default LoginForm;
