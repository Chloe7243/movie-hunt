import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type searchArgs = {
  query: string;
  include_adult: boolean;
};

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
    getTopRatedMovies: builder.query({
      query: () => "movie/top_rated",
    }),
    getPopularMovies: builder.query({
      query: () => "movie/popular",
    }),
    getNowPlayingMovies: builder.query({
      query: () => "movie/now_playing",
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
    getTvDetails: builder.query({
      query: (id: number) => `tv/${id}`,
    }),
    getTvCast: builder.query({
      query: (id: number) => `tv/${id}/credits`,
    }),
    getTvTrailers: builder.query({
      query: (id: number) => `tv/${id}/videos`,
    }),
    getTvReviews: builder.query({
      query: (id: number) => `tv/${id}/reviews`,
    }),
    getSimilarShows: builder.query({
      query: (id: number) => `tv/${id}/similar`,
    }),
    getTvGenres: builder.query({
      query: () => "genre/tv/list",
    }),
    getAiringTv: builder.query({
      query: () => "tv/airing_today",
    }),
    getTvOnTheAir: builder.query({
      query: () => "tv/on_the_air",
    }),
    getPopularTv: builder.query({
      query: () => "tv/popular",
    }),
    getTopRatedTv: builder.query({
      query: () => "tv/top_rated",
    }),
    getCountries: builder.query({
      query: () => "configuration/countries",
    }),
    searchAll: builder.query({
      query: (args: searchArgs) => ({
        url: "search/multi",
        params: args,
      }),
    }),
    searchMovie: builder.query({
      query: (args: searchArgs) => ({
        url: "search/movie",
        params: args,
      }),
    }),
    searchShow: builder.query({
      query: (args: searchArgs) => ({
        url: "search/tv",
        params: args,
      }),
    }),
  }),
});

export const {
  useLazySearchAllQuery,
  useLazySearchShowQuery,
  useLazySearchMovieQuery,
  useGetAllTrendingQuery,
  useGetCountriesQuery,
  useGetTvGenresQuery,
  useGetAiringTvQuery,
  useGetTvCastQuery,
  useGetTvDetailsQuery,
  useGetTvReviewsQuery,
  useGetTvTrailersQuery,
  useGetPopularTvQuery,
  useGetTvOnTheAirQuery,
  useGetTopRatedTvQuery,
  useGetSimilarShowsQuery,
  useGetMovieCastQuery,
  useGetMovieDetailsQuery,
  useGetMoviesGenresQuery,
  useGetMovieReviewsQuery,
  useGetMovieTrailersQuery,
  useGetSimilarMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetWatchProvidersQuery,
} = api;
