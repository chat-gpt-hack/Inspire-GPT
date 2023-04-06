import "../styles/footer.scss";
import { FaGithub, FaReact, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className="footerList">
        <li className="logo2">InspireBOT<a className="accent">3000</a></li>
        <ul className="author">
         Adan Moreno Flores 
          <li className="footItem"><FaGithub className="brandIcon" /></li>
          <li className="footItem"><FaReact className="brandIcon" /></li>
          <li className="footItem"><FaLinkedin className="brandIcon" /></li>
        </ul>
        <ul className="author">
         Josef Dan Karlsson 
          <li className="footItem"><FaGithub className="brandIcon" /></li>
          <li className="footItem"><FaReact className="brandIcon" /></li>
          <li className="footItem"><FaLinkedin className="brandIcon" /></li>
        </ul>
        <ul className="author">
          Zak Franczak 
          <li className="footItem"><FaGithub className="brandIcon" /></li>
          <li className="footItem"><FaReact className="brandIcon" /></li>
          <li className="footItem"><FaLinkedin className="brandIcon" /></li>
        </ul>
      </ul>
    </footer>
  )
}

export default Footer

