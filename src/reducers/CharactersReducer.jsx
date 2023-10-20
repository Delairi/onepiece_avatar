import { createSlice } from "@reduxjs/toolkit";



const initialState = {}

const characterSlice = createSlice({
    name:'character',
    initialState,
    reducers:{
        setMovie:(state,action) => {
            return action.payload
        },
    }
})

export const { setMovie } = characterSlice.actions;
export default characterSlice.reducer;
