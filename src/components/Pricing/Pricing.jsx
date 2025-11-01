/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./pricing.css";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="pricing" ref={ref}>
      {/* ⬅️ Contenu des Tarifs (à gauche) */}
      <motion.div
        className="pricing__content"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="pricing__explanation">
          <h3>Clarté et Flexibilité</h3>
          <p>
            Chaque projet est unique. Nos tarifications sont conçues pour être
            transparentes, sans frais cachés. Que vous ayez besoin d'un site
            vitrine simple, d'une application complexe ou d'une maintenance
            continue, nous avons une solution adaptée à votre budget et vos
            objectifs.
          </p>
        </div>

        {/* Espace pour les cartes de tarifs */}
        <div className="pricing__cards-grid">
          {/* Exemple de carte de prix 1 */}
          <div className="pricing-card card-basic">
            <h4>Plan Basic</h4>
            <p className="price">À partir de 1500 €</p>
            <ul>
              <li>Site vitrine sur mesure</li>
              <li>Design Responsive (Mobile)</li>
              <li>Optimisation de base</li>
            </ul>
          </div>
          {/* Exemple de carte de prix 2 */}
          <div className="pricing-card card-premium">
            <h4>Plan Pro</h4>
            <p className="price">Sur devis</p>
            <ul>
              <li>Application Web complète</li>
              <li>Backend personnalisé</li>
              <li>Maintenance prioritaire</li>
            </ul>
          </div>
          <div className="pricing-card card-basic">
            <h4>Plan Basic</h4>
            <p className="price">À partir de 1500 €</p>
            <ul>
              <li>Site vitrine sur mesure</li>
              <li>Design Responsive (Mobile)</li>
              <li>Optimisation de base</li>
            </ul>
          </div>
          <div className="pricing-card card-basic">
            <h4>Plan Basic</h4>
            <p className="price">À partir de 1500 €</p>
            <ul>
              <li>Site vitrine sur mesure</li>
              <li>Design Responsive (Mobile)</li>
              <li>Optimisation de base</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* ➡️ Titre vertical (à droite) */}
      <motion.div
        className="pricing__title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Tarifications</h2>
      </motion.div>
    </section>
  );
}
