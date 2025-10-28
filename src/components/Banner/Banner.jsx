import "./banner.css";

import bannerBackground from "../../assets/images/banner/banner.jpg";
import bannerUnderline from "../../assets/images/banner/underline.png";

export default function Banner() {
  return (
    <section id="banner" className="banner">
      <img
        src={bannerBackground}
        alt="Background de Dagan LETOT - Développeur WEB à Bergerac"
        className="banner-image"
      />
      <div className="banner-content">
        <h1>Dagan LETOT</h1>
        <img src={bannerUnderline} alt="trait de séparation" className="banner-underline" />
        <h2>Développeur Web - Freelance</h2>
        <h3>
          Passionné par la créativité et le design. Je crée des sites sur
          mesure, modernes et élégants, qui reflètent votre identité.
        </h3>
      </div>
    </section>
  );
}
