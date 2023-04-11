import "../styles/footer.scss";
import { FaGithub, FaChalkboardTeacher, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footerList">
        <ul className="creator">
          Adan Moreno Flores
          <li className="footItem">
            <a href="https://adan-portfolio.vercel.app/" target="_blank">
              <FaChalkboardTeacher className="brandIcon" />
            </a>
          </li>
          <li className="footItem">
            <a href="https://github.com/Hachikoi-the-creator" target="_blank">
              <FaGithub className="brandIcon" />
            </a>
          </li>
          <li className="footItem">
            <a href="https://www.linkedin.com/in/adan-moreno7/" target="_blank">
              <FaLinkedin className="brandIcon" />
            </a>
          </li>
        </ul>
        <ul className="creator">
          Josef Dan Karlsson
          <li className="footItem">
            <a href="http://www.jdkarlsson.com/" target="_blank">
              <FaChalkboardTeacher className="brandIcon" />
            </a>
          </li>
          <li className="footItem">
            <a href="https://github.com/kaztraz" target="_blank">
              <FaGithub className="brandIcon" />
            </a>
          </li>
          <li className="footItem">
            <a href="https://www.linkedin.com/in/jdkarlsson/" target="_blank">
              <FaLinkedin className="brandIcon" />
            </a>
          </li>
        </ul>
        <ul className="creator">
          Zak Franczak
          <li className="footItem">
            <a href="https://zfranczak.github.io/portfolio/" target="_blank">
              <FaChalkboardTeacher className="brandIcon" />
            </a>
          </li>
          <li className="footItem">
            <a href="https://github.com/zfranczak" target="_blank">
              <FaGithub className="brandIcon" />
            </a>
          </li>
          <li className="footItem">
            <a
              href="https://www.linkedin.com/in/zachary-franczak/"
              target="_blank"
            >
              <FaLinkedin className="brandIcon" />
            </a>
          </li>
        </ul>
      </ul>
      <div className="logo-container">
        <span className="logo2">
          InspireBOT<a className="accent">3000</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
