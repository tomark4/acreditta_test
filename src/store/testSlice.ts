import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AppThunk } from "../app/store"


interface StateI {
    value: number
}

const initialState:StateI = {
    value: 0
}

const fetchData = ():Promise<number> => {
    return new Promise((resolve:any, reject:any) => {
        try{
            setTimeout(() => {
                resolve(50)
            },800)
        } catch(e){
            reject()
        }
    })
}

export const fakeApiCall = createAsyncThunk(
    'test/fakeApiCall',
    async (amount: number) => {
        const resp = await fetchData();
        return resp;
    }
);

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers:{
        incrementValue(state, action){
            state.value += action.payload
        },
        decrement(state, action){
            state.value -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fakeApiCall.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
    
})

export const { incrementValue, decrement } = testSlice.actions;

export const incrementIfNana = (amount: number):AppThunk => async (dispatch, getState) => {
    let {value} = getState().test;
    const r = await fetchData();
    console.log(r)
    dispatch(incrementValue(value+amount));
};


export default testSlice.reducer;