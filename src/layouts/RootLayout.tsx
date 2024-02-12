import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/hooks";
import { setGenres } from "../store/features/genreSlice";
import { useGetMoviesGenresQuery, useGetTvGenresQuery } from "../store/api/api";
import Loader from "../components/UI/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  const { currentData: TvGenres, isFetching: tvGenresDataLoading } =
    useGetTvGenresQuery(null);
  const { currentData: movieGenres, isFetching: movieGenresDataLoading } =
    useGetMoviesGenresQuery(null);

  const allGenres = TvGenres?.genres?.concat(movieGenres?.genres);
  if (!tvGenresDataLoading && !movieGenresDataLoading)
    dispatch(setGenres(allGenres));

  const loading = tvGenresDataLoading || movieGenresDataLoading;

  return (
    <div className={`relative flex flex-col  ${loading ? "h-[100svh]" : ""}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="min-h-[100svh]">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
