import {all, takeLatest} from 'redux-saga/effects';
import {Types as PlaylistsTypes} from '../ducks/playlists';
import {getPlaylists} from './playlists';
import {Types as PlaylistsDetailsTypes} from '../ducks/playlistDatail';
import {getPlaylistsDetails} from './playlistDetail';

export default function * rootSaga(){
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistsDetailsTypes.GET_REQUEST, getPlaylistsDetails)
  ]);
};