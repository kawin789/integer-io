import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Code,
  Palette,
  Database,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ProjectCard = ({ projects, className = '' }) => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'web development':
        return <Code className="h-4 w-4" />;
      case 'health tech':
        return <Database className="h-4 w-4" />;
      default:
        return <Palette className="h-4 w-4" />;
    }
  };

  return (
    <div className={`relative w-full max-w-7xl mx-auto ${className}`}>
      {/* Counter */}
      <div
        className={`text-right mb-4 text-sm font-medium ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {currentIndex + 1} / {projects.length}
      </div>

      {/* Mobile View - Full Rectangle Cards */}
      <div className="block lg:hidden">
        <div className="relative h-[500px] mx-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <motion.div
                className={`
                  relative w-full h-full rounded-2xl overflow-hidden shadow-xl border group
                  ${
                    isDark
                      ? 'bg-gray-900/80 border-gray-700/50'
                      : 'bg-white/90 border-gray-200/50'
                  }
                `}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Full Website Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* View Online Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500/90 hover:bg-emerald-600/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Online
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(projects[currentIndex].category)}
                    <span className="text-emerald-400 text-sm font-medium">
                      {projects[currentIndex].category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold leading-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {projects[currentIndex].title}
                  </h2>

                  {/* Description - Larger text */}
                  <p
                    className={`text-xl leading-relaxed font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {projects[currentIndex].description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4
                      className={`font-semibold text-sm uppercase tracking-wide ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isDark
                              ? 'bg-gray-800/80 text-gray-300 border border-gray-700/50'
                              : 'bg-gray-100/80 text-gray-700 border border-gray-200/50'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.15 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            disabled={isAnimating}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              absolute left-2 top-1/2 -translate-y-1/2 z-50
              w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
              ${
                isDark
                  ? 'bg-gray-800/90 border border-gray-600 text-gray-300'
                  : 'bg-white/90 border border-gray-300 text-gray-600'
              }
              shadow-lg backdrop-blur-sm disabled:opacity-50
            `}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            disabled={isAnimating}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              absolute right-2 top-1/2 -translate-y-1/2 z-50
              w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
              ${
                isDark
                  ? 'bg-gray-800/90 border border-gray-600 text-gray-300'
                  : 'bg-white/90 border border-gray-300 text-gray-600'
              }
              shadow-lg backdrop-blur-sm disabled:opacity-50
            `}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Desktop View - Grid Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <motion.div
              className={`
                relative h-[450px] rounded-2xl overflow-hidden shadow-xl border
                ${
                  isDark
                    ? 'bg-gray-900/80 border-gray-700/50'
                    : 'bg-white/90 border-gray-200/50'
                }
              `}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              {/* Full Website Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* View Online Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500/90 hover:bg-emerald-600/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Online
                  </motion.a>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  {getCategoryIcon(project.category)}
                  <span className="text-emerald-400 text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                {/* Description - Larger text */}
                <p
                  className={`text-xl leading-relaxed font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          isDark
                            ? 'bg-gray-800/80 text-gray-300 border border-gray-700/50'
                            : 'bg-gray-100/80 text-gray-700 border border-gray-200/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8 lg:hidden">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 300);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 w-8'
                : isDark
                ? 'bg-gray-600 hover:bg-gray-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;