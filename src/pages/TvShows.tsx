import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useGetPopularTvQuery,
  useGetTopRatedTvQuery,
  useGetTvOnTheAirQuery,
} from "../store/api/api";

import Slide from "../components/UI/Slide";
import Loader from "../components/UI/Loader";
import Category from "../components/UI/Category";
import MultiCardSlider from "../components/UI/MultiCardSlider";

const TvShows = () => {
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
  } = useGetPopularTvQuery(null);

  const {
    currentData: topRatedData,
    isLoading: topRatedDataLoading,
    // isError: topRatedDataError,
  } = useGetTopRatedTvQuery(null);

  const {
    currentData: tvOnAirData,
    isLoading: tvOnAirDataLoading,
    // isError: tvOnAirDataError,
  } = useGetTvOnTheAirQuery(null);

  return (
    <>
      <div className="h-[100svh]">
        {topRatedDataLoading ? (
          <Loader />
        ) : (
          <Slider {...settings}>
            {topRatedData?.results
              ?.filter((item: any) => item.backdrop_path)
              ?.slice(0, 5)
              .map((item: any, i: number) => (
                <Slide key={i} item={item} type="tv" />
              ))}
          </Slider>
        )}
      </div>

      <div className="flex flex-col md:gap-10 gap-4  py-16 sm:px-8 px-4">
        {popularDataLoading || tvOnAirDataLoading ? (
          <Loader />
        ) : (
          <>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Top rated Shows
              </h3>
              <MultiCardSlider
                data={topRatedData?.results?.filter(
                  (item: any) => item.backdrop_path
                )}
                type="tv"
              />
            </Category>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Popular Shows
              </h3>
              <MultiCardSlider
                data={popularData?.results?.filter(
                  (item: any) => item.backdrop_path
                )}
                type="tv"
              />
            </Category>
            <Category>
              <h3 className="font-bold md:text-xl lg:text-2xl px-4 sm:px-0 capitalize">
                Shows On air
              </h3>
              <MultiCardSlider
                data={tvOnAirData?.results?.filter(
                  (item: any) => item.backdrop_path
                )}
                type="tv"
              />
            </Category>
          </>
        )}
      </div>
    </>
  );
};

export default TvShows;
