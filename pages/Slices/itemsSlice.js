import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        filterItem: false
    },
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        filterSlug(state, action) {
            state.filterItem= state.data.filter(state => state.slug === action.payload)
        }
    }
})

export const { setData, filterSlug } = productSlice.actions

export default productSlice.reducer