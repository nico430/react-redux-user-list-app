import { createSlice } from '@reduxjs/toolkit';
// axios
import axios from 'axios'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {
    // here we can set the actions
    // actions are functions to comunicate the component and the storage
    // the action has a property called payload who brings the data
    setUserList: (state,action)=>{
      state.list = action.payload;
    }

  }
});

// we can export the action of above to be used
export const { setUserList } = userSlice.actions;

export default userSlice.reducer

// this function has to return another function
// that return is expressed in a implicit way
export const fetchAllUsers = () => (dispatch) => {
  axios.get('https://reqres.in/api/users?per_page=12').then((response)=>{
    dispatch(setUserList(response.data.data)) // it is needed to use a dispatcher 
  }).catch(error => console.log(error))
}
// redux manage the network petitions by a middleware ( dank is the default one)
// a dispatcher is who is encharged to execute the action 