import React from "react";

function Dashboard({ children }) {
	return (
		<div className="dashboard-layout">
			<nav className="side-nav-bar">this is nav</nav>
			<div className="main-container">
				Here are childrens
				{children}
			</div>
		</div>
	);
}

export default Dashboard;
