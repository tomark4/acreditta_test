import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CategoriesT, ParamsI, StateI } from "../interfaces/marvel.interface";
import { getCharacters, getComics, getSeries, getStories } from "../services/marvel.service";


export const fetchData = createAsyncThunk(
    'marvel/getCharacters',
    async ( params:ParamsI,{rejectWithValue}) => {
        try{
            const { category, name } = params;
            let resp:any;

            switch(category){
                case "characters":
                    resp = await getCharacters(name)
                break;

                case "comics":
                    resp = await getComics(name)
                break;

                case "series":
                    resp = await getSeries(name)
                break;
                
                case "stories":
                    resp = await getStories(name)
                break;
            }
            return resp.data.data.results;
        } catch(e){
            return rejectWithValue("Ocurrió un error");
        }
    }
);

export const initialState:StateI = {
    loading: false,
    data: [],
    category: "characters",
    searchText: ""
}

const marvelSlice = createSlice({
    name: 'marvel',
    initialState,
    reducers:{
        updateSearchText: (state, action:PayloadAction<string>) => {
            state.searchText = action.payload;
        },
        updateCategory:(state, action:PayloadAction<CategoriesT>) => {
            state.category = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.data = [];
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action:any) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchData.rejected, (state, action:any) => {
            console.log(action.payload);
            state.loading = false;
        })
    }    
})

export const { updateCategory, updateSearchText } = marvelSlice.actions;

export default marvelSlice.reducer;