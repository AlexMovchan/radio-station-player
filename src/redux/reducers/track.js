const SET_LOADING_FLAG = 'reducers/track/SET_LOADING_FLAG';
const SET_PAUSE_STATUS = 'reducers/track/SET_PAUSE_STATUS';
const SET_DATA = 'reducers/track/SET_DATA';
const SET_ACTIVE_STATION = 'reducers/track/SET_ACTIVE_STATION';

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
  }
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
    case SET_DATA: {
      return {
        ...state,
        trackInfo: action.result
      };
    }
    case SET_ACTIVE_STATION: {
      return {
        ...state,
        activeStation: action.result
      };
    }

    default: {
      return state;
    }
  }
};

export const setLoadingFlag = flag => ({
  type: SET_LOADING_FLAG,
  result: flag
});

export const setPauseStatus = flag => ({
  type: SET_PAUSE_STATUS,
  result: flag
});

export const setData = data => ({
  type: SET_DATA,
  result: data
});

export const setActiveStation = station => ({
  type: SET_ACTIVE_STATION,
  result: station
});

export default reducer;