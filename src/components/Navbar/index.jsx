import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row bg-color1">
      <div className="w-1/3 px-auto flex">
        <Link className="my-auto ml-auto" to="/Login">
          <button className="mx-5 text-white">INTRANET</button>
        </Link>
      </div>
      <div className="w-1/3">
        <Link to="/">
          <img
            src="src/assets/logoBlanco.png"
            className="w-40 mx-auto"
            alt=""
          />
        </Link>
      </div>

      <div className="w-1/3">
        <IconButton
          size="large"
          edge="start"
          color="white"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <p>hola</p>
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
