import React, { Component } from 'react';
import styled from 'styled-components';
import telegramAPI from "./../../services/TelegramAPIService";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Button = styled.button`
  
`;

class ChatList extends Component {
  handleLogOutClick = async () => {
    const { navigateToLogin } = this.props;
    const isLogOutSuccessful = await telegramAPI.logOut();
    console.log(isLogOutSuccessful);

    if (isLogOutSuccessful) {
      navigateToLogin();
    }
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleLogOutClick}>Log Out</Button>
      </Wrapper>
    )
  }
}

export default ChatList;