// import PropTypes from "prop-types"

import "../styles/header.scss";
import FontAwesome from 'react-fontawesome'


const Header = ({ title }) => {
  return (
    <header className="header">
      <ul className="nav">
        <li className="navItem"><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"></img></li>
        <li className="navItem"><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"></img></li>
        <li className="navItem"><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"></img></li>
      </ul>
      <i class="fa-regular fa-user"></i>
      <h1 className="title">{title}</h1>
      <h2>Get inspired with Inspirebot 3000: your personal motivational coach. With our AI-generated quotes and stunning photos, you'll have the inspiration you need to tackle any challenge.</h2>
    </header>
  );
};

// Header.defaultProps = {
//   title: "Inspire Bot 3000",
// }

// Header.propTypes = {
//   title: PropTypes.string,
// }

export default Header;
