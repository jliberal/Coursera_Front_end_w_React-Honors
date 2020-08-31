import React from 'react';
import '../style/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../config/firebase';
import { actionTypes } from '../datalayer/reducer';
import { useStateValue } from '../datalayer/StateProvider';
import logo from '../assets/main.svg';

function Login() {
	const [state, dispatch] = useStateValue();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	return (
		<div className="login">
			<div className="login__center">
				<div className="login__text">
					<h1>This is a beautiful landing page :D</h1>
					<h3>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus
						porttitor urna non porttitor. Morbi placerat enim vitae augue
						maximus, a porttitor erat varius.
					</h3>
					<Button type="submit" onClick={signIn}>
						SIGN IN
					</Button>
				</div>
				<div className="login__logo">
					<img src={logo} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Login;
