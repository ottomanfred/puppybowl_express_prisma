import api from "./api";

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/players",
      providesTags: ["Players"],
      transformResponse: (response) => response.data.players,
    }),
  }),
});

export const { useGetPlayersQuery } = puppyApi;
