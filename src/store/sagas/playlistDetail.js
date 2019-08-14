import {call, put} from 'redux-saga/effects';
import API from '../../services/api';

import {Creators as PlaylistsDetailsActions} from '../ducks/playlistDatail';

export function * getPlaylistsDetails(action){
  try{
    const response = yield call(API.get, `/playlists/${action.payload.id}?_embed=songs`);
    yield put(PlaylistsDetailsActions.getPlaylistsDetailSuccess(response.data));
  }catch(err){
    console.log(err)
  }
}