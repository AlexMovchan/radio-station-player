export const initialState = {
  loading: false,
  activeStation: {
    prefix: '1980'
  },
  isPaused: false,
  trackInfo: {
    image600: '',
    itunesURL: '',
    title: '',
    artist: '',
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setLoadingFlag': {
      return { ...state, loading: action.result };
    }
    case 'setPauseStatus': {
      return { ...state, isPaused: action.result};
    }
    case 'setData': {
      return { 
        ...state,
        trackInfo: action.result
      };
    }
    case 'setActiveStation': {
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
  type: 'setLoadingFlag',
  result: flag
});

export const setPauseStatus = flag => ({
  type: 'setPauseStatus',
  result: flag
});

export const setData = data => ({
  type: 'setData',
  result: data
});

export const setActiveStation = station => ({
  type: 'setActiveStation',
  result: station
});

export default reducer;