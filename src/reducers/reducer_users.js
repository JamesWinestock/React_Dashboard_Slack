import { FETCH_USERS, FETCH_USER, UPDATE_USER, AUTH_USER, UNAUTH_USER, CHECK_AUTH } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  users: null,
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
 };


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload.data}
    case FETCH_USERS:
      return { ...state, all: action.payload.data }
    case UPDATE_USER:
      return { ...state, user: action.payload.data}
    case AUTH_USER:
      return { ...state, isAuthed: action.payload.data}
    default:
      return state;
  }
}
