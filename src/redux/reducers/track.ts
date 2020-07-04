import axios from 'axios';
import { isEqual } from 'lodash';
import { Dispatch } from 'redux';
import { IStation } from '../../Components/Stations/types'

const SET_LOADING_FLAG = 'reducers/track/SET_LOADING_FLAG';
const SET_PAUSE_STATUS = 'reducers/track/SET_PAUSE_STATUS';
const SET_TRACK_INFO = 'reducers/track/SET_TRACK_INFO';
const SET_ACTIVE_STATION = 'reducers/track/SET_ACTIVE_STATION';
const SET_ERROR = 'reducers/track/SET_ERROR';
const CLEAR_TRACK_INFO = 'reducers/track/CLEAR_TRACK_INFO';

export interface ITrack {
  image600: string;
  itunesURL: string;
  title: string;
  artist: string;
}

export interface ITrackState {
  loading: boolean;
  activeStation: IStation;
  isPaused: boolean;
  trackInfo: ITrack;
  trackInfoError: any;
}

const initialState: ITrackState = {
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

const reducer = (state = initialState, action: {type: string; result: any; error: any}) => {
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
    case CLEAR_TRACK_INFO: {
      return {
        ...state,
        trackInfo: {
          image600: '',
          itunesURL: '',
          title: '',
          artist: '',
        }
      };
    }

    default: {
      return state;
    }
  }
};

export const setTrackInfoError = (error: any) => ({
  type: SET_ERROR,
  error
});

export const setLoadingFlag = (flag: boolean) => ({
  type: SET_LOADING_FLAG,
  result: flag
});

export const setPauseStatus = (flag: boolean) => ({
  type: SET_PAUSE_STATUS,
  result: flag
});

export const setData = (data: ITrack) => ({
  type: SET_TRACK_INFO,
  result: data
});

export const setActiveStation = (station: IStation) => ({
  type: SET_ACTIVE_STATION,
  result: station
});

export const getTrackInfo = (activeStation: IStation) => (dispatch: Dispatch) => {
  axios.get(activeStation.textUrl)
    .then(result => dispatch(setData(result.data)))
    .catch (error => dispatch(setTrackInfoError(error)));
};

export const clearTrackInfo = () => ({
  type: CLEAR_TRACK_INFO,
});

export default reducer;