import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import itemReducer from './Slices/itemsSlice'
const Store = configureStore({
  reducer: {
    counter: counterReducer,
    items:itemReducer
  },
})

export default Store