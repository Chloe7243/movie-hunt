import store from "./store/store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store/hooks/hooks";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
import TvShows from "./pages/TvShows";

import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import UserProfile from "./pages/UserProfile";
import RootLayout from "./layouts/RootLayout";

import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="tv-shows" element={<TvShows />} />
          <Route path="tv-shows/:id" element={<TvShow />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="search" element={<Search />} />
          <Route path="user-profile" element={<UserProfile />} />
        </Route>
        {/* <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} /> */}
      </Routes>
    </Provider>
  );
}

export default App;
