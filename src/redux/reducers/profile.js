import { createSlice } from '@reduxjs/toolkit';

const initialState = [
{
firstName: 'admin@mail.com',
lastName: '123',
email: '',
phone: ''
},
{
firstName: 'admin@mail.com',
lastName: '123',
email: '',
phone: ''
},

];

const profile = createSlice({
name: ' profile',
initialState,
reducers: {
    saveProfile: (state, action) => {
    state.firstName = action.payload.firstName
    state.lastName = action.payload.lastName
    state.email = action.payload.email;
    state.phone = action.payload.phone;
    },
},
});

export const { saveProfile } =  profile.actions;
export default  profile.reducer;
