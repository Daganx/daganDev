/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Works.css";

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Les animations Framer Motion peuvent être ajoutées à chaque 'bento-item'
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="works" ref={ref}>
      {/* Texte vertical à gauche */}
      <motion.div
        className="works__title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Projets</h2>
      </motion.div>

      {/* 🍱 Grille Bento à droite */}
      <motion.div
        className="works__bento-grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.15 }} // Décaler l'apparition des éléments enfants
      >
        <motion.div className="bento-item item-1" variants={itemVariants}>
          <h3>Projet 1: E-commerce</h3>
          <p>Un aperçu de notre boutique en ligne moderne.</p>
        </motion.div>
        <motion.div className="bento-item item-2" variants={itemVariants}>
          <h3>Projet 2: App Mobile</h3>
          <p>Interface utilisateur propre et réactive.</p>
        </motion.div>
        <motion.div className="bento-item item-3" variants={itemVariants}>
          <h3>Projet 3: Agence Web</h3>
          <p>Design primé sur Awwwards.</p>
        </motion.div>
        <motion.div className="bento-item item-4" variants={itemVariants}>
          <p>Découvrez tous mes projets sur mon porfolio</p>
          <a
            href="https://daganx.github.io/portfoliov2/"
            target="newblank"
            className="bento-link"
          >
            Voir plus →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
