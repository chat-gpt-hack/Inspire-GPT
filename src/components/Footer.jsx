import "../styles/footer.scss";
import { FaGithub, FaReact, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className="footerList">
        <ul className="author">
          <li className="footItem">Adan Moreno Flores</li>
          <li className="footItem"><FaGithub className="brandIcon" /></li>
          <li className="footItem"><FaReact className="brandIcon" /></li>
          <li className="footItem"><FaLinkedin className="brandIcon" /></li>
        </ul>
        <ul className="author">
          <li className="footItem">Josef Dan Karlsson</li>
          <li className="footItem"><FaGithub className="brandIcon" /></li>
          <li className="footItem"><FaReact className="brandIcon" /></li>
          <li className="footItem"><FaLinkedin className="brandIcon" /></li>
        </ul>
        <ul className="author">
          <li className="footItem">Zak Franczak</li>
          <li className="footItem"><FaGithub className="brandIcon" /></li>
          <li className="footItem"><FaReact className="brandIcon" /></li>
          <li className="footItem"><FaLinkedin className="brandIcon" /></li>
        </ul>
      </ul>
      <div className="logo-container">
        <span className="logo2">InspireBOT<a className="accent">3000</a></span>
      </div>
    </footer>
  )
}

export default Footer
