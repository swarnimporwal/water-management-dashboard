import React from "react";
import { Bar } from "react-chartjs-2";

const state = (data = [91, 43, 70, 56, 67, 55, 80]) => ({
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  datasets: [
    {
      label: "Daily Consumption",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data
    }
  ]
});

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state(this.props.data)}
          options={{
            title: {
              display: true,
              text: "Daily Consumption",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}
