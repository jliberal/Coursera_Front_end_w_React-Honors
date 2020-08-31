import React from 'react';
import Home from './Home';
import '../style/Main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStateValue } from '../datalayer/StateProvider';

import Sidebar from './Sidebar';
import Projects from './Projects';
import Tasks from './Tasks';
import Header from './Header';
import Login from './Login';

function Main() {
	const [{ user, sideProjectBar }, dispatch] = useStateValue();
	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						{sideProjectBar ? <Projects /> : <></>}
						<Home />
						{sideProjectBar ? <Tasks /> : <></>}
					</div>
				</>
			)}
			<Switch>
				<Route path="/home" component={Home} />
				<Redirect to="/home" />
			</Switch>
		</div>
	);
}

export default Main;
