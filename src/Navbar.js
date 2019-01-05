import React from 'react';

const Navbar = (props) => {
	return (
		<div className="navbar">
			<span className="left-side">
				Weather
			</span>
			<span className="right-side" onClick={props.refreshData} >
				<i className="fa fa-refresh"></i>
			</span>
		</div>
	);
}

export default Navbar;