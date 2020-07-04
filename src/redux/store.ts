import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { ITrackState } from './reducers/track';
import { IFavoriteListState } from './reducers/favoriteList';

export interface IStore {
  track: ITrackState;
  favoriteList: IFavoriteListState;
}

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
