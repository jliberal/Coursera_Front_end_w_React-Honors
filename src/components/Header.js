import React from 'react';
import '../style/Header.css';
import logo from '../assets/logo.svg';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../datalayer/StateProvider';

function Header() {
	//const [{ user }, dispatch] = useStateValue();
	const user = {
		photoURL: 'https://avatars.services.sap.com/images/john.liberal2.png',
		displayName: 'Johnplex',
	};
	return (
		<div className="header">
			<div className="header__left">
				<img src={logo} alt="" />
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar className="header__avatar" src={user.photoURL} />
					<h4>{user.displayName}</h4>
				</div>
			</div>
		</div>
	);
}

export default Header;
