import { createSlice } from '@reduxjs/toolkit';

const initialState = {
token: '',
};

const auth = createSlice({
name: 'auth',
initialState,
reducers: {
    authentic: (state, action) => {
    state.token = action.payload;
    },
    logout:()=>{
        return initialState
    }
},
});

export const { authentic, logout } = auth.actions;
export default auth.reducer;
