import React from 'react';
import './App.css';
import Login from './components/Login';
import { useStateValue } from './datalayer/StateProvider';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Tasks from './components/Tasks';

function App() {
	const [{ user }, dispatch] = useStateValue();
	const pro = true;
	return (
		<div className="app">
			{!pro ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						{pro ? <Projects /> : <></>}
						<Tasks />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
