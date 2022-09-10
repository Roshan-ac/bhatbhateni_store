import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './pages/Slices/counterSlice'
import itemReducer from './pages/Slices/itemsSlice'
import userReducer from './pages/Slices/userSlice'
import oderReducer from './pages/Slices/oderSlice'
 const Store = configureStore({
  reducer: {
    counter: counterReducer,
    product:itemReducer,
    user:userReducer,
    oder:oderReducer
  },
})

export default Store