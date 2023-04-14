import { useEffect } from "react";
import "../styles/nav-bar.scss";

const NavBar = ({ changeMode, isDarkMode }) => {
  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    changeMode(theme);
  }, []);
  //TODO fix the navigation menu, it has moved.... to be fixed!

  return (
    <nav className="navBar">
      <div className="navWrapper">
        <ul className="navList">
          <li className="logo">
            InspireBOT<a className="accent">3000</a>
          </li>
        </ul>
        <ul className="menuList">
          <li className="navItem"><Link to="/">Home</Link></li>
          <li className="navItem"><Link to="/about">About</Link></li>
          <li className="navItem">
            <button className="btn" onClick={changeMode}>
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
