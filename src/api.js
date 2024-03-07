import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["Players"],
});

export default api;
