import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movie :{
        movie_image : '',
        tittle : '',
        genre : '',
    },
    seat : [],
    payment : ""
}

const movie = createSlice({
name: 'movie',
initialState,
reducers: {
    addMovie: (state, action) => {
        // if (Array.isArray(action.payload)) {
        //     state.data = [...state.data, ...action.payload]; // Menambahkan array ke dalam array
        // } else {
        //     state.data = [...state.data, action.payload]; // Menambahkan objek individual
        // }
        state.movie = action.payload
    },
    addSeat: (state,action) =>{
        state.seat = [...state.seat, action.payload]
    },
    addPaymentM: (state,action) =>{
        state.payment = action.payload
    }
},
});

export const { addMovie, addSeat, addPaymentM } = movie.actions;
export default movie.reducer;
