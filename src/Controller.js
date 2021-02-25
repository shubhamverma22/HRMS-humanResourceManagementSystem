import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";

function Controller() {
	return (
		<Router>
			<Dashboard>
				This is Dashboard Layout
				<Switch>
					<Route />
				</Switch>
			</Dashboard>
		</Router>
	);
}

export default Controller;
