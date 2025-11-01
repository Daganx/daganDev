/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import "./about.css";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__content">
        {/* Texte de gauche */}
        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Je conçois des expériences digitales modernes qui reflètent votre
            identité.
          </h2>
          <p>
            En tant que développeur web freelance, je crée des sites à la fois
            élégants et performants, pensés pour mettre en valeur votre marque
            et séduire vos utilisateurs.
          </p>
          <br />
          <p>
            Mon objectif est simple : transformer vos idées en solutions
            digitales efficaces et élégantes, capables de séduire vos clients et
            d’augmenter votre visibilité en ligne.
          </p>
        </motion.div>

        {/* Stats de droite */}
        <div className="about__stats">
          {/* Stat 1 */}
          <motion.div
            className="stat"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>{isInView ? <CountUp end={2000} duration={2.5} /> : 0}+</h3>
            <p>Heures de formation et de pratique intensive</p>
          </motion.div>

          <div className="divider"></div>

          {/* Stat 2 */}
          <motion.div
            className="stat"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3>{isInView ? <CountUp end={3} duration={2.5} /> : 0}+</h3>
            <p>Années d’expérience en développement web</p>
          </motion.div>

          <div className="divider"></div>

          {/* Stat 3 */}
          <motion.div
            className="stat"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3>{isInView ? <CountUp end={100} duration={2.5} /> : 0}%</h3>
            <p>De mes projets sont conçus sur mesure et performants</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
