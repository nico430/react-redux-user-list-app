import { configureStore } from '@reduxjs/toolkit'
// reducer
import users from './slices/users'

// a reducer if made of all app slices reducer
// an slices is like a the store of every component like the state in react-context
export default configureStore({
  reducer: {
    users
  }
})