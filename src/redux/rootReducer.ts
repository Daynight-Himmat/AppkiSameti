import authSlice from './auth/authSlice';
import authApi from '../services/authService';
import {removeAuthToken} from '../helpers/api';
import {AnyAction, combineReducers} from 'redux';
import {removeData} from '../helpers/localstorage';
import {ASYNC_STORE_VAR} from '../constants/constants';

const appReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authSlice.reducer,
});

export default (state: any, action: AnyAction) => {
  // if (action.type === REMOVE_USER_DATA) {
  //   state = undefined;
  // } else if (action.type === LOGOUT) {
  state = undefined;
  removeData(ASYNC_STORE_VAR.token);
  removeAuthToken();
  // }
  return appReducer(state, action);
};
