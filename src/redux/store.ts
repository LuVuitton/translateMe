import { authApiSlice } from "@/app/api/auth/auth.api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { userApiSlice } from "@/app/api/user/user.api";
import { assignmentApiSlice } from "@/app/api/assignment/assignment.api";
import { candidatesApiSlice } from "@/app/api/candidates/candidates.api";
import { userLangApiSlice } from "@/app/api/user/user-lang/user-lang.api";

const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [assignmentApiSlice.reducerPath]: assignmentApiSlice.reducer,
  [candidatesApiSlice.reducerPath]: candidatesApiSlice.reducer,
  [userLangApiSlice.reducerPath]: userLangApiSlice.reducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApiSlice.middleware,
      userApiSlice.middleware,
      assignmentApiSlice.middleware,
      candidatesApiSlice.middleware,
      userLangApiSlice.middleware,
    ]),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
