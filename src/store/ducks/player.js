import Sound from 'react-sound';
export const Types = {
  LOAD: 'player/LOAD',
};

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING
}

const player = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case Types.LOAD:
      return {...state, currentSong: action.payload.song, status: Sound.status.PLAYING };
    case Types.HIDE:
      return {...state, visible: false};
    default:
      return state;
  }
}

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: {
      song
    }
  }),
}

export default player;