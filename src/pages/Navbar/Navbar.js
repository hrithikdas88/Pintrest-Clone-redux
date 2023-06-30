import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import {  useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const favorites = useSelector(state =>state.favorite)
  return (
    <nav className="navbar">
      <Link to="./" className="navbar-heading">
        PhotoGallery
      </Link>

      <Link to="/favorite" className="navbar-left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
          alt="no"
        />
        {favorites.length}
      </Link>
    </nav>
  );
};

export default Navbar;
