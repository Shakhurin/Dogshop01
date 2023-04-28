import { configureStore } from "@reduxjs/toolkit";
import { REDUX_LC, getInitialData } from "./initialState";
import { userReducer } from "./slices/userSlice";
import { filterReducer } from "./slices/filterSlice";


export const store = configureStore({
  reducer:{
    user: userReducer,
    filter: filterReducer,
  },
  preloadedState: getInitialData()
})

store.subscribe(()=>{
  localStorage.setItem(REDUX_LC, JSON.stringify(store.getState()))
})