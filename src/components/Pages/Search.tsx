import { useState, useEffect } from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import {
  useLazySearchAllQuery,
  useLazySearchMovieQuery,
  useLazySearchShowQuery,
} from "../../store/api/api";
import Loader from "../Loader";
import MultiCardSlide from "../MultiCardSlide";

const Search = () => {
  const [mediaType, setMediaType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [adultContent, setAdultContent] = useState(false);

  const adultContentHandler = () => setAdultContent((prev) => !prev);
  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);
  const mediaTypeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMediaType(event?.target?.value);

  const [searchAll, { currentData: allData, isFetching: allDataLoading }] =
    useLazySearchAllQuery();
  const [
    searchMovies,
    { currentData: moviesData, isFetching: moviesDataLoading },
  ] = useLazySearchMovieQuery();
  const [
    searchShows,
    { currentData: showsData, isFetching: showsDataLoading },
  ] = useLazySearchShowQuery();

  const searchContent = () => {
    if (!searchQuery.length) return;
    const searchParams = {
      query: searchQuery,
      include_adult: adultContent,
    };
    if (mediaType === "movie") {
      searchMovies(searchParams);
    } else if (mediaType === "tv") {
      searchShows(searchParams);
    } else {
      searchAll(searchParams);
    }
  };

  const data =
    mediaType === "movie"
      ? moviesData?.results
      : mediaType === "tv"
      ? showsData?.results
      : allData?.results;

  const dataLoading =
    mediaType === "movie"
      ? moviesDataLoading
      : mediaType === "tv"
      ? showsDataLoading
      : allDataLoading;

  useEffect(() => {
    searchContent();
  }, [adultContent, mediaType]);
;

  return (
    <div className="mt-24 py-8 px-10 flex flex-col gap-10">
      <div>
        <div className="w-full flex mb-2">
          <input
            type="search"
            name=""
            value={searchQuery}
            className="flex-1 bg-transparent border-white border-solid border-2 p-2 rounded-l-md"
            placeholder="Search for a movie or show"
            onChange={searchInputHandler}
          />
          <button
            className="px-4 bg-white text-black font-bold w-32 rounded-r-md"
            onClick={searchContent}
          >
            Search
          </button>
        </div>
        <div className="flex justify-between gap-4 px-2 py-4">
          <span className="flex items-center gap-2">
            <input
              name="adult"
              type="checkbox"
              onChange={adultContentHandler}
              checked={adultContent}
            />
            <label htmlFor="adult">Include adult content</label>
          </span>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 pl-2">
              <input
                value="all"
                type="radio"
                name="media_type"
                checked={mediaType === "all"}
                onChange={mediaTypeChangeHandler}
              />
              <label htmlFor="all">All</label>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <input
                value="movie"
                type="radio"
                name="media_type"
                checked={mediaType === "movie"}
                onChange={mediaTypeChangeHandler}
              />
              <label htmlFor="movie">Movie</label>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <input
                value="tv"
                type="radio"
                name="media_type"
                checked={mediaType === "tv"}
                onChange={mediaTypeChangeHandler}
              />
              <label htmlFor="tv">Tv</label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-1 flex-wrap justify-center w-full">
        {dataLoading ? (
          <Loader />
        ) : searchQuery && data && !data.length ? (
          <h1 className="flex items-center text-2xl gap-4">
            No result found <RiEmotionSadLine />
          </h1>
        ) : (
          data?.map((item: any, i: number) => {
            return (
              <MultiCardSlide
                className="max-w-[15rem]"
                type={mediaType}
                key={i}
                item={item}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Search;
