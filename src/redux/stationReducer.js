export const initialState = {
  favoriteList: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addToFavoriteList': {
      return {
        ...state,
        favoriteList: {
          ...state.favoriteList,
          [action.result.id]: action.result
        }
      };
    }
    case 'removeFromFavoriteList': {
      return {
        ...state,
        favoriteList: delete(state.favoriteList[action.result.id])
      };
    }
    default: 
      return { ...state };
  }
};

export const addToFavoriteList = station => ({
  type: 'addToFavoriteList',
  result: station
});

export const removeFromFavoriteList = station => ({
  type: 'removeFromFavoriteList',
  result: station
});

export default reducer;
