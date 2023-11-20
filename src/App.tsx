import store from "./store/store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home";
import Movie from "./components/Pages/Movie";
import Movies from "./components/Pages/Movies";
import TvShow from "./components/Pages/TvShow";
import TvShows from "./components/Pages/TvShows";

import Search from "./components/Pages/Search";
import RootLayout from "./components/RootLayout";
import Watchlist from "./components/Pages/Watchlist";
import UserProfile from "./components/Pages/UserProfile";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="tv-shows" element={<TvShows />} />
          <Route path="tv-shows/:id" element={<TvShow />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="search" element={<Search />} />
          <Route path="user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
