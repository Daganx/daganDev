/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./contact.css";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variants pour les éléments de la grille (Information et Formulaire)
  const gridItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      {/* Titre principal - Animation par le bas (similaire au titre de Works) */}
      <motion.h2
        className="contact__title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Contactez-moi
      </motion.h2>

      <div className="contact__grid">
        {/* ⬅️ Colonne d'information (gauche) - Animation par la gauche */}
        <motion.div
          className="contact__info"
          variants={gridItemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="contact__description">
            Si vous êtes curieux d'en savoir plus sur ce que vous avez vu, je
            vous invite à me contacter ou à me suivre sur mes réseaux sociaux.
          </p>

          {/* Liens sociaux/Contact (remplacez les liens) */}
          <div className="contact__socials">
            {/* Remplacez les icônes par des composants réels si vous utilisez une librairie d'icônes */}
            <a
              href="mailto:votre.email@exemple.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Envoyer un e-mail"
            >
              📧
            </a>
            <a
              href="https://linkedin.com/in/votreprofil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn"
            >
              💼
            </a>
            <a
              href="https://instagram.com/votreprofil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil Instagram"
            >
              📷
            </a>
          </div>
        </motion.div>

        {/* ➡️ Formulaire de Contact (droite) - Animation par la droite (décalage de 0.2s) */}
        <motion.form
          className="contact__form"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Comment puis-je vous aider ?</label>
            <input type="text" id="message" name="message" required />
          </div>

          <motion.button
            type="submit"
            className="submit-button"
            // Animation subtile pour le bouton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENVOYER
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
