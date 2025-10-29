import "./navigation.css";

import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <nav id="navigation" className="navigation">
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            À Propos
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} duration={500}>
            Réalisations
          </Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} duration={500}>
            Tarifications
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
