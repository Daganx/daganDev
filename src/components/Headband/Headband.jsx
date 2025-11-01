/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"; // Nécessaire si vous voulez utiliser framer-motion plus tard
import "./headband.css";

const promotionText =
  "— Réduction de 10% sur les 3 premiers projets commandés ! — OFFRE LIMITÉE — ";

const repeatedText = Array(10).fill(promotionText).join("");

export default function Headband() {
  const scrollDuration = 60;

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: scrollDuration,
          ease: "linear",
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
