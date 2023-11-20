import { useAppSelector } from "./hooks";

const useGetGenreById = (id: number) => {
  let returnValue = null;
  const genres = useAppSelector((state) => state.genres);
  returnValue = genres.filter((genre) => genre.id === id)[0];
  return returnValue;
};

export default useGetGenreById;
