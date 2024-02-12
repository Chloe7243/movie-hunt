import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useGetAiringTvQuery,
  useGetAllTrendingQuery,
  useGetUpcomingMoviesQuery,
} from "../store/api/api";

import Slide from "../components/UI/Slide";
import Loader from "../components/UI/Loader";
import Category from "../components/UI/Category";
import MultiCardSlider from "../components/UI/MultiCardSlider";

const Home = () => {
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
    currentData: trendingData,
    isLoading: trendingDataLoading,
    // isError: trendingDataError,
  } = useGetAllTrendingQuery("day");

  const {
    currentData: upcomingMoviesData,
    isLoading: upcomingMoviesDataLoading,
    // isError: upcomingMoviesDataError,
  } = useGetUpcomingMoviesQuery(null);

  const {
    currentData: tvAiringTodayData,
    isLoading: tvAiringTodayDataLoading,
    // isError: tvAiringTodayDataError,
  } = useGetAiringTvQuery(null);

  return (
    <>
      <div className="h-[100svh]">
        {trendingDataLoading ? (
          <Loader />
        ) : (
          <Slider {...settings}>
            {trendingData?.results?.slice(0, 5).map((item: any, i: number) => (
              <Slide key={i} item={item} showType />
            ))}
          </Slider>
        )}
      </div>

      <div className="flex flex-col md:gap-10 gap-4  py-16 sm:px-8 px-4">
        {upcomingMoviesDataLoading || tvAiringTodayDataLoading ? (
          <Loader />
        ) : (
          <>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Trending
              </h3>
              <MultiCardSlider data={trendingData?.results} />
            </Category>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                airing today on TV
              </h3>
              <MultiCardSlider data={tvAiringTodayData?.results} type="Tv" />
            </Category>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                upcoming movies
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

export default Home;
