import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Home from "./screen/home/Home";
import Recruitment from "./screen/recruitment/Recruitment";
import Onboarding from "./screen/onboarding/Onboarding";
import Reports from "./screen/reports/Reports";
import Calender from "./screen/calender/Calender";
import Settings from "./screen/settings/Settings";

function Controller() {
	return (
		<Router>
			<Dashboard>
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route
						path="/recruitment"
						render={(props) => <Recruitment {...props} />}
					/>
					<Route
						path="/onboarding"
						render={(props) => <Onboarding {...props} />}
					/>
					<Route path="/reports" render={(props) => <Reports {...props} />} />
					<Route path="/calender" render={(props) => <Calender {...props} />} />
					<Route path="/settings" render={(props) => <Settings {...props} />} />
				</Switch>
			</Dashboard>
		</Router>
	);
}

export default Controller;
