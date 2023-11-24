import { useParams } from "react-router-dom";
import {
  useGetCountriesQuery,
  useGetTvCastQuery,
  useGetTvDetailsQuery,
  useGetTvReviewsQuery,
  useGetTvTrailersQuery,
  useGetSimilarShowsQuery,
} from "../../store/api/api";
import { IMAGE_BASE_URL } from "../../utils/constants";
import clsx from "clsx";
import GenreName from "../GenreName";
import {
  modifyNumber,
  modifyString,
} from "../../utils/functions";
import Loader from "../Loader";
import StarRatings from "../StarRatings";
import Dropdown from "../Dropdown";
import { useState } from "react";
import MultiCardSlider from "../MultiCardSlider";

const TvShow = () => {
  const tvShowId = Number(useParams().id);
  const [searchCountry, setSearchCountry] = useState("");
  const { currentData: showDetails, isFetching: showDetailsLoading } =
    useGetTvDetailsQuery(tvShowId);
  const { currentData: showCast, isFetching: showCastLoading } =
    useGetTvCastQuery(tvShowId);
  const { currentData: showTrailers, isFetching: showTrailersLoading } =
    useGetTvTrailersQuery(tvShowId);
  const { currentData: showReviews, isFetching: showReviewsLoading } =
    useGetTvReviewsQuery(tvShowId);
  const { currentData: similarShows, isFetching: similarShowsLoading } =
    useGetSimilarShowsQuery(tvShowId);
  const { currentData: countriesData, isLoading: countriesDataLoading } =
    useGetCountriesQuery(null);

  const backdrop_path = `${IMAGE_BASE_URL}${showDetails?.backdrop_path}`;
  const companies = showDetails?.production_companies;
  const infoLoading =
    showCastLoading ||
    showDetailsLoading ||
    showReviewsLoading ||
    showTrailersLoading ||
    similarShowsLoading ||
    countriesDataLoading;

  const countries = countriesData?.filter((c: any) =>
    c.native_name.toLowerCase().includes(searchCountry)
  );

  return infoLoading ? (
    <div className="h-[100svh]">
      <Loader />
    </div>
  ) : (
    <>
      <div
        className={clsx(
          `h-[100svh]  w-screen relative !flex text-white items-end`
        )}
        style={{
          backgroundImage: `url(${backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#00000099",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="md:px-10 px-6 py-8 z-40">
          <h1 className="md:text-7xl lg:text-8xl sm:text-6xl text-4xl leading-none font-extrabold overflow-y-hidden">
            {showDetails?.title || showDetails?.name}
          </h1>
          <p className="font-didact_gothic mt-7 max-sm:text-base max-md:text-lg">
            {showDetails?.tagline}
          </p>
          <div className="mt-4 flex gap-4 flex-wrap overflow-scroll">
            {showDetails?.genres.map((genre: any, i: number) => (
              <GenreName key={i} id={genre.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="md:px-10 px-6 py-12 flex flex-wrap gap-10 ">
        <div className="lg:max-w-[50%] z-[999] bg-[#0b0c0f]">
          <h3 className="font-bold md:text-xl lg:text-2xl capitalize">
            Details
          </h3>
          <div className="md:px-4 pt-4 flex flex-col gap-4 text-lg bg-inherit">
            <p className="">{showDetails?.overview}</p>
            <div className="flex gap-2">
              <b>Ratings:</b>
              <div className="text-sm">
                <StarRatings ratings={showDetails?.vote_average / 2} />
                <span className="flex justify-between gap-4 pl-2 pr-[.2rem]">
                  <p>{(showDetails?.vote_average / 2).toPrecision(3)} / 5</p>
                  <p>({modifyNumber(showDetails?.vote_count)})</p>
                </span>
              </div>
            </div>
            <p>
              <b>Number of seasons:</b> {`${showDetails?.number_of_seasons}`}
            </p>
            <p>
              <b>Number of episodes:</b> {`${showDetails?.number_of_episodes}`}
            </p>
            <div className="flex gap-2">
              <p className="min-w-fit">
                <b>Produced by: </b>
              </p>
              <div className="flex flex-wrap gap-2">
                {companies?.map((company: any) =>
                  company.logo_path ? (
                    <span className="bg-white flex items-center justify-center p-2 rounded-lg">
                      <img
                        src={`${IMAGE_BASE_URL}${company.logo_path}`}
                        className="h-6"
                        alt=""
                      />
                    </span>
                  ) : (
                    <p>{company.name}</p>
                  )
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <p className="min-w-fit ">
                <b>Where to watch?</b>
              </p>

              <Dropdown>
                <div className="w-full px-4 sticky top-0  bg-gray-700 pb-1.5">
                  <input
                    type="search"
                    className="p-1.5 w-full text-black rounded-lg focus:outline-none"
                    onChange={(e) =>
                      setSearchCountry(e.target.value.toLowerCase())
                    }
                  />
                </div>

                {countries.length ? (
                  countries.map(
                    ({
                      iso_3166_1: cc,
                      native_name: name,
                    }: {
                      iso_3166_1: string;
                      native_name: string;
                    }) => {
                      return (
                        <li>
                          <a
                            href={`https://www.themoviedb.org/tv/${tvShowId}/watch?locale=${cc}`}
                            target="_blank"
                            className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <img
                              src={`https://flagsapi.com/${cc}/flat/32.png`}
                            />
                            <p>{name}</p>
                          </a>
                        </li>
                      );
                    }
                  )
                ) : (
                  <p className="text-center pb-2">
                    <b>No country found!</b>
                  </p>
                )}
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="font-bold md:text-xl lg:text-2xl capitalize pb-4">
            reviews
          </h3>
          <div className=" max-h-[25rem] h-max">
            {!showReviews?.total_results ? (
              <p className="w-full text-center text-xl p-4 font-extrabold">
                No reviews yet
              </p>
            ) : (
              <div className="flex flex-col gap-8">
                {showReviews?.results.slice(0, 5).map((review: any) => {
                  const comment = modifyString(review.content);
                  return (
                    <div className="w-[30rem] shrink-0">
                      <p className="text-xl pb-2">
                        <b>{review.author}:</b>
                      </p>
                      <p>
                        {comment}
                        {comment != review.content ? (
                          <a
                            href={`https://www.themoviedb.org/review/${review.id}`}
                            className="text-blue-800"
                            target="_blank"
                          >
                            read more
                          </a>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  );
                })}
                {showReviews?.total_results > 5 && (
                  <p className="text-xl text-center w-full text-gray-400 font-bold">
                    <a
                      href={`https://www.themoviedb.org/tv/${tvShowId}/reviews`}
                      target="_blank"
                    >
                      View more reviews
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="min-w-full">
          <h3 className="font-bold md:text-xl lg:text-2xl capitalize">
            Trailers & Teasers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4  p-4 justify-center">
            {showTrailers?.results
              ?.filter(
                (video: any) =>
                  video.type === "Teaser" || video.type === "Trailer"
              )
              .map((video: any) => {
                return (
                  <div className="w-full flex flex-col aspect-square">
                    <iframe
                      className="flex-1"
                      src={`https://www.youtube.com/embed/${video.key}?controls=0`}
                    ></iframe>
                    <p className="text-center">
                      <b>{video.type}: </b>
                      {video.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="min-w-full">
          <h3 className="font-bold md:text-xl lg:text-2xl capitalize">cast</h3>
          <div className="flex gap-4 flex-wrap mx-auto justify-center py-8 ">
            {Object.values(showCast?.cast)
              .slice(0, 10)
              .map((person: any) => (
                <div className="flex flex-col w-max items-center">
                  <img
                    src={`${IMAGE_BASE_URL}${person?.profile_path}`}
                    alt=""
                    className=" aspect-square w-32  object-fit-contain rounded-lg"
                  />

                  <p className="text-center">
                    <b>{person?.name}</b>
                  </p>

                  <p className="text-center">as {person?.character}</p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold md:text-xl lg:text-2xl capitalize">
            You may also like
          </h3>
          <MultiCardSlider data={similarShows?.results} type={"tv"} />
        </div>
      </div>
    </>
  );
};

export default TvShow;
