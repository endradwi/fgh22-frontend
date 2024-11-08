import { createSlice } from '@reduxjs/toolkit';

const initialState = [
{
email: 'admin@mail.com',
password: '123',
},
{
email: 'aku@mail.com',
password: '321',
},
];

const login = createSlice({
name: 'login',
initialState,
reducers: {
    saveLogin: (state, action) => {
    state.email = action.payload.email;
    state.password = action.payload.password;
    },
},
});

export const { saveLogin } = login.actions;
export default login.reducer;
