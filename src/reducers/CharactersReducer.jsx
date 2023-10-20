import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../Urls";



export const CharacterThunk = createAsyncThunk('/api/characters',async (payload,thunkAPI) => {

    try{
        const response = await fetch(`${BASE_URL}/${payload.url}`)
        const data = await response.json()
        return data

    }catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err)
    }

})  

const initialState = {
    status:'idle',
    data:null,
    error:null
}

const characterSlice = createSlice({
    name:'characters',
    initialState,
    reducers:{
        setCharacters:(state,action) => {
            state.data = action.payload
        },
    },
    extraReducers:
    (builder) => {
        builder.addCase(CharacterThunk.pending, (state,action) => {
            state.status = 'loading'
        })

        builder.addCase(CharacterThunk.fulfilled, (state,action) => {
            state.status = 'success'
            state.data = action.payload.data
        })

        builder.addCase(CharacterThunk.rejected, (state,action) => {
            state.status = 'error'
            state.error = action.payload

        })
    }
})

export const { setCharacters } = characterSlice.actions;
export default characterSlice.reducer;
