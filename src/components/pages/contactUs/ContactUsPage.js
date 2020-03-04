import React from 'react';
import styled from 'styled-components';
import zapierApi from '../../../api/zapierApi';

class ContactUsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearErrorMessages = this.clearErrorMessages.bind(this);

    this.state = {
      firstname: '', //'חן',
      lastname: '', //'גזית',
      email: '', //'gazit.chen@gmail.com',
      phone: '', //'0509933573',
      subject: '',
      content: '', //'מתכנת על'
      firstnameErrorMessage: '',
      lastnameErrorMessage: '',
      emailErrorMessage: '',
      phoneErrorMessage: '',
      subjectErrorMessage: '',
      contentErrorMessage: '',
      formSubmittedSuccesfully: false
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
    // validate phone
    if (this.state.phone.length === 0) {
      isFormValid = false;
      this.setState({ phoneErrorMessage: 'שדה חובה' });
    }
    // validate subject
    if (this.state.subject.length === 0) {
      isFormValid = false;
      this.setState({ subjectErrorMessage: 'שדה חובה' });
    }
    // validate content
    if (this.state.content.length === 0) {
      isFormValid = false;
      this.setState({ contentErrorMessage: 'שדה חובה' });
    }

    return isFormValid;
  }

  onSubmit(event) {
    const isFormValid = this.validateForm();

    if (isFormValid) {
      zapierApi
        .submitContactForm(
          this.state.firstname,
          this.state.lastname,
          this.state.email,
          this.state.phone,
          this.state.subject,
          this.state.content
        )
        .then(() => {
          this.setState({ formSubmittedSuccesfully: true });
        });
    }

    event.preventDefault();
  }

  clearErrorMessages() {
    this.setState({
      firstnameErrorMessage: '',
      lastnameErrorMessage: '',
      emailErrorMessage: '',
      phoneErrorMessage: '',
      subjectErrorMessage: '',
      contentErrorMessage: ''
    });
  }

  renderThankYou() {
    return (
      <ThankYou>
        <ThankYouContent>
          תודה רבה על פנייתך!
          <br />
          נענה בהקדם האפשרי
        </ThankYouContent>
      </ThankYou>
    );
  }

  renderForm() {
    return (
      <Wrapper>
        <FormWrapper>
          <ContactForm onSubmit={this.onSubmit}>
            <FormTitle>צור קשר עם Kuala</FormTitle>
            <FormGroup>
              <label>שם פרטי</label>
              <TextInput
                isValid={this.state.firstnameErrorMessage.length === 0}
                value={this.state.firstname}
                name='firstname'
                tabIndex='1'
                type='text'
                onChange={this.handleInputChange}
              ></TextInput>
              <ErrorMessage>{this.state.firstnameErrorMessage}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <label>שם משפחה</label>
              <TextInput
                isValid={this.state.lastnameErrorMessage.length === 0}
                value={this.state.lastname}
                name='lastname'
                tabIndex='2'
                type='text'
                onChange={this.handleInputChange}
              ></TextInput>
              <ErrorMessage>{this.state.lastnameErrorMessage}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <label>אימייל</label>
              <TextInput
                isValid={this.state.emailErrorMessage.length === 0}
                value={this.state.email}
                name='email'
                tabIndex='3'
                type='text'
                onChange={this.handleInputChange}
              ></TextInput>
              <ErrorMessage>{this.state.emailErrorMessage}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <label>טלפון</label>
              <TextInput
                isValid={this.state.phoneErrorMessage.length === 0}
                value={this.state.phone}
                name='phone'
                tabIndex='4'
                type='text'
                onChange={this.handleInputChange}
              ></TextInput>
              <ErrorMessage>{this.state.phoneErrorMessage}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <label>נושא הפנייה</label>
              <TextInput
                isValid={this.state.subjectErrorMessage.length === 0}
                value={this.state.subject}
                name='subject'
                tabIndex='4'
                type='text'
                onChange={this.handleInputChange}
              ></TextInput>
              <ErrorMessage>{this.state.subjectErrorMessage}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <label>תוכן הפנייה</label>
              <TextAreaInput
                isValid={this.state.contentErrorMessage.length === 0}
                value={this.state.content}
                name='content'
                tabIndex='5'
                type='text'
                onChange={this.handleInputChange}
              ></TextAreaInput>
              <ErrorMessage>{this.state.contentErrorMessage}</ErrorMessage>
            </FormGroup>
            <SubmitButton>שלח</SubmitButton>
          </ContactForm>
        </FormWrapper>
      </Wrapper>
    );
  }

  render() {
    if (this.state.formSubmittedSuccesfully) {
      return this.renderThankYou();
    }
    return this.renderForm();
  }
}

const Wrapper = styled.div`
  direction: rtl;
`;

const FormTitle = styled.h1`
  color: rgba(10, 32, 68);
  font-size: ${props => props.theme.fontSizes.fontSize8};
  margin-bottom: 15px;
  margin-top: 15px;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-weight: none;
`;

const FormWrapper = styled.div`
  padding: 30px;
`;

const ContactForm = styled.form`
  max-width: 700px;
  font-family: ${props => props.theme.fontFamilies.assistant};
  margin: 0 auto;
`;

const FormGroup = styled.div`
  font-family: ${props => props.theme.fontFamilies.assistant};
  margin-top: 20px;
  width: 100%;

  & * {
    font-size: ${props => props.theme.fontSizes.fontSize5};
    width: 100%;
    clear: both;
  }

  & label {
    /* font-weight: bold; */
  }

  & input {
    font-family: ${props => props.theme.fontFamilies.assistant};
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
    text-indent: 15px;
  }

  & textarea {
    font-family: ${props => props.theme.fontFamilies.assistant};
    margin-top: 10px;
    height: 300px;
    text-indent: 15px;
  }
`;

const TextInput = styled.input`
  border: 1px solid ${props => (props.isValid ? 'black' : 'red')};
`;

const TextAreaInput = styled.textarea`
  border: 1px solid ${props => (props.isValid ? 'black' : 'red')};
`;

const SubmitButton = styled.button`
  font-family: ${props => props.theme.fontFamilies.assistant};
  margin-top: 20px;
  height: 50px;
  width: 150px;
  font-size: ${props => props.theme.fontSizes.fontSize4};
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: ${props => props.theme.fontSizes.fontSize2};
  height: 12px;
  font-weight: bold;
`;

const ThankYou = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fontFamilies.assistant};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.fontSize8};
`;

const ThankYouContent = styled.div`
  direction: rtl;
  margin-top: 300px;
`;

export default ContactUsPage;
