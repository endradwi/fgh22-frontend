import { combineReducers } from '@reduxjs/toolkit';
import login from './login';
import profile from './profile';

const reducer = combineReducers({
    login,
    profile,
});
export default reducer;
