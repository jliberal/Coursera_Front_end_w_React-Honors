import React from 'react';
import '../style/Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home__center">
				<div className="home__text">
					<h1>This is a Home Page</h1>
					<h3>
						Please Select a <b>Project</b> to Continue
					</h3>
				</div>
				<div className="home__logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Gnome-home.svg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
