/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"; // Nécessaire si vous voulez utiliser framer-motion plus tard
import "./headband.css";

// Le contenu de la promotion (à répéter)
const promotionText =
  "— Réduction de 10% sur les 3 premiers projets commandés ! — OFFRE LIMITÉE — ";

// Répétez le texte 10 fois pour une boucle fluide
const repeatedText = Array(10).fill(promotionText).join("");

export default function Headband() {
  // La durée de l'animation de défilement (plus la valeur est petite, plus c'est rapide)
  // 60 secondes donne une vitesse agréable et non intrusive
  const scrollDuration = 60;

  // Les variantes pour l'animation de défilement
  const marqueeVariants = {
    animate: {
      // Déplacement du texte de 0 à -100% de sa propre largeur (pour créer la boucle)
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: scrollDuration,
          ease: "linear", // Mouvement constant sans accélération/décélération
        },
      },
    },
  };

  return (
    <section id="headband" className="headband">
      <div className="headband-container">
        <motion.div
          className="headband-text"
          variants={marqueeVariants}
          animate="animate"
        >
          {repeatedText}
        </motion.div>
      </div>
    </section>
  );
}
