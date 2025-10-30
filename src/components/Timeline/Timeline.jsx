/* eslint-disable no-unused-vars */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import "./timeline.css";

// (Reste du code et des données 'stages' inchangés)

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [openStageId, setOpenStageId] = useState(null);

  const handleRowClick = (id) => {
    setOpenStageId(openStageId === id ? null : id);
  };

  const stages = [
    {
      id: "01",
      title: "Prise de contact",
      details:
        "Nous discutons de vos idées, objectifs et contraintes budgétaires. C'est l'étape de cadrage pour définir les spécifications.",
    },
    {
      id: "02",
      title: "Maquettage",
      details:
        "Je conçois les wireframes et les prototypes (UX/UI) pour valider l'ergonomie et le design visuel avant de coder une seule ligne.",
    },
    {
      id: "03",
      title: "Code",
      details:
        "Développement du frontend (React/Next.js) et du backend. Le code est propre, modulaire et optimisé pour la performance.",
    },
    {
      id: "04",
      title: "Retour",
      details:
        "Vous testez la version bêta du site ou de l'application sur un environnement de staging. Nous ajustons les derniers détails.",
    },
    {
      id: "05",
      title: "Validation",
      details:
        "La phase finale d'assurance qualité. Nous validons ensemble que le produit répond à 100% au cahier des charges initial.",
    },
    {
      id: "06",
      title: "Hébergement",
      details:
        "Déploiement final sur le serveur (Vercel, Netlify, etc.). Mise en place des certificats SSL et optimisation pour le SEO.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contentVariants = {
    open: { height: "auto", opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  return (
    <section id="timeline" ref={ref}>
      <motion.div
        className="timeline__container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="timeline__title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Processus de création
        </motion.h1>

        <motion.div
          className="timeline__table"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="timeline__header">
            <span>#</span>
            <span>Étapes</span>
            {/* Ajout d'une colonne vide pour la flèche */}
            <span className="timeline__arrow-header"></span>
          </div>

          {stages.map((stage) => {
            const isOpen = openStageId === stage.id;

            return (
              <motion.div
                key={stage.id}
                className="timeline__item"
                variants={rowVariants}
              >
                <motion.div
                  className={`timeline__row ${isOpen ? "active" : ""}`}
                  onClick={() => handleRowClick(stage.id)}
                >
                  <span className="timeline__id">{stage.id}</span>
                  <span className="timeline__name">{stage.title}</span>

                  {/* ⬅️ Ajout de la flèche animée */}
                  <motion.span
                    className="timeline__arrow"
                    animate={{ rotate: isOpen ? 90 : 0 }} // Rotation de 90 degrés
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="timeline__details"
                      key="content"
                      variants={contentVariants}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <p>{stage.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
