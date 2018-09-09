import React, { Component } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 100%;
  width: 100%;
  
  
`;

export const Title = styled.h1`
  margin-top: 150px;
  margin-bottom: 150px;
`;

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 20px;
  border-radius: 300px;
  border: 1px solid lightgray;
  box-sizing: content-box;
  margin: 5px 0;
  
  font-family: "Segoe UI", sans-serif;

  &:focus {
    outline: none;
    border-color: fuchsia;
    border-width: 1px;
    transition: border ease 0.3s;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  width: fit-content;
  background: pink;
  border: none;
  border-radius: 300px;


  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

class ChatLogin extends Component {
  state = {
    phoneNumber: '+',
    phoneSubmitted: false,
    phoneCode: null
  }

  handleSubmitClick = (phoneSubmitted) => () => {
    if (phoneSubmitted) {
      
    } else {
      this.setState({ phoneSubmitted: true })
    }
  }

  handleInputChange = (phoneSubmitted) => (event) => {
    
    if (phoneSubmitted) {
      
    } else {
      this.setState({ phoneNumber: event.target.value });
    }
  }

  checkPhoneInputCorrectness = (event) => {
    if (event.target.value === '+' && event.keyCode === 8 
          || event.target.value.length === 13 && event.keyCode !== 8 
          || ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 8))  {
      event.preventDefault();
    }
  }

  render() {
    const { phoneNumber, phoneSubmitted } = this.state;

    return (
      <Wrapper>
        <Title>Telegram VY</Title>
        <Form style={{ display: 'flex', flexDirection: 'column'}}>
          <Input placeholder="Enter phone number" value={phoneNumber}
            onChange={this.handleInputChange(phoneSubmitted)}
            onKeyDown={this.checkPhoneInputCorrectness}></Input>
          {
            phoneSubmitted 
              ? <Input placeholder="Enter code"></Input>
              : null
          }
          <Button onClick={this.handleSubmitClick(phoneSubmitted)}>Submit</Button>
        </Form>

        <input type="text" /> 
      </Wrapper>          
    )
  }
}

export default ChatLogin;