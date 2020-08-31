import React from 'react';
import '../style/Project.css';

function Project({ title, Icon }) {
	return (
		<div className="project">
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	);
}

export default Project;
