import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../Urls";


export const MoviesThunk = createAsyncThunk('/api/movies', async (payload,thunkAPI) => {

    try{
        const response = await fetch(`${BASE_URL}${payload.url}`);
        const data = await response.json();
        console.log(data)
        return data

    }catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err)
    }

})

const initialState = {
    status:'idle',
    data:null,
    error:null
}

const listSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovie:(state,action) => {
            state.status = 'success'
            state.data = action.payload
        },
    },
    extraReducers:
        (builder) => {
            builder.addCase(MoviesThunk.pending, (state,action) => {
                state.status = 'loading'
            })

            builder.addCase(MoviesThunk.fulfilled, (state,action) => {
                state.status = 'success'
                state.data = action.payload
            })

            builder.addCase(MoviesThunk.rejected, (state,action) => {
                state.status = 'error'
                state.error = action.payload

            })

        }
})

export const { setMovie } = listSlice.actions;
export default listSlice.reducer;
