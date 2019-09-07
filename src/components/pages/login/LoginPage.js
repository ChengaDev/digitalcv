import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit() {
        alert('submitted');
    }
    
    render() {
        return(
            <LoginForm onFormSubmit={this.onFormSubmit} />
        );
    }
}

export default LoginPage;