import cx from "clsx";
import Card from "./Card";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, MEDIA_LINKS } from "../../utils/constants";
import GenreName from "./GenreName";

const Slide = ({
  item,
  showType,
  type,
}: {
  item: any;
  showType?: boolean;
  type?: string;
}) => {
  const backdrop_path = `${IMAGE_BASE_URL}${item?.backdrop_path}`;

  return (
    <div
      className={cx(
        `h-[100svh] w-full relative !flex text-white text-2xl items-end`
      )}
      style={{
        backgroundImage: `url(${backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#00000099",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="md:px-10 px-4 py-8 z-40">
        <h1 className="md:text-7xl lg:text-8xl sm:text-6xl text-4xl py-4 font-extrabold max-w-[51rem] overflow-hidden">
          {item?.title || item?.name}
        </h1>
        <p className="font-didact_gothic  line-clamp-3 w-full sm:w-1/2 lg:w-5/12 max-sm:text-base max-md:text-lg">
          {item?.overview}
        </p>
        <div className="mt-6 flex gap-4 capitalize flex-wrap">
          {showType && <Card>{item?.media_type}</Card>}
          {item.genre_ids.map((genre_id: number, i: number) => (
            <GenreName key={i} id={genre_id} />
          ))}

          <Card className="!bg-black/30 py-3 font-semibold text-white">
            <Link to={`/${MEDIA_LINKS[item?.media_type || type]}/${item?.id}`}>
              View more details
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Slide;
