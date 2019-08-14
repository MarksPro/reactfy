export const Types = {
  GET_REQUEST: 'playlistDatails/GET_REQUEST',
  GET_SUCCESS: 'playlistDatails/GET_SUCCESS'
};

const INITIAL_STATE = {
  data: {},
  loading: false
}

const playlistDatails = (state = INITIAL_STATE, action) => {
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
  getPlaylistsDetailRequest: id => ({
    type: Types.GET_REQUEST,
    payload: {
      id
    }
  }),
  getPlaylistsDetailSuccess: data => {
  return ({
    type: Types.GET_SUCCESS,
    payload: {
      data
    }
  })}
}

export default playlistDatails;