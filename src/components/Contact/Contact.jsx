/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import linkedinIcon from "../../assets/icons/linkedin.png";
import mailIcon from "../../assets/icons/mail.png";
import twitterIcon from "../../assets/icons/twitter.png";

import "./contact.css";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const gridItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatusMessage("Envoi en cours...");

    emailjs
      .sendForm(
        "service_rcgysxo",
        "template_k0byal9", // 👈 Remplacez par votre Template ID
        formRef.current, // 👈 Cible le formulaire
        "QNXHeYKYn-ezFuwra" // 👈 Remplacez par votre Public Key
      )
      .then(
        (result) => {
          console.log("Email envoyé avec succès !", result.text);
          setStatusMessage("Message envoyé avec succès !");
          setIsSending(false);
          formRef.current.reset(); // Réinitialise les champs du formulaire
        },
        (error) => {
          console.error("Échec de l'envoi...", error.text);
          setStatusMessage("Erreur. Veuillez réessayer plus tard.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      {/* Titre principal */}
      <motion.h2
        className="contact__title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      <div className="contact__grid">
        {/* ... (Votre colonne d'information gauche reste inchangée) ... */}
        <motion.div
          className="contact__info"
          variants={gridItemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ... (votre code p, div.contact__socials) ... */}
          <p className="contact__description">
            Si vous êtes curieux d'en savoir plus sur ce que vous avez vu, je
            vous invite à me contacter ou à me suivre sur mes réseaux sociaux.
          </p>

          {/* Liens sociaux/Contact */}
          <div className="contact__socials">
            <a
              href="dagan.letot@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Envoyer un e-mail"
            >
              <img src={mailIcon} alt="" />
            </a>
            <a
              href="https://linkedin.com/in/letotdagan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn"
            >
              <img src={linkedinIcon} alt="" />
            </a>
            <a
              href="https://x.com/dagandev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil Instagram"
            >
              <img src={twitterIcon} alt="" />
            </a>
          </div>
        </motion.div>

        {/* ➡️ Formulaire de Contact (droite) */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
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
            <textarea
              type="textarea"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: isSending ? 1 : 1.05 }}
            whileTap={{ scale: isSending ? 1 : 0.95 }}
            disabled={isSending}
          >
            {/* 👈 AJOUT: Change le texte pendant l'envoi */}
            {isSending ? "ENVOI..." : "ENVOYER"}
          </motion.button>

          {statusMessage && <p className="form-status">{statusMessage}</p>}
        </motion.form>
      </div>
    </section>
  );
}
