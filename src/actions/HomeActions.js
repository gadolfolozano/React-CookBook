import { BASE_API, GET_DASHBOARD } from '../config'

//Logout
export const REQUEST_GET_DASHBOARD = 'REQUEST_GET_DASHBOARD'
export const GET_DASHBOARD_SUCCESS = 'GET_DASHBOARD_SUCCESS'
export const GET_DASHBOARD_ERROR = 'GET_DASHBOARD_ERROR'

export const getDashboard = (token) => dispatch => {
  if(token){
    dispatch(performGetDashboard(token))
  }else {
    dispatch(getDashboardError())
  }
}

const performGetDashboard = (token) => dispatch => {
    dispatch(requestGetDashboard())
    return fetch(BASE_API.concat(GET_DASHBOARD), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token})
    })
    .then(response => response.json())
    .then(json => {
      if(json.error) {
        dispatch(getDashboardError())
      } else {
        dispatch(getDashboardSuccess(json))
      }
    })
}

const requestGetDashboard = () => ({
  type: REQUEST_GET_DASHBOARD
})

const getDashboardSuccess = (json) => ({
  type: GET_DASHBOARD_SUCCESS,
  response: json
})

//TODO manage expiered session
const getDashboardError = () => ({
  type: GET_DASHBOARD_ERROR
})
