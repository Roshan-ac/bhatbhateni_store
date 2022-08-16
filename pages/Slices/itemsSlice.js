import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    value:[]
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state,action) => {
        state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem } = itemsSlice.actions

export default itemsSlice.reducer