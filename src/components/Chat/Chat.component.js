import React, { Component } from 'react';
import styled from 'styled-components';
import ChatLogin from './../ChatLogin';

const ChatWindow = styled.section`
  width: 450px;
  height: 700px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
`;

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