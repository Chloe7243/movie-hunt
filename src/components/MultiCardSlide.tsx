import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, MEDIA_LINKS } from "../utils/constants";
import { getDateYear } from "../utils/functions";
import useGetGenreById from "../store/hooks/useGetGenreById";
import clsx from "clsx";

const MultiCardSlide = ({ item, type, className }: { item: any; type?: string; className?:string }) => {
  const poster_path = `${IMAGE_BASE_URL}${item?.poster_path}`;
  const about = item?.genre_ids
    ?.map((id: number) => useGetGenreById(id).name)
    .join(", ");
  const kind = item?.media_type || type?.toLowerCase();

  return (
    <div className={clsx(`${className} flex flex-col gap-2 p-4`)}>
      <Link
        to={`/${MEDIA_LINKS[kind]}/${item?.id}`}
        className="rounded-xl relative hover:outline outline-offset-4 outline-4 outline-gray-500 hover:after:content-[url(assets/arrow.png)] hover:before:content-[''] hover:before:w-full  hover:before:h-full hover:before:absolute  hover:before:bg-black/50 hover:after:absolute hover:after:top-1/2 hover:after:left-1/2 hover:after:translate-y-[-50%] hover:after:translate-x-[-50%] hover:after:bg-black/60 hover:after:rounded-full hover:after:h-14 hover:after:w-14 hover:after:flex hover:after:items-center hover:after:justify-center h-[70%] overflow-hidden"
      >
        <img src={poster_path} alt="" className="w-full" />
      </Link>
      <h3 className="md:text-lg  sm:text-base text-sm font-bold mt-2 line-clamp-1 hover:text-blue-800">
        <Link to={`/${MEDIA_LINKS[kind]}/${item?.id}`}>
          {item?.name || item?.title}
        </Link>
      </h3>
      <p className="sm:line-clamp-1 capitalize line-clamp-2 text-sm sm:text-base lg:text-lg">
        {kind} • {about}
      </p>
      <p className="">
        {kind === "tv" ? "First aired in " : ""}
        {getDateYear(item?.release_date || item?.first_air_date)}
      </p>
    </div>
  );
};

export default MultiCardSlide;
