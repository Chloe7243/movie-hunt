import Slider from "react-slick";
import MultiCardSlide from "./MultiCardSlide";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !z-40 right-[2.5%] translate-y-[-3rem] scale-[2] !opacity-100 !hover:scale[2.5] max-md:!hidden`}
      style={style}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !z-40 scale-[2] left-[2.5%] translate-y-[-3rem] !opacity-100 max-md:!hidden disabled:hidden`}
      style={style}
      onClick={onClick}
    />
  );
}

const MultiCardSlider = ({ data, type }: { data: any; type?: string }) => {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    swipeToSlide: true,
    speed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="lg:px-12 sm:px-6 w-full">
      {data?.map((item: any, i: number) => (
        <MultiCardSlide key={i} item={item} type={type} />
      ))}
    </Slider>
  );
};

export default MultiCardSlider;
