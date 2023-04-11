import React, { useEffect } from "react";
import "../styles/nav-bar.scss";

const NavBar = () => {
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetClass = event.target.getAttribute("data-target");
    const targetElement = document.querySelector(targetClass);
    if (targetElement) {
      const navbarHeight = document.querySelector(".navBar").offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const navItems = document.querySelectorAll(".navItem a");
    navItems.forEach((item) => item.addEventListener("click", scrollToSection));
    return () => {
      navItems.forEach((item) =>
        item.removeEventListener("click", scrollToSection)
      );
    };
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
          <li className="navItem">
            <a href="#about" data-target="#about">About</a>
          </li>
          <li className="navItem">
            <a href="#more" data-target="#more">More</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
