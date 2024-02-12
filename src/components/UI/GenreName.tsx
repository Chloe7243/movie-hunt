import Card from "./Card";
import useGetGenreById from "../../store/hooks/useGetGenreById";

const GenreName = ({ id }: { id: number }) => {
  const genreName = useGetGenreById(id)?.name;
  return <Card>{genreName}</Card>;
};

export default GenreName;
