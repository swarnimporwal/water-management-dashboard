import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import DashboardUsingHooks from "./DashboardUsingHooks";

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/hooks" component={DashboardUsingHooks} />
      <Route
        path="*"
        render={() => {
          return <div> Page Not Found</div>;
        }}
      />
    </Switch>
  </main>
);

export default Main;
