import React, { useEffect } from "react";
import "../styles/nav-bar.scss";

const NavBar = () => {
  // ! wat??
  // const scrollToSection = (event) => {
  //   event.preventDefault();
  //   const targetClass = event.target.getAttribute("data-target");
  //   const targetElement = document.querySelector(targetClass);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // useEffect(() => {
  //   const navItems = document.querySelectorAll(".navItem a");
  //   navItems.forEach((item) => item.addEventListener("click", scrollToSection));
  //   return () => {
  //     navItems.forEach((item) =>
  //       item.removeEventListener("click", scrollToSection)
  //     );
  //   };
  // }, []);

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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
