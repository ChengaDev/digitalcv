import React from 'react';
import styled from 'styled-components';

class ContactUsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      firstname: '', //'חן',
      lastname: '', //'גזית',
      email: '', //'gazit.chen@gmail.com',
      phone: '', //'0509933573',
      content: '', //'מתכנת על'ת
      errors: null
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

  render() {
    return (
      <Wrapper>
        <ContactForm>
          <FormTitle>צור איתנו קשר</FormTitle>
          <FormGroup>
            <label>שם פרטי</label>
            <input
              value={this.state.firstname}
              name='firstname'
              tabIndex='1'
              type='text'
              onChange={this.handleInputChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <label>שם משפחה</label>
            <input
              value={this.state.lastname}
              name='lastname'
              tabIndex='2'
              type='text'
              onChange={this.handleInputChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <label>אימייל</label>
            <input
              value={this.state.email}
              name='email'
              tabIndex='3'
              type='text'
              onChange={this.handleInputChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <label>טלפון</label>
            <input
              value={this.state.phone}
              name='phone'
              tabIndex='4'
              type='text'
              onChange={this.handleInputChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <label>תוכן הפנייה</label>
            <textarea
              value={this.state.content}
              name='content'
              tabIndex='5'
              type='text'
              onChange={this.handleInputChange}
            ></textarea>
          </FormGroup>
          <SubmitButton>שלח</SubmitButton>
        </ContactForm>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;
`;

const FormTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.fontSize8};
  margin-bottom: 15px;
  margin-top: 15px;
  display: inline-block;
  width: 100%;
  text-align: center;
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
    font-size: 22px;
    width: 100%;
    clear: both;
  }

  & label {
    font-weight: bold;
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

const SubmitButton = styled.button`
  font-family: ${props => props.theme.fontFamilies.assistant};
  margin-top: 20px;
  height: 50px;
  width: 150px;
  font-size: 20px;
`;

export default ContactUsPage;
