import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Palette,
  Globe,
  Users,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InteractiveCard from '../components/InteractiveCard';

import { useTheme } from '../contexts/ThemeContext';
import ACImage from '../gal/ac.jpeg';
import sasImage from '../gal/sas.jpeg';
import SpicesImage from '../gal/spices.png';
import ServiceCarousel from '../components/ServiceCarousel';

// Sample project data
const sampleProjects = [
  {
    id: 1,
    title: 'Cooling Services Website',
    description:
      'A service website for home appliance repairs including washing machines, fridges, and ACs.',
    image: ACImage,
    link: 'https://multibrandwashingmachineservice.in/ ',
    category: 'Web Development',
  },
  {
    id: 2,
    title: ' Business Consultancy Website',
    description:
      'A modern business website for an import-export consultancy firm offering expert guidance to global trade clients',
    image: sasImage,
    link: ' https://sas-impex.netlify.app/',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Sri Karpagam Brand Website',
    description:
      'A product showcase website featuring traditional flours and food mixes with a clean product gallery',
    image: SpicesImage,
    link: 'https://sri-karpagam.netlify.app/',
    category: 'Web Development',
  },
];

const Home = () => {
  const { isDark } = useTheme();

  const services = [
    {
      title: 'Web Development',
      description:
        'Professional websites with responsive design and modern features',
      icon: <Zap className="h-8 w-8" />,
      link: '/services',
      color: 'emerald' as const,
    },
    {
      title: 'AI & ML Projects',
      description: 'Custom AI solutions for businesses and academic projects',
      icon: <Sparkles className="h-8 w-8" />,
      link: '/students',
      color: 'purple' as const,
    },
    {
      title: 'Logo Design',
      description: 'Professional brand identity and creative logo solutions',
      icon: <Palette className="h-8 w-8" />,
      link: '/services',
      color: 'pink' as const,
    },
    {
      title: 'Data Analysis',
      description: 'Comprehensive data insights and visualization solutions',
      icon: <Target className="h-8 w-8" />,
      link: '/services',
      color: 'blue' as const,
    },
  ];

  const features = [
    {
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support',
      icon: <Globe className="h-12 w-12" />,
      color: 'emerald' as const,
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience',
      icon: <Users className="h-12 w-12" />,
      color: 'purple' as const,
    },
    {
      title: 'Quality Assured',
      description: 'Premium solutions with guaranteed satisfaction',
      icon: <Award className="h-12 w-12" />,
      color: 'blue' as const,
    },
  ];

  return (
    <div className="relative min-h-screen pt-16">
      {/* Hero Section with Enhanced Effects */}
      <section className="relative pt-32 pb-20 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 mb-8"
            >
              <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
              <span
                className={`text-sm font-medium ${
                  isDark ? 'text-emerald-300' : 'text-emerald-600'
                }`}
              >
                Trusted by 30+ clients
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Integer.io Services
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-3xl md:text-5xl font-bold ${
                  isDark ? 'text-gray-200' : 'text-gray-900'
                }`}
              >
                From Worldwide
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-bold ${
                isDark ? 'text-gray-200' : 'text-gray-900'
              }`}
            >
              Delivering Premium Digital Solutions Globally
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`text-lg mb-12 max-w-3xl mx-auto font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}
            >
              We specialize in cutting-edge web development, AI/ML solutions,
              professional branding, and data analytics for businesses,
              institutions, and students across the globe.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group hover:scale-105 transform shadow-lg btn-hover-effect"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg btn-hover-effect"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
          >
            Our Core Services
          </motion.h2>

          <section id="services">
            <ServiceCarousel />
          </section>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg btn-hover-effect group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
          >
            Why Choose Integer.io Services?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <InteractiveCard
                  glowColor={feature.color}
                  className="text-center p-8"
                >
                  <div
                    className={`text-${feature.color}-400 mb-6 flex justify-center`}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className={isDark ? 'text-gray-200' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <InteractiveCard
                  glowColor="emerald"
                  className="overflow-hidden h-full"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg"
                      >
                        See Online
                      </a>
                    </motion.div>
                  </div>
                  <div className="p-2">
                    <span className="text-emerald-400 text-sm font-medium">
                      {project.category}
                    </span>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg btn-hover-effect"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
     
    </div>
  );
};

export default Home;
