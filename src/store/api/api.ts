import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_API_TOKEN;
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTrending: builder.query({
      query: (time_window: string) => `trending/all/${time_window}`,
    }),
    getMoviesGenres: builder.query({
      query: () => "genre/movie/list",
    }),
    getUpcomingMovies: builder.query({
      query: () => "movie/upcoming",
    }),
    getMovieDetails: builder.query({
      query: (id: number) => `movie/${id}`,
    }),
    getMovieCast: builder.query({
      query: (id: number) => `movie/${id}/credits`,
    }),
    getMovieTrailers: builder.query({
      query: (id: number) => `movie/${id}/videos`,
    }),
    getWatchProviders: builder.query({
      query: (id: number) => `movie/${id}/watch/providers`,
    }),
    getMovieReviews: builder.query({
      query: (id: number) => `movie/${id}/reviews`,
    }),
    getSimilarMovies: builder.query({
      query: (id: number) => `movie/${id}/similar`,
    }),
    getTvGenres: builder.query({
      query: () => "genre/tv/list",
    }),
    getAiringTv: builder.query({
      query: () => "tv/airing_today",
    }),
    getCountries: builder.query({
      query: () => "configuration/countries",
    }),
  }),
});

export const {
  useGetAllTrendingQuery,
  useGetCountriesQuery,
  useGetTvGenresQuery,
  useGetAiringTvQuery,
  useGetMovieCastQuery,
  useGetMovieDetailsQuery,
  useGetMoviesGenresQuery,
  useGetMovieReviewsQuery,
  useGetMovieTrailersQuery,
  useGetSimilarMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetWatchProvidersQuery,
} = api;
