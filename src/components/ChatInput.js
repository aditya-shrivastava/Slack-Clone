import styled from 'styled-components';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId, chatRef }) => {
	const [input, setInput] = useState('');

	const sendMessage = (e) => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}

		db.collection('rooms').doc(channelId).collection('messages').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: 'Jesscia Jones',
			userImage:
				'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		});

		chatRef.current.scrollIntoView({
			behavior: 'smooth',
		});
		setInput('');
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message #${channelName}`}
					type='text'
				/>
				<Button hidden type='submit' onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
};

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
		outline: none;
	}

	> form > button {
		display: none !important;
	}
`;
