import { statements } from "@babel/template";

export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS'
};

const INITIAL_STATE = {
  data: [],
  loading: false
}

export const playlists = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case Types.GET_REQUEST:
      return {...state, loading: true};
    case Types.GET_SUCCESS:
      return {...state, data: action.payload.data, loading: false};
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistsRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getPlaylistsSuccess: data => ({
    types: Types.GET_SUCCESS,
    payload: {
      data
    }
  })
}