import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.nToken;

const BASE_URL = "http://localhost:3000/user-contacts";

export const contactsApiSlice = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContactsByID: builder.query<getContactsByIDRes, { userID: number }>({
      query: ({userID}) => `/${userID}`,
    }),
    updateMyContacts: builder.mutation<ApiResponse, Contacats>({
      query: (contactsDto) => ({
        url: "/",
        method: "PATCH",
        body: contactsDto,
      }),
    }),
  }),
});

export const {useGetContactsByIDQuery,useUpdateMyContactsMutation} = contactsApiSlice;





type getContactsByIDRes = Contacats & {
  user_contact_id: number;
  user_id: number;
  contact_create_date: string;
  contact_update_date: string;
};

type Contacats = {
  whatsapp?: string | null;
  telegram?: string | null;
  viber?: string | null;
  phone_number?: string | null;
  instagram?: string | null;
  other_contacts?: string | null;
};

type ApiResponse = {
  success: boolean;
  message: string;
};
