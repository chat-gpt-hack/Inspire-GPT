import React from 'react';
import '../styles/header.scss';

// we need to fix the "Inspire Bot 3000" within the h2 to be with same styling as the "logo" 
const Header = ({ title }) => {
  console.log("Header component called");
  return (
    <header className="header">
      <h2>
      Unlock your creativity and inspiration with InspireBOT3000 
        <br></br>
      The ultimate AI-powered source of motivation!
      </h2>
    </header>
  );
};

export default Header;
