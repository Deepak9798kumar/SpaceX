// actions.js
import axios from 'axios';

export const FETCH_UPCOMING_LAUNCHES_REQUEST = 'FETCH_UPCOMING_LAUNCHES_REQUEST';
export const FETCH_UPCOMING_LAUNCHES_SUCCESS = 'FETCH_UPCOMING_LAUNCHES_SUCCESS';
export const FETCH_UPCOMING_LAUNCHES_FAILURE = 'FETCH_UPCOMING_LAUNCHES_FAILURE';

export const FETCH_PREVIOUS_LAUNCHES_REQUEST = 'FETCH_PREVIOUS_LAUNCHES_REQUEST';
export const FETCH_PREVIOUS_LAUNCHES_SUCCESS = 'FETCH_PREVIOUS_LAUNCHES_SUCCESS';
export const FETCH_PREVIOUS_LAUNCHES_FAILURE = 'FETCH_PREVIOUS_LAUNCHES_FAILURE';

const fetchUpcomingLaunchesRequest = () => ({ type: FETCH_UPCOMING_LAUNCHES_REQUEST });
const fetchUpcomingLaunchesSuccess = (launches) => ({ type: FETCH_UPCOMING_LAUNCHES_SUCCESS, payload: launches });
const fetchUpcomingLaunchesFailure = (error) => ({ type: FETCH_UPCOMING_LAUNCHES_FAILURE, payload: error });

const fetchPreviousLaunchesRequest = () => ({ type: FETCH_PREVIOUS_LAUNCHES_REQUEST });
const fetchPreviousLaunchesSuccess = (launches) => ({ type: FETCH_PREVIOUS_LAUNCHES_SUCCESS, payload: launches });
const fetchPreviousLaunchesFailure = (error) => ({ type: FETCH_PREVIOUS_LAUNCHES_FAILURE, payload: error });

export const fetchUpcomingLaunches = () => {
    return async (dispatch) => {
        dispatch(fetchUpcomingLaunchesRequest());
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
            dispatch(fetchUpcomingLaunchesSuccess(response.data));
        } catch (error) {
            dispatch(fetchUpcomingLaunchesFailure(error.message));
        }
    };
};

export const fetchPreviousLaunches = () => {
    return async (dispatch) => {
        dispatch(fetchPreviousLaunchesRequest());
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/launches/past');
            dispatch(fetchPreviousLaunchesSuccess(response.data));
        } catch (error) {
            dispatch(fetchPreviousLaunchesFailure(error.message));
        }
    };
};