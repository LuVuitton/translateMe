import { authApiSlice } from "@/app/api/auth/auth.api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { userApiSlice } from "@/app/api/user/user.api";
import { assignmentApiSlice } from "@/app/api/assignment/assignment.api";
import { candidatesApiSlice } from "@/app/api/candidates/candidates.api";
import { userLangApiSlice } from "@/app/api/user/user-lang/user-lang.api";
import { contactsApiSlice } from "@/app/api/contacts/contacts.api";
import { reviewsApiSlice } from "@/app/api/reviews/reviews.api";
import { assignmentsLangsApiSlice } from "@/app/api/languages/assignmentsLangs.api";


const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [assignmentApiSlice.reducerPath]: assignmentApiSlice.reducer,
  [candidatesApiSlice.reducerPath]: candidatesApiSlice.reducer,
  [userLangApiSlice.reducerPath]: userLangApiSlice.reducer,
  [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
  [reviewsApiSlice.reducerPath]: reviewsApiSlice.reducer,
  [assignmentsLangsApiSlice.reducerPath]: assignmentsLangsApiSlice.reducer,
  user: userReducer
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
      contactsApiSlice.middleware,
      reviewsApiSlice.middleware,
      assignmentsLangsApiSlice.middleware,
    ]),
});


