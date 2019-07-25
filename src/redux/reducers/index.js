import { combineReducers } from 'redux';
import track from './track';
import favoriteList from './favoriteList';

export default combineReducers({
    track,
    favoriteList,
});