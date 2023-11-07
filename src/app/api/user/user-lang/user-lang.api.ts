import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { parseCookies } from "nookies";



const BASE_URL = "http://localhost:3000/user-lang";

export const userLangApiSlice = createApi({
  reducerPath: "userLangApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const cookies = parseCookies();
      headers.set("Authorization", `Bearer ${cookies.nToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addMeLang: builder.mutation<AddMeLangRes, AddMeLangDto>({
      query: (addMeLangDto) => ({
        url: "/",
        method: "POST",
        body: addMeLangDto,
      }),
    }),
    deleteMeLang: builder.mutation<DeleteMeLangRes, { languageID: number }>({
      query: (languageID) => ({
        url: `/language_id=${languageID}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {useAddMeLangMutation,useDeleteMeLangMutation} = userLangApiSlice;

type UserLang = {
  proficiency: number;
  language_id: number;
  language_name: string;
};
type AddMeLangRes = {
  languageCount: number;
  languages: UserLang[];
};
type AddMeLangDto = {
  languages: [number, 1 | 2 | 3][];
};
type DeleteMeLangRes = {
  message: string;
};
