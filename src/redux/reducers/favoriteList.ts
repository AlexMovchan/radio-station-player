import { IStation } from '../../Components/Stations/types';

const ADD_TO_FAVORITE_LIST = 'reducers/favoriteList/ADD_TO_FAVORITE_LIST';
const REMOVE_FROM_FAVORITE_LIST = 'reducers/favoriteList/REMOVE_FROM_FAVORITE_LIST';
const SET_LIST_FROM_STORAGE = 'reducers/favoriteList/SET_LIST_FROM_STORAGE';

export interface IFavoriteListState {
  favoriteList: {
    [stationId: string]: IStation
  }
}

const initialState: IFavoriteListState = {
  favoriteList: {}
};

const reducer = (state = initialState, action: {type: string; result: IStation}) => {
  switch (action.type) {
    case ADD_TO_FAVORITE_LIST: {
      const mergedObj = {
        ...state,
        favoriteList: {
          ...state.favoriteList,
          [action.result.id]: action.result
        }
      };
      window.localStorage.setItem('favoriteList', JSON.stringify(mergedObj));
      return mergedObj;
    }
    case REMOVE_FROM_FAVORITE_LIST: {
      let clonedFavList = { ...state.favoriteList };
      delete clonedFavList[action.result.id];
      window.localStorage.setItem('favoriteList', JSON.stringify(clonedFavList));
      return {
        ...state,
        favoriteList: clonedFavList
      };
    }
    case SET_LIST_FROM_STORAGE: {
      return {
        ...state,
        favoriteList: action.result
      };
    }
    default:
      return { ...state };
  }
};

export const addToFavoriteList = (station: IStation) => ({
  type: ADD_TO_FAVORITE_LIST,
  result: station
});

export const removeFromFavoriteList = (station: IStation) => ({
  type: REMOVE_FROM_FAVORITE_LIST,
  result: station
});

export const setFavoriteListFromLocalStorage = (favoriteList: IStation[]) => ({
  type: SET_LIST_FROM_STORAGE,
  result: favoriteList
});

export default reducer;
