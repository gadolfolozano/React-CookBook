import { BASE_API, GET_DASHBOARD } from '../config';

export const REQUEST_GET_DASHBOARD = 'REQUEST_GET_DASHBOARD';
export const GET_DASHBOARD_SUCCESS = 'GET_DASHBOARD_SUCCESS';
export const GET_DASHBOARD_ERROR = 'GET_DASHBOARD_ERROR';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';

export const toggleCategory = id => ({
  type: TOGGLE_CATEGORY,
  id,
});

const requestGetDashboard = () => ({
  type: REQUEST_GET_DASHBOARD,
});

const getDashboardSuccess = json => ({
  type: GET_DASHBOARD_SUCCESS,
  response: json,
});

// TODO manage expired session
const getDashboardError = () => ({
  type: GET_DASHBOARD_ERROR,
});

const performGetDashboard = token => (dispatch) => {
  dispatch(requestGetDashboard());
  return fetch(BASE_API.concat(GET_DASHBOARD), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token,
    },
  })
    .then(response => response.json())
    .then((json) => {
      if (json.error) {
        dispatch(getDashboardError());
      } else {
        dispatch(getDashboardSuccess(json));
      }
    });
};

export const getDashboard = token => (dispatch) => {
  if (token) {
    dispatch(performGetDashboard(token));
  } else {
    dispatch(getDashboardError());
  }
};
