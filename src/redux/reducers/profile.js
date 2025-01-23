import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {}
}

const profile = createSlice({
name: 'profile',
initialState,
reducers: {
    addProfile: (state, action) => {
        // if(state.data !== ''){
            // state.data = [...state.data, action.payload]
        // }
        state.data = {...state.data, ...action.payload}
    },
    logoutProfile: () =>{
        return initialState
    }
},
});

export const { addProfile, logoutProfile } = profile.actions;
export default profile.reducer;
