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
      let clonedFavList = {...state.favoriteList};
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
  type: 'addToFavoriteList',
  result: station
});

export const removeFromFavoriteList = station => ({
  type: 'removeFromFavoriteList',
  result: station
});

export default reducer;
