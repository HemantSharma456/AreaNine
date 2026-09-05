// =============================================
// Projects Section — Curated Architectural Works
// =============================================

import React, { useState, useEffect, useCallback } from "react";
import { projects, categories } from "../data/siteData";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation, useLockBodyScroll } from "../hooks/useHooks";
import "./Projects.css";

// ---- Project Card ----
const ProjectCard = ({ project, onClick, index }) => {
  const ref = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className="project-card reveal"
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
      onClick={() => onClick(project)}
      tabIndex={0}
      role="button"
      aria-label={`View project details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(project);
        }
      }}
    >
      <div className="project-card__image-wrap">
        <PlaceholderImage
          src={project.coverImage}
          alt={project.title}
          objectFit="cover"
          aspectRatio="16/11"
        />
        <div className="project-card__overlay">
          <span className="project-card__view-label">
            <span>Explore Project</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </div>
      </div>

      <div className="project-card__info">
        <div className="project-card__meta">
          <span className="label-text">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title heading-text">{project.title}</h3>
        <p className="project-card__location">{project.location}</p>
        <p className="project-card__desc body-text">{project.shortDesc}</p>
      </div>
    </article>
  );
};

// ---- Project Monograph Modal ----
const ProjectModal = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  useLockBodyScroll(!!project);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!project) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setActiveImg((prev) => (prev + 1) % project.gallery.length);
      } else if (e.key === "ArrowLeft") {
        setActiveImg((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    },
    [project, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImg(0);
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal__close" 
          onClick={onClose} 
          aria-label="Close project modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal__content">
          {/* Left: Gallery View */}
          <div className="modal__images">
            <div className="modal__main-image">
              <PlaceholderImage
                src={project.gallery[activeImg]}
                alt={`${project.title} — view ${activeImg + 1}`}
                objectFit="cover"
                aspectRatio="16/10"
              />
            </div>

            {/* Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="modal__thumbs" role="tablist">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={activeImg === i}
                    className={`modal__thumb ${activeImg === i ? "modal__thumb--active" : ""}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`View photo ${i + 1}`}
                  >
                    <PlaceholderImage
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      objectFit="cover"
                      style={{ height: "100%" }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Architectural Monograph Details */}
          <div className="modal__details">
            <div className="modal__header-meta">
              <span className="label-text">{project.category}</span>
              <span className="modal__status-badge">{project.status}</span>
            </div>

            <h2 className="modal__title display-text">{project.title}</h2>
            <p className="modal__location">{project.location}</p>

            <p className="modal__desc body-text">{project.description}</p>

            {/* Specifications Grid */}
            <div className="modal__specs">
              {[
                { label: "Location", value: project.location },
                { label: "Year", value: project.year },
                { label: "Gross Area", value: project.area },
                { label: "Typology", value: project.category },
              ].map((spec) => (
                <div key={spec.label} className="modal__spec">
                  <span className="modal__spec-label">{spec.label}</span>
                  <span className="modal__spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Architectural Tags */}
            <div className="modal__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="modal__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Main Projects Section ----
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="projects section" id="projects" aria-label="Selected Architecture Projects">
      <div className="container">
        <SectionHeader
          number="01"
          label="Our Portfolio"
          title="Selected Works"
          subtitle="A curated selection of architecture, interiors, and public spaces from across the globe."
        />

        {/* Category Filter Tabs */}
        <div className="projects__filter" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`projects__filter-btn ${activeCategory === cat ? "projects__filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Monograph Grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Monograph Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;

