import Card from "./Card";
import useGetGenreById from "../../store/hooks/useGetGenreById";

const GenreName = ({ id }: { id: number }) => {
  const [getGenreById] = useGetGenreById();
  const genreName = getGenreById(id)?.name;
  return <Card>{genreName}</Card>;
};

export default GenreName;
