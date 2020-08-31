import React from 'react';
import '../style/Sidebar.css';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import SidebarRow from './SidebarRow';
import { useStateValue } from '../datalayer/StateProvider';
import { IconButton } from '@material-ui/core';
import { actionTypes } from '../datalayer/reducer';

function FolderLink() {
	const [{ user, sideProjectBar }, dispatch] = useStateValue();
	return (
		<IconButton
			aria-label="delete"
			onClick={() => {
				var barStatus = sideProjectBar;
				if (barStatus) {
					barStatus = false;
				} else {
					barStatus = true;
				}
				dispatch({
					type: actionTypes.SET_PROJECTS_WINDOW,
					sideProjectBar: barStatus,
				});
			}}
		>
			<FolderSharedIcon />
		</IconButton>
	);
}

function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarRow path="/projects" Icon={FolderLink} title="Projects" />
		</div>
	);
}

export default Sidebar;
