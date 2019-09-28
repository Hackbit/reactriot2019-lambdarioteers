import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

import LoginForm from "./LoginForm";

const LandingPage = (props) => {
	const [loggingIn, setLoggingIn] = useState(false);

	return (

		!loggingIn ?
		<LandingWrapper>
			<Header>
				Good Deeds
			</Header>
			<ButtonWrapper>
			<Top>
				<Button onClick={() => setLoggingIn(true)}>Login</Button>
				<Button onClick={e => props.history.push("register")}>Register</Button>
			</Top>
			<Bottom>
				<Button onClick={e => props.history.push("task-view")}>View</Button>
			</Bottom>
			</ButtonWrapper>
		</LandingWrapper> 
		: 
			<LoginForm setLoggingIn={setLoggingIn} />
	
	);
}

export default withRouter(LandingPage);

const LandingWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-image: url("https://react-riot.s3.us-east-2.amazonaws.com/lady_medium.jpg") ;
	background-size: cover;
	@media(min-width: 500px) {
		background-image: url("https://react-riot.s3.us-east-2.amazonaws.com/14962.jpg");
	}
	overflow: hidden;
`;

const Button = styled.button`
	background-color: rgba(0, 0, 0, .5);
	width: 80%;
	margin-bottom: 35px;
	padding: 15px 0;
	max-width: 300px;
	color: #e4d6a7;
	font-weight: bold;
	font-size: 1.2rem;
	text-shadow: 2px 2px 2px #1c110a;
`;

const Top = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	margin: 10px auto;
	width: 100%;
`

const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	margin: 150px auto;
	width: 100%;
`

const ButtonWrapper = styled.div`
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`

const Header = styled.h1`
	@import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');
	margin-top: 50px;
	font-size: 3rem;
	color: #1c110a;
	font-weight: bold;
	text-shadow: 2px 2px 5px #e4d6a7;
	font-family: 'Fredoka One', cursive;
`
