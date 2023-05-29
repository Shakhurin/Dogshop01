import { configureStore } from "@reduxjs/toolkit";
import { REDUX_STATE_LC, getInitialData } from "./initialState";
import { userReducer } from "./slices/userSlice";
import { filterReducer } from "./slices/filterSlice";
import { cartReducer } from "./slices/cartSlice";
import { favouritesReducer } from "./slices/favouritesSlice";


export const store = configureStore({
  reducer:{
    user: userReducer,
    filter: filterReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
  },
  preloadedState: getInitialData()
})

store.subscribe(()=>{
  localStorage.setItem(REDUX_STATE_LC, JSON.stringify(store.getState()))
})

