import {combineReducers} from 'redux';
import playlists from './playlists';
import playlistsDetails from './playlistDatail';
import error from './error';

const reducers = combineReducers({
  playlists,
  playlistsDetails,
  error
});

export default reducers;