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
            <h4>Plan Essentiel 🪶</h4>
            <p className="price">500€</p>
            <ul>
              <li>1 page unique fluide et responsive</li>
              <li>
                Design personnalisé (identité visuelle, couleurs, typographie)
              </li>
              <li>Intégration des images, logo, textes fournis</li>
              <li>Responsive design mobile/tablette</li>
              <li>
                Formulaire de contact basique (envoi vers email ou service
                externe)
              </li>
              <li>Optimisation performance + SEO</li>
            </ul>
          </div>
          {/* Exemple de carte de prix 2 */}
          <div className="pricing-card card-premium">
            <h4>Plan Professionnel 🌿</h4>
            <p className="price">900€ à 1500€</p>
            <ul>
              <li>3 à 5 pages fluide et responsive</li>
              <li>
                Design personnalisé (identité visuelle, couleurs, typographie)
              </li>
              <li>Intégration des images, logo, textes fournis</li>
              <li>Responsive design mobile/tablette</li>
              <li>
                Optimisation performance & SEO (balises meta, titres dynamiques,
                sitemap)
              </li>
              <li>
                Formulaire de contact basique (envoi vers email ou service
                externe)
              </li>
              <li>Multilingue FR/EN (+150 €)</li>
            </ul>
          </div>
          <div className="pricing-card card-basic">
            <h4>Plan Fullstack ⚙️</h4>
            <p className="price">1800€ à 3000€</p>
            <ul>
              <li>
                Front-end React + une API personnalisée (Node.js / Express)
              </li>
              <li>Gestion d’authentification et d’utilisateurs</li>
              <li>Base de données MongoDB</li>
              <li>Dashboard administrateur (ajout/modification de contenu)</li>
              <li>
                Envoi d’emails automatisé (contact, inscription, newsletter)
              </li>
              <li>Responsive design mobile/tablette</li>
              <li>
                Optimisation complète + déploiement sur serveur (Render,
                Railway, etc.)
              </li>
              <li>
                Documentation technique et formation rapide pour le client
              </li>
            </ul>
          </div>
          <div className="pricing-card card-basic">
            <h4>Plan Premium 💎</h4>
            <p className="price">3500€ à 6000€</p>
            <ul>
              <li>
                Branding complet (logo, palette, ton visuel, design Figma
                détaillé)
              </li>
              <li>
                Front-end React + une API personnalisée (Node.js / Express)
              </li>
              <li>Gestion d’authentification et d’utilisateurs</li>
              <li>Base de données MongoDB</li>
              <li>Dashboard administrateur (ajout/modification de contenu)</li>
              <li>
                Envoi d’emails automatisé (contact, inscription, newsletter)
              </li>
              <li>Responsive design mobile/tablette</li>
              <li>Maintenance 3 mois incluse</li>
              <li>SEO avancé et tracking Google Analytics</li>
              <li>Formation du client à l’utilisation du site</li>
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
