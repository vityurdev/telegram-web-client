import { Component } from 'react';
import React, { Component } from 'react';
import { ChatWindow } from './Chat.styled';
import ChatLogin from './../ChatLogin';

class Chat extends Component {
	render() {
		return (
			<ChatWindow>
				<ChatLogin />
			</ChatWindow>
		);
	}
}

export default Chat;