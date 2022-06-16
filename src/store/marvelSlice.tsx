import { createSlice } from "@reduxjs/toolkit"
import { getCharacters } from "../services/marvel.service";

interface StateI {
    loading: boolean,
    data: any[],
    type: "characters" | "comics" | "stories" | "series"
}

const initialState:StateI = {
    loading: false,
    data: [],
    type: "characters"
}

const marvelSlice = createSlice({
    name: 'marvel',
    initialState,
    reducers:{
        updateType:(state, action) => {
            state.type = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCharacters.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getCharacters.fulfilled, (state, action:any) => {
            state.data = action.payload;
            state.loading = false;
        })
    }    
})

export const { updateType } = marvelSlice.actions;

export default marvelSlice.reducer;