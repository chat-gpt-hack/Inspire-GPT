import "../styles/footer.scss";
import creatorsData from "../assets/creatorsData";
import { FaGithub, FaChalkboardTeacher, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>Our Team</h4>
      <ul className="footer-list">
        {creatorsData.map((creator) => (
          <li className="creator" key={creator.name}>
            <p className="name">{creator.name}</p>
            <a className="social s1" href={creator.portfolio} target="_blank">
              <FaChalkboardTeacher className="brand-icon" size={20} />
            </a>
            <a className="social s2" href={creator.github} target="_blank">
              <FaGithub className="brand-icon" size={20} />
            </a>
            <a className="social s3" href={creator.linkedin} target="_blank">
              <FaLinkedin className="brand-icon" size={20} />
            </a>
          </li>
        ))}
      </ul>
      <p className="logo">
        InspireBOT<span className="accent">3000</span>
      </p>
    </footer>
  );
};

export default Footer;
