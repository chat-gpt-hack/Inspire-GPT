import "../styles/footer.scss";
import { FaGithub, FaReact, FaLinkedin, FaGlobeEurope, FaGlobeAmericas } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className="footerList">
        <ul className="author">
          <li className="footItem">Adan Moreno Flores</li>
          <li className="footItem"><a href="https://github.com/Hachikoi-the-creator"><FaGithub className="brandIcon" /></a></li>
          <li className="footItem"><a href="https://solid-portfolio-pi.vercel.app/"><FaGlobeEurope className="brandIcon" /></a></li>
          <li className="footItem"><a href="https://www.linkedin.com/in/adan-moreno7/"><FaLinkedin className="brandIcon" /></a></li>
        </ul>
        <ul className="author">
          <li className="footItem">Josef Dan Karlsson</li>
          <li className="footItem"><a href="https://github.com/kaztraz"><FaGithub className="brandIcon" /></a></li>
          <li className="footItem"><a href="http://www.jdkarlsson.com/"><FaGlobeEurope className="brandIcon" /></a></li>
          <li className="footItem"><a href="https://www.linkedin.com/in/jdkarlsson/"><FaLinkedin className="brandIcon" /></a></li>
        </ul>
        <ul className="author">
          <li className="footItem">Zak Franczak</li>
          <li className="footItem"><a href="https://github.com/zfranczak"><FaGithub className="brandIcon" /></a></li>
          <li className="footItem"><a href="https://zfranczak.github.io/portfolio/"><FaGlobeAmericas className="brandIcon"/></a></li>
          <li className="footItem"><a href="https://www.linkedin.com/in/zachary-franczak/"><FaLinkedin className="brandIcon" /></a></li>
        </ul>
      </ul>
      <div className="logo-container">
        <span className="logo2">InspireBOT<a className="accent">3000</a></span>
      </div>
    </footer>
  )
}

export default Footer
