"use client";

import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  image: string;
  images: string[];
  url?: string;
}

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "HOLY Beer Hotel",
      category: "Hostel - Website",
      year: "2025",
      description:
        "We redesigned the Holy Beer Hotel landing page to elevate its digital presence and drive higher conversions. The new design blends refined aesthetics, intuitive UI, and a strategic content structure that guides visitors through the brand story toward booking and engagement. Through clear hierarchy, optimized visuals, and persuasive sections, the new site captures the hotel’s unique character while improving user flow and conversion performance.",
      services: ["Website Design", "UX/UI", "Strategy"],
      image:
        "/projects/holy-mock.png",
      images: [
        "/projects/hero.png",
        "/projects/Landing0000.png",
      ],
      url: "https://beerhoteles.com/",
    },
    {
      id: 3,
      title: "MRAI FLEET",
      category: "SaaS Platform, Mobile App",
      year: "2023",
      description:
        "The MRAI Fleet SaaS platform and mobile app needed a new design to enhance user experience and streamline operations. The new design features a modern, professional aesthetic with a focus on usability and efficiency. We also implemented a custom catalog section powered by Strapi CMS, allowing the MRAI Fleet team to easily manage and publish content to boost visibility and SEO.",
      services: ["SaaS Platform", "Mobile App", "UX/UI", "Product Design"],
      image:
        "/projects/mrai/mrai-mock.jpg",
      images: [
        "/projects/mrai/04project.jpg",
        "/projects/mrai/02-project.jpg",
        "/projects/mrai/03project.jpg",
        "/projects/mrai/01project.jpg",
      ],
      url: "https://miraifleet.com",
    },
    {
      id: 4,
      title: "Barrivell",
      category: "Ecommerce, Website",
      year: "2024",
      description:
        "We redesigned the Barrivell ecommerce website to enhance user experience and streamline operations. The new design features a modern, professional aesthetic with a focus on usability and efficiency. We also implemented a custom catalog section powered by Strapi CMS, allowing the Barrivell team to easily manage and publish content to boost visibility and SEO.",
      services: ["Ecommerce Setup & Launch", "Website Design", "Strategy"],
      image:
        "/projects/barriv/barri-mock.jpg",
      images: [
        "/projects/barriv/01.png",
        "/projects/barriv/02.jpg",
        "/projects/barriv/03.jpg",
      ],
      url: "https://barrivell.com.ar/",
    },
    {
      id: 2,
      title: "TEAMIE.",
      category: "Team Communication - Website",
      year: "2024",
      description:
        "We designed and developed the Teamie. landing page to support the launch of this new team collaboration startup. The goal was to present the product clearly and build credibility from day one. The site features a modern, startup-oriented design, with a strong focus on clarity, trust, and conversion. Additionally, we implemented a custom blog section powered by Strapi CMS, allowing the Teamie. team to easily manage and publish content to boost visibility and SEO.",
      services: ["Visual Identity", "Website", "Blog CMS"],
      image:
        "/projects/teamie/01-mock.jpg",
      images: [
        "/projects/teamie/01.png",
        "/projects/teamie/02.png",
        "/projects/teamie/05.png",
      ],
      url: "https://teamie-show.webflow.io/",
    },
  ];

  // Helper function to check if image is a mock
  const isMockImage = (imagePath: string) => {
    return imagePath.toLowerCase().includes('-mock');
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length,
      );
    }
  };

  return (
    <section
      id="proyectos"
      className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span
            className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-6 block italic"
            style={{ fontWeight: 400 }}
          >
            {t('projects.tag')}
          </span>

          <h2
            className="font-['Archivo',sans-serif] text-[50px] md:text-[120px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8"
            style={{ fontWeight: 900 }}
          >
            {t('projects.title')}
          </h2>

          <p
            className="font-['Archivo',sans-serif] text-[18px] md:text-[28px] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]"
            style={{ fontWeight: 600 }}
          >
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                onClick={() => openModal(project)}
                className="group cursor-pointer relative overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay for mock images - always visible for better text readability */}
                  {isMockImage(project.image) ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  ) : (
                    <div className="absolute inset-0 bg-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  )}

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
                      <span
                        className="font-['Archivo',sans-serif] text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2 block italic"
                        style={{ fontWeight: 400 }}
                      >
                        ({project.category} - {project.year})
                      </span>
                      <h3
                        className="font-['Archivo',sans-serif] text-[42px] md:text-[52px] leading-[0.9] tracking-[-0.02em] text-white mb-2"
                        style={{ fontWeight: 900 }}
                      >
                        {project.title}
                      </h3>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#D52169] text-white px-6 py-3 font-['Archivo',sans-serif] text-[11px] tracking-[0.1em] uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
                      style={{ fontWeight: 700 }}
                    >
                      {t('projects.viewProject')}
                    </motion.button>
                  </div>

                  {/* Number */}
                  <div className="absolute top-8 right-8">
                    <span
                      className="font-['Archivo',sans-serif] text-[64px] text-white/10 group-hover:text-white/20 transition-colors"
                      style={{ fontWeight: 900 }}
                    >
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-[#28292D] dark:text-white border-2 border-[#28292D] dark:border-white px-12 py-5 hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D] font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer"
              style={{ fontWeight: 700 }}
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
            >
              {showAll ? t('projects.closeProjects') : t('projects.viewAll')}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Modal Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1a1a1a] max-w-[1400px] w-full max-h-[90vh] overflow-y-auto rounded-xl relative"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#D52169] hover:bg-[#28292D] rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label={t('projects.closeModal')}
              >
                <X className="text-white" size={24} />
              </motion.button>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Gallery Side */}
                <div className="bg-[#0a0a0a] relative min-h-[400px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[600px]">
                  <ImageWithFallback
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#D52169] backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        aria-label={t('projects.prevImage')}
                      >
                        <span className="text-white text-[24px]">←</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#D52169] backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        aria-label={t('projects.nextImage')}
                      >
                        <span className="text-white text-[24px]">→</span>
                      </motion.button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span
                      className="text-white font-['Archivo',sans-serif] text-[12px] tracking-[0.1em]"
                      style={{ fontWeight: 600 }}
                    >
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-12 px-6 md:px-12 lg:p-16 flex flex-col justify-center">
                  <span
                    className="font-['Archivo',sans-serif] text-[10px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-6 block italic"
                    style={{ fontWeight: 400 }}
                  >
                    ({selectedProject.category} - {selectedProject.year})
                  </span>

                  <h3
                    className="font-['Archivo',sans-serif] text-[38px] md:text-[72px] leading-[0.9] tracking-[-0.02em] text-[#28292D] dark:text-white mb-6"
                    style={{ fontWeight: 900 }}
                  >
                    {selectedProject.title}
                  </h3>

                  <p
                    className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/70 leading-[1.7] mb-10"
                    style={{ fontWeight: 400 }}
                  >
                    {selectedProject.description}
                  </p>

                  {/* Services */}
                  <div className="mb-10">
                    <h4
                      className="font-['Archivo',sans-serif] text-[12px] tracking-[0.2em] uppercase text-[#28292D]/50 dark:text-white/50 mb-4"
                      style={{ fontWeight: 600 }}
                    >
                      {t('projects.servicesLabel')}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-[#F5F5F5] dark:bg-[#28292D] text-[#28292D] dark:text-white px-4 py-2 font-['Archivo',sans-serif] text-[11px] tracking-[0.05em] uppercase"
                          style={{ fontWeight: 600 }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {selectedProject.url && selectedProject.url.trim() !== "" && (
                    <motion.a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] w-fit cursor-pointer inline-block"
                      style={{ fontWeight: 700 }}
                    >
                      {t('projects.visitWebsite')}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
