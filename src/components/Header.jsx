import "../styles/header.scss";

const Header = ({ title }) => {
  return (
    <header className="header">
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
