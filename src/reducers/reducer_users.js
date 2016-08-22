import { FETCH_USERS, FETCH_USER, UPDATE_USER } from '../actions/index';

const INITIAL_STATE = { all: [], users: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload.data}
    case FETCH_USERS:
      return { ...state, all: action.payload.data }
    case UPDATE_USER:
      return { ...state, user: action.payload.data}
    default:
      return state;
  }
}
