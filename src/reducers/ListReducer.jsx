import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const MoviesThunk = createAsyncThunk('/api/movies', async (payload,thunkAPI) => {

    try{
        const response = await fetch(`https://api.jikan.moe/v4${payload.url}`);
        const data = await response.json();
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
                state.data = action.payload.data
            })

            builder.addCase(MoviesThunk.rejected, (state,action) => {
                state.status = 'error'
                state.error = action.payload

            })

        }
})

export const { setMovie } = listSlice.actions;
export default listSlice.reducer;
