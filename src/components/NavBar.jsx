import "../styles/nav-bar.scss";

const NavBar = ({ changeMode, isDarkMode }) => {
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
          <li className="navItem">
            <a href="#about">About</a>
          </li>
          <li className="navItem">
            <a href="#more">More</a>
          </li>
          <li>
            <button onClick={changeMode}>chg</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
