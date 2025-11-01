/* eslint-disable no-unused-vars */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import "./works.css";

const minimalProjects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "UI/UX",
    year: 2024,
    image: "/images/toggle.avif",
    description:
      "Une refonte complète de l'expérience utilisateur pour une plateforme e-commerce, en mettant l'accent sur la conversion et un design moderne.",
    technologies: ["Figma", "React", "Node.js", "Stripe"],
  },
  {
    id: 2,
    title: "Portfolio V3",
    category: "Full Stack",
    year: 2024,
    image: "https://via.placeholder.com/600x400/FFC107/000000?text=PortfolioV3",
    description:
      "La troisième version de mon portfolio personnel (celui que vous voyez !), construit avec React et Framer Motion pour des animations fluides.",
    technologies: ["React", "Framer Motion", "CSS"],
  },
  {
    id: 3,
    title: "Outil Admin Custom",
    category: "Backend",
    year: 2023,
    image: "https://via.placeholder.com/600x400/333333/FFFFFF?text=Admin+Tool",
    description:
      "Un dashboard d'administration sur-mesure pour un client, permettant la gestion des utilisateurs, des commandes et l'analyse des données.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    id: 4,
    title: "Landing Page Météo",
    category: "Frontend",
    year: 2023,
    image: "https://via.placeholder.com/600x400/007BFF/FFFFFF?text=App+Météo",
    description:
      "Une application web simple affichant la météo en temps réel via une API externe, avec un focus sur le design responsive.",
    technologies: ["HTML", "CSS", "JavaScript", "API Rest"],
  },
];

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [openProjectId, setOpenProjectId] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleProjectClick = (projectId) => {
    setOpenProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  const detailsVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "25px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="works" ref={ref}>
      {/* ⬅️ Titre vertical à gauche */}
      <motion.div
        className="works__title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Projets</h2>
      </motion.div>

      {/* ➡️ Contenu des Projets (Grille) */}
      <div className="works__content-container">
        <motion.div
          className="projet-minimal__grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
        >
          {minimalProjects.map((project) => {
            const isOpen = project.id === openProjectId;

            return (
              <motion.div
                key={project.id}
                className="project-item-wrapper"
                variants={itemVariants}
              >
                <div
                  className="project-item"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <h3 className="project-item__title">{project.title}</h3>
                  <p className="project-item__meta">
                    {project.year} / {project.category}
                  </p>
                  <span className="project-item-toggle">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="project-details-box"
                      variants={detailsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-details-image"
                      />
                      <p className="project-details-description">
                        {project.description}
                      </p>
                      <div className="project-tech-list">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
