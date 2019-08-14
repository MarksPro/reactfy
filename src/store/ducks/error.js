export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE'
};

const INITIAL_STATE = {
  visible: false,
  message: null
}

const error = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case Types.SET:
      return {...state, visible: true, message: action.payload.message};
    case Types.HIDE:
      return {...state, visible: false};
    default:
      return state;
  }
}

export const Creators = {
  setError: message => ({
    type: Types.SET,
    payload: {
      message
    }
  }),
  hideError: () => {
  return ({
    type: Types.GET_SUCCESS,
  })}
}

export default error;