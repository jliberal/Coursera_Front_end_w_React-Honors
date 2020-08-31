import React from 'react';
import '../style/Projects.css';
import Project from './Project';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Projects() {
	return (
		<div className="projects">
			<Project Icon={AssignmentIcon} title="Coursera Honor Project" />
			<Project Icon={CreateNewFolderIcon} title="Create Project" />
		</div>
	);
}

export default Projects;
