import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data : []
};

const users = createSlice({
name: 'users',
initialState,
reducers: {
    addUsers: (state, action) => {
        state.data = [...state.data, action.payload]
    },
},
});

export const { addUsers } = users.actions;
export default users.reducer;
