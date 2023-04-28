import { createSlice } from "@reduxjs/toolkit";
import { REDUX_LC, myInitialState } from "../initialState";

const userSlice = createSlice({
  name: "user",
  initialState: myInitialState.user,
  reducers: {
    setUpUser(_, action) {
      return action.payload;
    },
    cleanUser() {
      localStorage.removeItem(REDUX_LC)
      return myInitialState.user;
    },
  },
});

export const { setUpUser, cleanUser } = userSlice.actions;
export const userReducer = userSlice.reducer
