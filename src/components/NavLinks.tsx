import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const activeNavLinkStyle =
    "underline font-semibold decoration-8";

  const navlinkStyle = (isActive: boolean) =>
    `${isActive ? activeNavLinkStyle : ""} relative min-w-[5rem] flex items-center justify-center`;

  return (
    <nav className="flex gap-4 text-white capitalize font-montserrat p-4 flex-wrap items-center justify-center">
      <NavLink to="/home" className={({ isActive }) => navlinkStyle(isActive)}>
        home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => navlinkStyle(isActive)}
      >
        movies
      </NavLink>
      <NavLink
        to="/tv-shows"
        className={({ isActive }) => navlinkStyle(isActive)}
      >
        tv shows
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) => navlinkStyle(isActive)}
      >
        watchlist
      </NavLink>
    </nav>
  );
};

export default NavLinks;
