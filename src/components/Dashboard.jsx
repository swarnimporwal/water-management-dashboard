import React, { Component, Fragment } from "react";
import Chart from "./Chart";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="h-1">Water Management System Dashboard</h1>
        <div className="dashboard">
          <div>
            <Chart />
            <h1 className="h-2">Flow Meter 1</h1>
          </div>
          <div>
            <Chart />
            <h1 className="h-2">Flow Meter 2</h1>
          </div>
          <div>
            <Chart />
            <h1 className="h-2">Flow Meter 3</h1>
          </div>
          <div>
            <Chart />
            <h1 className="h-2">Flow Meter 4</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
