import React from 'react';
import '../styles/header.scss';
import NavBar from './NavBar';

const Header = ({ title }) => {
  return (
    <header className="header">
      <NavBar />
      <h1 className="title">{title}</h1>
      <h2>
        Get inspired with Inspirebot 3000: your personal motivational coach.
        With our AI-generated quotes and stunning photos, you'll have the
        inspiration you need to tackle any challenge.
      </h2>
    </header>
  );
};

export default Header;
