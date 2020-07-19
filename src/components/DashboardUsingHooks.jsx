import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions";
import Chart from "./Chart";
import {
  GET_DATA_OF_DASHBOARD_1,
  GET_DATA_OF_DASHBOARD_2,
  GET_DATA_OF_DASHBOARD_3,
  GET_DATA_OF_DASHBOARD_4
} from "../actions/types";

const refactorData = (values, name) => {
  const arr = new Array(7).fill(0);
  values.map(d => {
    return (arr[parseInt(new Date(d.created_at).getDay(), 10)] =
      arr[parseInt(new Date(d.created_at).getDay(), 10)] +
      parseInt(d[name], 10));
  });
  return arr;
};

export default () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector(state => state.rootReducer.dailyConsumption);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(actions.fetchData(1, GET_DATA_OF_DASHBOARD_1));
      await dispatch(actions.fetchData(2, GET_DATA_OF_DASHBOARD_2));
      await dispatch(actions.fetchData(3, GET_DATA_OF_DASHBOARD_3));
      await dispatch(actions.fetchData(4, GET_DATA_OF_DASHBOARD_4));
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div class="loader" />;

  return (
    <Fragment>
      <h1 className="h-1">Water Management System Dashboard</h1>
      <div className="dashboard">
        <div>
          <Chart data={refactorData(data.data_1, "field1")} />
          <h1 className="h-2">Flow Meter 1</h1>
        </div>
        <div>
          <Chart data={refactorData(data.data_2, "field2")} />
          <h1 className="h-2">Flow Meter 2</h1>
        </div>
        <div>
          <Chart data={refactorData(data.data_3, "field3")} />
          <h1 className="h-2">Flow Meter 3</h1>
        </div>
        <div>
          <Chart data={refactorData(data.data_4, "field4")} />
          <h1 className="h-2">Flow Meter 4</h1>
        </div>
      </div>
    </Fragment>
  );
};
