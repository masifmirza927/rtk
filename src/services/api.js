import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "posts",
            // Enable automatic refetch when window regains focus or reconnects to the internet
            refetchOnFocus: true,
            refetchOnReconnect: true,
        }),
    }),
});

export const { useGetAllPostsQuery } = api