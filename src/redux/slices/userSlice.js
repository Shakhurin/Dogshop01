import { createSlice } from "@reduxjs/toolkit";
import { REDUX_STATE_LC, myInitialState } from "../initialState";

const userSlice = createSlice({
  name: "user",
  initialState: myInitialState.user,
  reducers: {
    setUpUser(_, action) {
      return action.payload;
    },
    cleanUser() {
      localStorage.removeItem(REDUX_STATE_LC)
      return myInitialState.user;
    },
  },
});

export const { setUpUser, cleanUser } = userSlice.actions;
export const userReducer = userSlice.reducer
