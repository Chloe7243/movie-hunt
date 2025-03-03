import { useAppSelector } from "./hooks";

const useGetGenreById = () => {
  const genres = useAppSelector((state) => state.genres);
  const getGenreById = (id: number) => {
    return genres.filter((genre) => genre.id === id)[0];
  };
  return [getGenreById];
};

export default useGetGenreById;
