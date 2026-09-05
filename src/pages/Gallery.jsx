// =============================================
// Gallery Section — Visual Journal & Materiality
// =============================================

import React, { useState, useEffect, useCallback } from "react";
import { galleryImages } from "../data/siteData";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation, useLockBodyScroll } from "../hooks/useHooks";
import "./Gallery.css";

// ---- Gallery Item ----
const GalleryItem = ({ image, index, onClick }) => {
  const ref = useScrollAnimation(0.08);

  return (
    <div
      ref={ref}
      className={`gallery-item gallery-item--${image.span} reveal`}
      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
      onClick={() => onClick(image)}
      tabIndex={0}
      role="button"
      aria-label={`Open image: ${image.alt}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(image);
        }
      }}
    >
      <PlaceholderImage
        src={image.src}
        alt={image.alt}
        objectFit="cover"
        style={{ height: "100%" }}
      />
      <div className="gallery-item__overlay">
        <div className="gallery-item__zoom">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16" y2="16" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
        <span className="gallery-item__caption">{image.alt}</span>
      </div>
    </div>
  );
};

// ---- Lightbox ----
const Lightbox = ({ image, images, onClose, onPrev, onNext }) => {
  useLockBodyScroll(!!image);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (!image) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    },
    [image, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);

  return (
    <div 
      className="lightbox" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="lightbox__close" 
          onClick={onClose} 
          aria-label="Close Lightbox"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Previous Navigation */}
        <button 
          className="lightbox__nav lightbox__nav--prev" 
          onClick={onPrev} 
          aria-label="Previous Image"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Main Image Frame */}
        <div className="lightbox__image">
          <PlaceholderImage
            src={image.src}
            alt={image.alt}
            objectFit="contain"
            style={{ height: "100%", background: "transparent" }}
          />
        </div>

        {/* Next Navigation */}
        <button 
          className="lightbox__nav lightbox__nav--next" 
          onClick={onNext} 
          aria-label="Next Image"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Metadata Caption Bar */}
        <div className="lightbox__caption">
          <span className="lightbox__title">{image.alt}</span>
          <span className="lightbox__counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

// ---- Main Gallery Component ----
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const selectedIndex = galleryImages.findIndex((img) => img.id === selectedImage?.id);

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <section className="gallery section" id="gallery" aria-label="Visual Journal Gallery">
      <div className="container">
        <SectionHeader
          number="03"
          label="Visual Journal"
          title="Spatial Documentation"
          subtitle="Moments, textures, and fragments — an ongoing photographic and volumetric record of our material research."
        />

        {/* Masonry-Style Architectural Grid */}
        <div className="gallery__grid">
          {galleryImages.map((image, i) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={i}
              onClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage}
        images={galleryImages}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

export default Gallery;

