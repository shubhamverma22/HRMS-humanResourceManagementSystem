import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

const navItems = [
	{
		name: "Dashboard",
		icon: <BiHomeAlt />,
	},
	{
		name: "Recruitment",
		icon: <BsPeopleFill />,
	},
	{
		name: "OnBoarding",
		icon: <BsPeopleFill />,
	},
	{
		name: "Reports",
		icon: <GoReport />,
	},
	{
		name: "Calender",
		icon: <FaRegCalendarAlt />,
	},
	{
		name: "Settings",
		icon: <AiOutlineSetting />,
	},
];
function Dashboard({ children }) {
	return (
		<div className="dashboard-layout">
			<nav className="side-nav-bar">
				<div className="logo-container">
					<h3>Newton HR</h3>
				</div>
				<div className="nav-container">
					{navItems.map((navItem, index) => (
						<div key={index} className="nav-item">
							{navItem.icon}
							<label className="item-name">{navItem.name}</label>
						</div>
					))}
				</div>
			</nav>
			<div className="main-container">
				Here are childrens
				{children}
			</div>
		</div>
	);
}

export default Dashboard;
