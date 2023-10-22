import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { destroyCookie } from "nookies";

const initialState: InitialState = {
  data: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.data = action.payload;
    },
    setIsLogged: (state, action: PayloadAction<{ isLogged: boolean }>) => {
      if (!action.payload.isLogged) {
        state.data = null;
        destroyCookie(null, "nToken");
      }
      state.isLogged = action.payload.isLogged;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUserData, setIsLogged } = userSlice.actions;

export type UserState = {
  user_id: number;
  full_name: string;
  email: string;
  user_registration_date: string;
} | null;

export type InitialState = {
  data: UserState;
  isLogged: boolean;
};
