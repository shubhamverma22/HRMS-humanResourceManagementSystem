import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const navItems = [
	{
		name: "Dashboard",
		icon: <BiHomeAlt />,
		link: "/",
	},
	{
		name: "Recruitment",
		icon: <BsPeopleFill />,
		link: "/recruitment",
	},
	{
		name: "OnBoarding",
		icon: <HiOutlineDocumentReport />,
		link: "/onboarding",
	},
	{
		name: "Reports",
		icon: <GoReport />,
		link: "/reports",
	},
	{
		name: "Calender",
		icon: <FaRegCalendarAlt />,
		link: "/calender",
	},
	{
		name: "Settings",
		icon: <AiOutlineSetting />,
		link: "/settings",
	},
];
function Dashboard({ children }) {
	const location = useLocation();
	return (
		<div className="dashboard-layout">
			<nav className="side-nav-bar">
				<div className="logo-container">
					<h3>Newton HR</h3>
				</div>
				<div className="nav-container">
					{navItems.map((navItem, index) => (
						<Link key={index} to={navItem.link}>
							<div className={`nav-item ${navItem.link === location.pathname ? 'selected':''}`}>
								{navItem.icon}
								<label className="item-name">{navItem.name}</label>
							</div>
						</Link>
					))}
				</div>
				<div className="nav-footer-svg">
					<img></img>
				</div>
			</nav>
			<div className="main-container">{children}</div>
		</div>
	);
}

export default Dashboard;
