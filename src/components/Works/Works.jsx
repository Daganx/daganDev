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
  },
  {
    id: 2,
    title: "Portfolio V3",
    category: "Full Stack",
    year: 2024,
    image: "url_image_portfolio.jpg",
  },
  {
    id: 3,
    title: "Outil Admin Custom",
    category: "Backend",
    year: 2023,
    image: "url_image_admin.jpg",
  },
  {
    id: 4,
    title: "Landing Page Météo",
    category: "Frontend",
    year: 2023,
    image: "url_image_meteo.jpg",
  },
  {
    id: 5,
    title: "Landing Page Météo",
    category: "Frontend",
    year: 2023,
    image: "url_image_meteo.jpg",
  },
  {
    id: 6,
    title: "Landing Page Météo",
    category: "Frontend",
    year: 2023,
    image: "url_image_meteo.jpg",
  },
];

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // État pour l'image actuellement survolée
  const [hoveredImage, setHoveredImage] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // Cache l'image lorsque la souris quitte la ligne
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
          transition={{ staggerChildren: 0.1 }} // Animation des enfants décalée
        >
          {minimalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              variants={itemVariants}
              onMouseEnter={() => handleMouseEnter(project.image)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="project-item__title">{project.title}</h3>
              <p className="project-item__meta">
                {project.year} / {project.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🖼️ Aperçu Flottant (Révélé au survol) */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            key={hoveredImage} // Clé pour forcer l'animation de changement
            className="project-preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundImage: `url(${hoveredImage})` }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
