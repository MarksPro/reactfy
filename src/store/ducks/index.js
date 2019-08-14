import {combineReducers} from 'redux';
import playlists from './playlists';
import playlistsDetails from './playlistDatail';
import error from './error';
import player from './player';

const reducers = combineReducers({
  playlists,
  playlistsDetails,
  error,
  player
});

export default reducers;