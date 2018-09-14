import React, { Component } from 'react';
import { ChatWindow } from './Chat.styled';
import ChatLogin from './../ChatLogin';
import ChatList from './../ChatList';
import Spinner from "./../Spinner";

const navigation = {
  login: 'login',
  chatlist: 'chatlist'
};

class Chat extends Component {
  state = {
    currentPage: 'login'
  }

  navigateToLogin = () => {
    this.setState({ currentPage: navigation.login });
  }

  navigateToChatList = () => {
    this.setState({ currentPage: navigation.chatlist });
  }



  

  render() {
    const { currentPage } = this.state;
	  return (
		  <ChatWindow> 
        { currentPage === navigation.login && (<ChatLogin navigateToChatList={this.navigateToChatList} />) }
        { currentPage === navigation.chatlist && (<ChatList navigateToLogin={this.navigateToLogin}/>) }
        
		  </ChatWindow>
	  );
  }
}

export default Chat;