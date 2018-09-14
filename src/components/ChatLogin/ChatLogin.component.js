import React, { Component } from 'react';
import { Wrapper, Title, Form, Input, ErrorMessage, Button } from './ChatLogin.styled';
import telegramAPI from "./../../services/TelegramAPIService";

class ChatLogin extends Component {
  state = {
    phoneNumber: '',
    phoneSubmitted: false,
    phoneCode: null,
    isPhoneNumberInvalid: false,
    phoneCodeHash: '',
    isRequestPending: false
  }

  handleSubmitClick = (phoneSubmitted) => async () => {
    const { phoneNumber, phoneCode, phoneCodeHash } = this.state;
    const { navigateToChatList } = this.props;

    this.setState({ isRequestPending: true})

    if (phoneSubmitted) {
      try {
        const user = await telegramAPI.signIn(phoneNumber, phoneCode, phoneCodeHash);
        console.log(user);
        navigateToChatList();
      } catch (e) {
        console.log(e);
      } finally {
        this.setState({ isRequestPending: false });
      }
    } else {
      try {
        const phoneCodeHash = await telegramAPI.sendAuthCode(this.state.phoneNumber);
        console.log(phoneCodeHash);
        this.setState({ phoneCodeHash });
        this.setState({ phoneSubmitted: true });
      } catch (e) {
        console.log(e);
        this.setState({ isPhoneNumberInvalid: true });
      } finally {
        this.setState({ isRequestPending: false })
      }
      
    }
  }

  handleInputChange = (phoneSubmitted) => (event) => {
    if (phoneSubmitted) {
      this.setState({ phoneCode: event.target.value })
    } else {
      this.setState({ phoneNumber: event.target.value.charAt(0) === '+'
        ? event.target.value.substring(1)
        : event.target.value.substring(2) });
    }
  }

  checkPhoneInputCorrectness = (event) => {
    // 1. Disable removing '+' at the start
    // 2. Disable entering anything but backspace when phone number is of max correct length (15 digits)
    // 3. Disable alphabetic input (only digits and side arrows are allowed)
    if (this.state.isPhoneNumberInvalid) {
      this.setState({ isPhoneNumberInvalid: false})
    }
    
    if ((event.target.value === '+' && event.keyCode === 8 
          || event.target.value.length === 16 && ![8, 37, 39].includes(event.keyCode)
          || (((event.keyCode < 48 || event.keyCode > 57)) && ![8, 37, 39].includes(event.keyCode)))          
    ) {
      event.preventDefault();
    }
  }

  checkCodeInputCorrectness = (event) => {
    // Disable alphabetic input (only digits and side arrows are allowed)

    if ((event.keyCode < 48 || event.keyCode > 57) && ![8, 37, 39].includes(event.keyCode)) {
      event.preventDefault();
    }
  }

  render() {
    const { phoneNumber, phoneSubmitted, phoneCode, isPhoneNumberInvalid, isRequestPending } = this.state;

    return (
      <Wrapper>
        <Title>Telegram VY</Title>
        <Form style={{ display: 'flex', flexDirection: 'column'}}>
          <Input disabled={phoneSubmitted} placeholder="Enter phone number" 
            value={ phoneNumber.charAt(0) === '+'
                      ? phoneNumber 
                      : '+' + phoneNumber} 
            onChange={this.handleInputChange(phoneSubmitted)}
            onKeyDown={this.checkPhoneInputCorrectness}>
          </Input>
          {
            isPhoneNumberInvalid
              ? <ErrorMessage>Invalid phone number</ErrorMessage>
              : null
          }
          {
            phoneSubmitted 
              ? <Input placeholder="Enter code" value={phoneCode}
                  onChange={this.handleInputChange(phoneSubmitted)}
                  onKeyDown={this.checkCodeInputCorrectness}></Input>
              : null
          }
          <Button disabled={isRequestPending} onClick={this.handleSubmitClick(phoneSubmitted)}>Submit</Button>
        </Form>
      </Wrapper>         
    )
  }
}

export default ChatLogin;