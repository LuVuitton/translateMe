import { authApiSlice } from "@/app/api/auth/auth.api";
import { profileApiSlice } from "./../app/api/profile.api";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { userApiSlice } from "@/app/api/user/user.api";
import { assignmentApiSlice } from "@/app/api/assignment/assignment.api";
import { candidatesApiSlice } from "@/app/api/candidates/candidates.api";

const rootReducer = combineReducers({
  [profileApiSlice.reducerPath]: profileApiSlice.reducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [assignmentApiSlice.reducerPath]: assignmentApiSlice.reducer,
  [candidatesApiSlice.reducerPath]: candidatesApiSlice.reducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      profileApiSlice.middleware,
      authApiSlice.middleware,
      userApiSlice.middleware,
      assignmentApiSlice.middleware,
      candidatesApiSlice.middleware,
    ]),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
