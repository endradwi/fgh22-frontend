import { combineReducers } from '@reduxjs/toolkit';
import users from './users';
// import profile from './profile';
// import auth from './auth';

const reducer = combineReducers({
    users,
    // profile,
    // auth,
});
export default reducer;
