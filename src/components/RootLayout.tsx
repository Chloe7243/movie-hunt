import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGetMoviesGenresQuery, useGetTvGenresQuery } from "../store/api/api";
import { useAppDispatch } from "../store/hooks/hooks";
import { setGenres } from "../store/features/genreSlice";
import Loader from "./Loader";
import { useEffect } from "react";

const RootLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation().pathname;

  const { currentData: TvGenres, isFetching: tvGenresDataLoading } =
    useGetTvGenresQuery(null);
  const { currentData: movieGenres, isFetching: movieGenresDataLoading } =
    useGetMoviesGenresQuery(null);

  const allGenres = TvGenres?.genres?.concat(movieGenres?.genres);
  if (!tvGenresDataLoading && !movieGenresDataLoading)
    dispatch(setGenres(allGenres));

  const loading = tvGenresDataLoading || movieGenresDataLoading;

  useEffect(() => {
    if (location === "/") navigate("/home");
  }, [location]);

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
