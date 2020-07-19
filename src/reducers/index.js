import { combineReducers } from "redux";
import {
  GET_DATA_OF_DASHBOARD_1,
  GET_DATA_OF_DASHBOARD_2,
  GET_DATA_OF_DASHBOARD_3,
  GET_DATA_OF_DASHBOARD_4
} from "../actions/types";

const initialState = {
  data_1: [],
  data_2: [],
  data_3: [],
  data_4: []
};
function dailyConsumption(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_OF_DASHBOARD_1: {
      return { ...state, data_1: action.data };
    }
    case GET_DATA_OF_DASHBOARD_2: {
      return { ...state, data_2: action.data };
    }
    case GET_DATA_OF_DASHBOARD_3: {
      return { ...state, data_3: action.data };
    }
    case GET_DATA_OF_DASHBOARD_4: {
      return { ...state, data_4: action.data };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dailyConsumption
});

export default rootReducer;
