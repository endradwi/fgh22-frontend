import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data : []
};

const users = createSlice({
name: 'users',
initialState,
reducers: {
    addUsers: (state, action) => {
        if (Array.isArray(action.payload)) {
            state.data = [...state.data, ...action.payload]; // Menambahkan array ke dalam array
        } else {
            state.data = [...state.data, action.payload]; // Menambahkan objek individual
        }
    }
    // addUsers: (state, action) => {
        // state.data = [...state.data, action.payload]
    // },
},
});


export const { addUsers } = users.actions;
export default users.reducer;
