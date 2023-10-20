import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../Urls";

export const PreferenceThunk = createAsyncThunk('/api/preference', async (payload,thunkAPI) => {

    try{
        console.log(payload)
        const pref = await fetch(`${BASE_URL}${payload.url}`,{
            credentials:'include',
        });
        const prefData = await pref.json();
        console.log(prefData)
        return prefData
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

const preferenceSlice = createSlice({
    name:'preference',
    initialState,
    reducers:{
        setPreference:(state,action) => {
            state.data = action.payload
        },
    },
    extraReducers:
    (builder) => {
        builder.addCase(PreferenceThunk.pending, (state,action) => {
            state.status = 'loading'
        })

        builder.addCase(PreferenceThunk.fulfilled, (state,action) => {
            state.status = 'success'
            state.data = action.payload
        })

        builder.addCase(PreferenceThunk.rejected, (state,action) => {
            state.status = 'error'
            state.error = action.payload

        })
    }
})

export const { setPreference } = preferenceSlice.actions;
export default preferenceSlice.reducer;
