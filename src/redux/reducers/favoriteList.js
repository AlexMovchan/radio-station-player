const ADD_TO_FAVORITE_LIST= 'reducers/favoriteList/ADD_TO_FAVORITE_LIST';
const REMOVE_FROM_FAVORITE_LIST= 'reducers/favoriteList/REMOVE_FROM_FAVORITE_LIST';

const initialState = {
  favoriteList: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE_LIST: {
      return {
        ...state,
        favoriteList: {
          ...state.favoriteList,
          [action.result.id]: action.result
        }
      };
    }
    case REMOVE_FROM_FAVORITE_LIST: {
      let clonedFavList = { ...state.favoriteList };
      delete clonedFavList[action.result.id]
      return {
        ...state,
        favoriteList: clonedFavList
      };
    }
    default:
      return { ...state };
  }
};

export const addToFavoriteList = station => ({
  type: ADD_TO_FAVORITE_LIST,
  result: station
});

export const removeFromFavoriteList = station => ({
  type: REMOVE_FROM_FAVORITE_LIST,
  result: station
});

export default reducer;
