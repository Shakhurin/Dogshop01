import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: myInitialState.favourite,
  reducers: {
    // action.payload - id продукта
    changeFavourites(state, action) {
      const product = state.find((el) => el === action.payload);

      if (product) {
        return state.filter((el) => el !== action.payload);
      }

      state.push(action.payload);
    },
    // action.payload - id продукта
    deleteFromFavourites(state,action) {
      return state.filter((el) => el !== action.payload)
    }
  },
});

export const { changeFavourites, deleteFromFavourites } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
