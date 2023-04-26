import { IPlatforms } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const platformApi = createApi({
  reducerPath: "platformApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/platforms`,
  }),
  tagTypes: ["platforms"],
  endpoints: (builder) => ({
    getPlatforms: builder.query({
      query: ({ option = "All" }) => ({
        url: `find-filter?filter=${option}`,
      }),
      providesTags: ["platforms"],
    }),
    getPlatformById: builder.query({
      query: (id: string) => ({
        url: `/platform/${id}`,
      }),
      providesTags: ["platforms"],
    }),
    addNewPlatform: builder.mutation({
      query: (body: IPlatforms) => {
        return {
          url: "new-platform",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["platforms"],
    }),
    updatePlatform: builder.mutation({
      query: (body: IPlatforms) => {
        return {
          url: `/update/${body._id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["platforms"],
    }),
    deletePlatform: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["platforms"],
    }),
  }),
});

export const {
  useGetPlatformsQuery,
  useGetPlatformByIdQuery,
  useAddNewPlatformMutation,
  useUpdatePlatformMutation,
  useDeletePlatformMutation,
} = platformApi;
