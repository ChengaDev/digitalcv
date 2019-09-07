import React from 'react';

class LoginForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: 'chenga',
            password: 'chenga'
        };
    }

    render() {
        return(
            <div className="ui form">
                Login Page
                <input type="text" name="username" value={this.state.username} />
                <input type="password" name="password" value={this.state.password} />
                <button type="submit" onClick={this.props.onFormSubmit}>Submit</button>
            </div>
        );
    }
}

export default LoginForm;