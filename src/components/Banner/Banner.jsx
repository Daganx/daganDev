import { useState, useEffect } from "react";
import "./banner.css";

import toggle from "../../assets/images/banner/toggle.avif";

const skills = [
  "Développeur Web - Freelance",
  "UI/UX Designer",
  "Site sur mesure"
];

export default function Banner() {
  const [skillIndex, setSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const target = skills[skillIndex];
    let timeout;

    if (!isDeleting && currentText.length < target.length) {
      timeout = setTimeout(() => {
        setCurrentText(target.substring(0, currentText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && currentText.length === target.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(target.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, skillIndex]);

  return (
    <section id="banner" className="banner">
      <div className="banner__content">
        <h1>
          <span>Dagan LET</span>
          <img src={toggle} alt="Toggle switch" className="toggle"></img>
          <span>T</span>
        </h1>

        <h2 className="typing-text">
          {currentText}
          <span className="cursor">|</span>
        </h2>
      </div>
      <div className="banner__footer">
        <p className="banner__phone">06.88.64.20.03</p>
      </div>
    </section>
  );
}
