import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const statuses = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})
const oderSlice = createSlice({
    name: 'oder',
    initialState: {
        status: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(MakeOder.pending, (state, action) => {
                state.status = statuses.LOADING
            })
            .addCase(MakeOder.fulfilled, (state, action) => {
                state.status = statuses.IDLE
                state.status = true
            })
            .addCase(MakeOder.rejected, (state, action) => {
                state.status = statuses.ERROR
            })

    }
})

export default oderSlice.reducer





export const MakeOder = createAsyncThunk('oder/upload', async (action) => {
    const { _id, email, phonenumber, address } = action
   
        const requestOptions = {
            method: 'POST',
        };
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API}oder`, requestOptions)
        const jsonData = await response.json()
        return jsonData

})