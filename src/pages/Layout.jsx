import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <NavBar changeMode={updateTheme} isDarkMode={isDarkMode} />
      <Outlet />
    </>
  );
};

export default Layout;