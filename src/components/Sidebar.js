import React from 'react';
import '../style/Sidebar.css';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import SidebarRow from './SidebarRow';

function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarRow Icon={FolderSharedIcon} title="Projects" />
		</div>
	);
}

export default Sidebar;
