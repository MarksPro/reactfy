import {call, put} from 'redux-saga/effects';
import API from '../../services/api';

import {Creators as PlaylistsActions} from '../ducks/playlists';
import {Creators as ErrorActions} from '../ducks/error';

export function * getPlaylists(){
  try{
    const response = yield call(API.get, '/playlists');
    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  }catch(err){
    yield put(ErrorActions.setError('Não foi possivel obter as playlists'));
  }
}