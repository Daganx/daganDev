/* eslint-disable no-unused-vars */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import "./works.css";

const minimalProjects = [
  {
    id: 1,
    title: "Ophélie Numérologie (En cours)",
    category: "Front-End",
    year: 2025,
    image: "",
    description:
      "Site web pour une cliente numérologue. Affichage de ses informations et système de réservation.",
    link: "",
    technologies: ["Figma", "React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Jessica Savin",
    category: "Fullstack",
    year: 2025,
    image: "/images/works/jessicasavin.jpg",
    description:
      "Site web pour une cliente décoratrice d'intérieurs. Dashboard administrateur afin de gérer ses réalisations.",
    link: "https://www.jessicasavin-decoration.fr/",
    technologies: ["Figma", "React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Portfolio",
    category: "Front-End",
    year: 2025,
    image: "/images/works/dagandev.png",
    description:
      "Mon portfolio personnel de Freelance (celui que vous voyez !), construit avec React et Framer Motion pour des animations fluides.",
    link: "https://dagan-dev.vercel.app",
    technologies: ["React", "Framer Motion", "CSS"],
  },
  {
    id: 4,
    title: "Portfolio International",
    category: "Front-End",
    year: 2024,
    image: "/images/works/daganInt.png",
    description:
      "Mon portfolio de fin de formation en Anglais pour les clients internationaux, construit avec React.",
    link: "https://daganx.github.io/portfoliov2/",
    technologies: ["React","CSS","Framer Motion"],
  },
  {
    id: 5,
    title: "Gallerie d'art",
    category: "Fullstack",
    year: 2023,
    image: "/images/works/Wine3.webp",
    description:
      "Site web pour une gallerie d'art. Dashboard administrateur afin de gérer ses réalisations.",
    link: "https://parisart.vercel.app/",
    technologies: ["Symfony", "PHP", "JavaScript", "CSS"],
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

      {/* ➡️ Contenu des Projets */}
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

                      {/* 🔗 Ajout du lien du projet */}
                      {project.link && (
                        <a
                          href={
                            project.link.startsWith("http")
                              ? project.link
                              : `https://${project.link}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Voir le projet ↗
                        </a>
                      )}

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
