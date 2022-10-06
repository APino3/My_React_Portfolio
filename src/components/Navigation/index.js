import "./style.css";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer";

export default function Navigation(props) {
  return (
    <div id="content">
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">
            Albalicia Espino Portfolio
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about-me">About Me</Link>
            </li>
            <li>
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="resume">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}
