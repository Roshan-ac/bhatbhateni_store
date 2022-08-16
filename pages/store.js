import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import itemReducer from './Slices/itemsSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    items:itemReducer
  },
})

export default store