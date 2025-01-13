import { combineReducers } from '@reduxjs/toolkit';
import users from './users';
import profile from './profile';
import auth from './auth';
import movie from './movie';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const authConfig = {
    key : 'auth',
    storage,
}

const usersConfig = {
    key : 'users',
    storage,
}
const profileConfig = {
    key : 'profile',
    storage,
}
const reducer = combineReducers({
    users : persistReducer(usersConfig, users),
    profile: persistReducer(profileConfig, profile),
    auth : persistReducer(authConfig, auth),
    movie,
});
export default reducer;
