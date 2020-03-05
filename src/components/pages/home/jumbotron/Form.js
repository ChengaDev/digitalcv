import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      firstnameErrorMessage: '',
      lastnameErrorMessage: '',
      emailErrorMessage: '',
      formSubmittedSuccesfully: false
    };
  }

  clearErrorMessages() {
    this.setState({
      firstnameErrorMessage: '',
      lastnameErrorMessage: '',
      emailErrorMessage: ''
    });
  }

  onSubmit(event) {
    const isFormValid = this.validateForm();

    if (isFormValid) {
      this.setState({ formSubmittedSuccesfully: true });
    }

    event.preventDefault();
  }

  validateForm() {
    this.clearErrorMessages();

    let isFormValid = true;
    // vaidate first name
    if (this.state.firstname.length === 0) {
      isFormValid = false;
      this.setState({ firstnameErrorMessage: 'שדה חובה' });
    }
    // validate last name
    if (this.state.lastname.length === 0) {
      isFormValid = false;
      this.setState({ lastnameErrorMessage: 'שדה חובה' });
    }
    // validate email
    if (this.state.email.length === 0) {
      isFormValid = false;
      this.setState({ emailErrorMessage: 'שדה חובה' });
    }

    return isFormValid;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  rednerThankYou() {
    return (
      <ThankYouScreen>
        תודה רבה!
        <br />
        נענה בהקדם :)
      </ThankYouScreen>
    );
  }

  renderForm() {
    return (
      <React.Fragment>
        <div>מלא פרטים והצטרף למהפכה!</div>
        <form onSubmit={this.onSubmit}>
          <input
            name='firstname'
            value={this.state.firstname}
            onChange={this.handleInputChange}
            type='text'
            placeholder='שם פרטי'
          />
          <ErrorMessage>{this.state.firstnameErrorMessage}</ErrorMessage>
          <input
            name='lastname'
            value={this.state.lastname}
            onChange={this.handleInputChange}
            type='text'
            placeholder='שם משפחה'
          />
          <ErrorMessage>{this.state.lastnameErrorMessage}</ErrorMessage>
          <input
            name='email'
            value={this.state.email}
            onChange={this.handleInputChange}
            type='text'
            placeholder='אימייל'
          />
          <ErrorMessage>{this.state.emailErrorMessage}</ErrorMessage>
          <button>שלח</button>
        </form>
      </React.Fragment>
    );
  }

  renderContent() {
    if (this.state.formSubmittedSuccesfully) {
      return this.rednerThankYou();
    }
    return this.renderForm();
  }

  render() {
    return <MiniForm>{this.renderContent()}</MiniForm>;
  }
}

const MiniForm = styled.div`
  flex-basis: 15%;
  order: 2;
  height: 300px;
  min-width: 280px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px ${props => props.theme.colors.white} solid;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  margin: 25px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 30px 50px 30px 50px;

  & form {
    margin-top: 20px;
  }

  & input {
    font-family: ${props => props.theme.fontFamilies.assistant};
    height: 35px;
    width: 100%;
    font-size: ${props => props.theme.fontSizes.fontSize4};
    text-indent: 15px;
  }

  & button {
    font-family: ${props => props.theme.fontFamilies.assistant};
    margin-top: 5px;
    width: 100%;
    color: ${props => props.theme.colors.white};
    background-color: #1a7dd7;
    border: none;
    line-height: 10px;
    font-size: ${props => props.theme.fontSizes.fontSize6};
    font-weight: 400;
    height: 40px;
    cursor: pointer;
    animation: anim 2s infinite;
    -webkit-animation: anim 2s infinite;

    &:hover {
      transition: background-color 300ms linear;
      background-color: #7499d4;
    }

    @keyframes anim {
      0% {
        background-color: #1a7dd7;
      }

      50% {
        background-color: #003a94;
      }

      100% {
        background-color: #1a7dd7;
      }
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  height: 15px;
  text-align: right;
  margin-bottom: 10px;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.fontSize2};
`;

const ThankYouScreen = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.fontSize8};
  padding-top: 100px;
`;

export default Form;
