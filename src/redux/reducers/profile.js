import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const profile = createSlice({
name: 'profile',
initialState,
reducers: {
    addProfile: (state, action) => {
        state.data = action.payload
        if(state.data !== ''){
            state.data = [...state.data, action.payload]
        }
    },
},
});

export const { addProfile } = profile.actions;
export default profile.reducer;
