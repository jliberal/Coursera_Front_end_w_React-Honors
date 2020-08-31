import React from 'react';
import '../style/SidebarRow.css';

function SidebarRow({ title, Icon }) {
	return (
		<div className="sidebarRow">
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	);
}

export default SidebarRow;
