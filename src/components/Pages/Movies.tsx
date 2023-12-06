import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
} from "../../store/api/api";

import Slide from "../Slide";
import Loader from "../Loader";
import Category from "../UI/Category";
import MultiCardSlider from "../MultiCardSlider";

const Movies = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const {
    currentData: popularData,
    isLoading: popularDataLoading,
    // isError: popularDataError,
  } = useGetPopularMoviesQuery(null);

  const {
    currentData: upcomingMoviesData,
    isLoading: upcomingMoviesDataLoading,
    // isError: upcomingMoviesDataError,
  } = useGetUpcomingMoviesQuery(null);

  const {
    currentData: topRatedData,
    isLoading: topRatedDataLoading,
    // isError: topRatedDataError,
  } = useGetTopRatedMoviesQuery(null);

  const {
    currentData: nowPlayingData,
    isLoading: nowPlayingDataLoading,
    // isError: nowPlayingDataError,
  } = useGetNowPlayingMoviesQuery(null);

  return (
    <>
      <div className="h-[100svh]">
        {popularDataLoading ? (
          <Loader />
        ) : (
          <Slider {...settings}>
            {popularData?.results?.slice(0, 5).map((item: any, i: number) => (
              <Slide key={i} item={item} type="movie" />
            ))}
          </Slider>
        )}
      </div>

      <div className="flex flex-col md:gap-10 gap-4  py-16 sm:px-8 px-4">
        {upcomingMoviesDataLoading ||
        topRatedDataLoading ||
        nowPlayingDataLoading ? (
          <Loader />
        ) : (
          <>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Now Playing
              </h3>
              <MultiCardSlider data={nowPlayingData?.results} type="movie" />
            </Category>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Popular
              </h3>
              <MultiCardSlider data={popularData?.results} type="movie" />
            </Category>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Top rated
              </h3>
              <MultiCardSlider data={topRatedData?.results} type="movie" />
            </Category>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Upcoming
              </h3>
              <MultiCardSlider
                data={upcomingMoviesData?.results}
                type="movie"
              />
            </Category>
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
