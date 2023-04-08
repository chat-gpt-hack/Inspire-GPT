import React from 'react';
import '../styles/navBar.scss';

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li className="logo">
          InspireBOT<a className="accent">3000</a>
        </li>
        <li className="navItem">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"></img>
        </li>
        <li className="navItem">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"></img>
        </li>
        <li className="navItem">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"></img>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
