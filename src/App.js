import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import { CircularProgress } from '@material-ui/core';

function App() {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContents>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFXp3lw38ZyiRK9sfU-hl8MyyR4EIAfnoYeO68nx3XWo46WPsmieY8XQD-bZ1M0renQ&usqp=CAU'
						alt='logo'
					/>
					<CircularProgress variant='secondary' />
				</AppLoadingContents>
			</AppLoading>
		);
	}

	return (
		<div className='app'>
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<AppBody>
							<Sidebar username={user.displayName} />
							<Switch>
								<Route exact path='/'>
									<Chat />
								</Route>
							</Switch>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;

const AppLoading = styled.div`
	display: grid;
	height: 100vh;
	width: 100vw;
	place-items: center;
`;

const AppLoadingContents = styled.div`
	text-align: center;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> img {
		height: 100px;
		padding: 20px;
		margin-bottom: 40px;
	}
`;
