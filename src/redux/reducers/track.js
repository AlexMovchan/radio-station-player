import axios from 'axios';
import _ from 'lodash';

const SET_LOADING_FLAG = 'reducers/track/SET_LOADING_FLAG';
const SET_PAUSE_STATUS = 'reducers/track/SET_PAUSE_STATUS';
const SET_TRACK_INFO = 'reducers/track/SET_TRACK_INFO';
const SET_ACTIVE_STATION = 'reducers/track/SET_ACTIVE_STATION';
const SET_ERROR = 'reducers/track/SET_ERROR';

const initialState = {
  loading: false,
  activeStation: {
    prefix: '',
    id: 0,
    name: '',
    url: '',
    textUrl: ''
  },
  isPaused: true,
  trackInfo: {
    image600: '',
    itunesURL: '',
    title: '',
    artist: '',
  },
  trackInfoError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_FLAG: {
      return {
          ...state,
          loading: action.result
      };
    }
    case SET_PAUSE_STATUS: {
      return { ...state, isPaused: action.result};
    }
    case SET_TRACK_INFO: {
      return {
        ...state,
        trackInfo: action.result,
        trackInfoError: null
      };
    }
    case SET_ACTIVE_STATION: {
      return {
        ...state,
        activeStation: action.result
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        trackInfoError: action.error
      };
    }

    default: {
      return state;
    }
  }
};

export const setTrackInfoError = error => ({
  type: SET_ERROR,
  error
});

export const setLoadingFlag = flag => ({
  type: SET_LOADING_FLAG,
  result: flag
});

export const setPauseStatus = flag => ({
  type: SET_PAUSE_STATUS,
  result: flag
});

export const setData = data => ({
  type: SET_TRACK_INFO,
  result: data
});

export const setActiveStation = station => ({
  type: SET_ACTIVE_STATION,
  result: station
});

export const getTrackInfo = (activeStation, trackInfo) => dispatch => {
  axios.get(activeStation.textUrl)
    .then(result => {
      if (!_.isEqual(result.data, trackInfo) && typeof result.data === 'object') {
        dispatch(setData(result.data));
      }
    })
    .catch (error => dispatch(setTrackInfoError(error)));
};

export default reducer;