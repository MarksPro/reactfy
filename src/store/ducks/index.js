import {combineReducers} from 'redux';
import playlists from './playlists';
import playlistsDetails from './playlistDatail';

const reducers = combineReducers({
  playlists,
  playlistsDetails
});

export default reducers;