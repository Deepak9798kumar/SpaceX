// reducers.js
import {
  FETCH_UPCOMING_LAUNCHES_REQUEST,
  FETCH_UPCOMING_LAUNCHES_SUCCESS,
  FETCH_UPCOMING_LAUNCHES_FAILURE,
  FETCH_PREVIOUS_LAUNCHES_REQUEST,
  FETCH_PREVIOUS_LAUNCHES_SUCCESS,
  FETCH_PREVIOUS_LAUNCHES_FAILURE,
} from '../actions/index';

const initialState = {
  upcomingLaunches: {
    loading: false,
    data: [],
    error: null,
  },
  previousLaunches: {
    loading: false,
    data: [],
    error: null,
  },
};

const launchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_LAUNCHES_REQUEST:
      return {
        ...state,
        upcomingLaunches: { ...state.upcomingLaunches, loading: true },
      };
    case FETCH_UPCOMING_LAUNCHES_SUCCESS:
      return {
        ...state,
        upcomingLaunches: { loading: false, data: action.payload, error: null },
      };
    case FETCH_UPCOMING_LAUNCHES_FAILURE:
      return {
        ...state,
        upcomingLaunches: { loading: false, data: [], error: action.payload },
      };
    case FETCH_PREVIOUS_LAUNCHES_REQUEST:
      return {
        ...state,
        previousLaunches: { ...state.previousLaunches, loading: true },
      };
    case FETCH_PREVIOUS_LAUNCHES_SUCCESS:
      return {
        ...state,
        previousLaunches: { loading: false, data: action.payload, error: null },
      };
    case FETCH_PREVIOUS_LAUNCHES_FAILURE:
      return {
        ...state,
        previousLaunches: { loading: false, data: [], error: action.payload },
      };
    default:
      return state;
  }
};

export default launchesReducer;