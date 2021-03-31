import React from 'react';
import styled from 'styled-components';

const Message = ({ message, timestamp, user, userImage }) => {
	return (
		<MessageContainer>
			<img src={userImage} alt='user' />
			<MessageInfo>
				<h4>
					{user}{' '}
					<span>{new Date(timestamp?.toDate()).toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</MessageInfo>
		</MessageContainer>
	);
};

export default Message;

const MessageContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;

	> img {
		height: 50px;
		border-radius: 50%;
		width: 50px;
		object-fit: cover;
	}
`;

const MessageInfo = styled.div`
	padding-left: 10px;

	> h4 > span {
		color: gray;
		font-weight: 300;
		margin-left: 4px;
		font-size: 10px;
	}
`;
