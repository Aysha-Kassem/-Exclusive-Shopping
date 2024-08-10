import { configureStore } from '@reduxjs/toolkit'


// slice
import user from './user';



const store = configureStore({
  reducer: {user},
})

export default store;
