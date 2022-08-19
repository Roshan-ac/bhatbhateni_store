import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const statuses = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})
const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        status: false
    },
    reducers: {
        logout(state, action) {
            state.data = []
            state.status = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state, action) => {
                state.status = statuses.LOADING
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = statuses.IDLE
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = statuses.ERROR
            })

    }
})

export const { logout} = userSlice.actions

export default userSlice.reducer





export const getUser = createAsyncThunk('user/fetch', async () => {
    const token = localStorage.getItem('auth-token')
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        },
    };
    const response = await fetch('http://localhost:3000/api/getuser', requestOptions)
    const jsonData = await response.json()
    return jsonData
})