import "./banner.css";

import toggle from "../../assets/images/banner/toggle.avif";
import world from "../../assets/icons/world.svg.png";

export default function Banner() {
  return (
    <section id="banner" className="banner">
      <div className="banner__content">
        <h1>
          <span>Dagan LET</span>
          <img src={toggle} className="toggle"></img>
          <span>T</span>
        </h1>
        <h2 className="typing">Développeur Web - Freelance</h2>
        <img src={world} alt="" className="world" />
      </div>
    </section>
  );
}
