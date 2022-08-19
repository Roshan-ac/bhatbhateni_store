import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { title, price, img, _id } = action.payload
      const itemsinCart = state.items.find((item) => item.id === _id)
      if (itemsinCart) {
        itemsinCart.count += 1
        itemsinCart.totalPrice += price
      } else {
        const item = {
          id: _id,
          count: 1,
          title: title,
          price: price,
          totalPrice: price,
          image: img,
        }
        state.items.push(item)
      }



    },
    deleteItem: (state) => {

    },
    increment: (state, action) => {
      const { price } = action.payload
      const index = state.items.findIndex(el => el.id === action.payload.id)
      state.items[index].totalPrice += price
      state.items[index].count += 1
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload.id)
      const { price, count } = action.payload
      state.items[index].totalPrice -= price
      count <= 1 ? state.items.splice(index, 1) : state.items[index].count -= 1;

    },
    clearItem: (state, action) => {
      state.items = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, increment, decrement, clearItem } = counterSlice.actions

export default counterSlice.reducer