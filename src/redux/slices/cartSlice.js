import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";

const cartSlice = createSlice({
  name: "cart",
  initialState: myInitialState.cart,
  reducers: {
    addToCart(state, action) {
      const product = state.find(el => el._id === action.payload)

      if (product) {
        product.count++
        return;
      }

      state.push({ _id: action.payload, count: 1, isSelected: false })
    },

    deleteFromCart(state,action){
      return state.filter((product) => product._id !== action.payload)
    },

    incrementCart(state, action) {
      const product = state.find((el) => el._id === action.payload); // action payload - id продукта
      
      if (product) {
        product.count++;
        return; 
      }
    },

    decrementCart(state, action) {
      const product = state.find((el) => el._id === action.payload); // action payload - id продукта

      if (product) {
        if(product.count > 1){
          product.count--;
          return
        }

        return state.filter((product) => product._id !== action.payload)
      }
    },
  },
});

export const { addToCart, deleteFromCart, incrementCart, decrementCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
