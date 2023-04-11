import React from "react";
import "../styles/header.scss";

// ! we need to fix the "Inspire Bot 3000" within the h2 to be with same styling as the "logo"
const Header = ({ title }) => {
  return (
    <header className="header">
      <h2>Get <a className='accent'>inspired</a> with InspireBOT <a className='accent'>3000</a></h2>
      <p className="desc">
      Get ready to experience the ultimate motivational boost! 
      Our state-of-the-art AI-powered quote and image generator 
      will take your inspiration to new heights. With stunning 
      visuals and uplifting messages, you'll be unstoppable in 
      the face of any obstacle. Let us ignite your passion and 
      help you unleash your full potential!
      </p>
    </header>
  );
};

export default Header;
