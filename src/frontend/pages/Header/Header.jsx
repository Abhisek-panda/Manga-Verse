import { Link, NavLink, useNavigate } from "react-router-dom";

import "../Header/header.css";
import { useAuthContext, useProduct } from "../../..";
import { MdExplore, MdShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";

export const Header = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useProduct();
  const { token } = useAuthContext();
  const handleChange = (event) => {
    dispatch({ type: "SEARCH_FILTER", payload: event.target.value });
    navigate("/products");
  };

  return (
    <div className="header">
      <div>
        <header>
          <nav className="nav-bar">
            <h1 className="home-title">
              <NavLink to="/profile" className="link-btn">
                <CgProfile className="nav-bar-icons" />
              </NavLink>
              <Link className="nav-title-text" to="/">
                Manga Verse
              </Link>
            </h1>
            <div className="search-container">
              <input
                type="search"
                placeholder="Search Manga with Title"
                className="input-search-bar"
                value={state.filters.searchText}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="links-container">
              <NavLink to="/products" className="link-btn btn">
                <MdExplore className="nav-bar-icons" />
              </NavLink>
              <NavLink to="/cart" className="link-btn btn">
                <MdShoppingCart className="nav-bar-icons" />
              </NavLink>
              <NavLink to="/wishlist" className=" link-btn btn">
                <FiHeart className="nav-bar-icons" />
              </NavLink>
              <NavLink to="/login" className="link-btn header-log-btn">
                {token ? "Logged In " : "Log In"}
              </NavLink>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
