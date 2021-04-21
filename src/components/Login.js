import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../Firebase';

const Login = () => {
	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithPopup(provider).catch((e) => alert(e.message));
	};

	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFXp3lw38ZyiRK9sfU-hl8MyyR4EIAfnoYeO68nx3XWo46WPsmieY8XQD-bZ1M0renQ&usqp=CAU'
					alt='logo'
				/>
				<h1>Sign in</h1>
				<p>www.slack.com</p>

				<Button onClick={signIn}>Sign in with Google</Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.div`
	display: grid;
	place-items: center;
	background-color: #f8f8f8;
	height: 100vh;
`;

const LoginInnerContainer = styled.div`
	padding: 100px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	> img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 40px;
	}

	> button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #0a84d8 !important;
		color: white;
	}
`;
