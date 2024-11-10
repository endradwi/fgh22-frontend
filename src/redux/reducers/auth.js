import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : '',
}

const token = createSlice({
    name : 'token',
    initialState,
    reducers : {
        auth:(state,action)=>{
            
        }
    }
})