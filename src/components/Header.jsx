import React from "react";
import "../styles/header.scss";

// ! we need to fix the "Inspire Bot 3000" within the h2 to be with same styling as the "logo"
const Header = ({ title }) => {
  return (
    <header className="header">
      <h2>Get inspired with Inspirebot 3000</h2>
      <p className="desc">
        your personal motivational coach. With our AI-generated quotes and
        stunning photos, you'll have the inspiration you need to tackle any
        challenge.
      </p>
    </header>
  );
};

export default Header;
