import { combineReducers } from 'redux';
import UserReducer from './reducer_users';
import AuthReducer from './reducer_auth';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  users: UserReducer,
  auth: AuthReducer,
  form: formReducer
});

export default rootReducer;
