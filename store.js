import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './pages/Slices/counterSlice'
import itemReducer from './pages/Slices/itemsSlice'
 const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default Store