import { HttpUtil } from "../utils/http-utils";

const getData = (data, type) => ({
  type: type,
  data
});

const fetchData = (name, type) => dispatch =>
  HttpUtil.makeGET(
    `https://api.thingspeak.com/channels/293833/fields/${name}.json?results=10`,
    {}
  ).then(response => {
    try {
      dispatch(getData(response.data.feeds, type));
    } catch (error) {
      console.log(error);
    }
    return response;
  });

export const actions = {
  fetchData
};
