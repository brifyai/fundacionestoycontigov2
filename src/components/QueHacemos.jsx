import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import './QueHacemos.css';
import { IconEducation, IconSecurity, IconBusiness, IconInclusion, IconArrowRight } from './Icons';

const areasTrabajo = [
  {
    id: 1,
    titulo: 'Educación Digital',
    descripcion: 'Capacitamos a estudiantes y adultos en herramientas tecnológicas e inteligencia artificial para potenciar sus oportunidades de desarrollo.',
    icono: 'education',
    color: '#3182CE',
    imagen: '/images/capa-edificios.png'
  },
  {
    id: 2,
    titulo: 'Seguridad Barrial',
    descripcion: 'Protegemos a las familias de estafas digitales y ciberdelitos mediante talleres prácticos de alfabetización digital segura.',
    icono: 'security',
    color: '#E53E3E',
    imagen: '/images/capa-ciudad.png'
  },
  {
    id: 3,
    titulo: 'Emprendimiento Tech',
    descripcion: 'Empoderamos a dueñas de casa y emprendedores locales con herramientas digitales para hacer crecer sus negocios.',
    icono: 'business',
    color: '#38A169',
    imagen: '/images/capa-cordillera.png'
  },
  {
    id: 4,
    titulo: 'Inclusión Digital',
    descripcion: 'Trabajamos con adultos mayores y grupos vulnerables para reducir la brecha digital y promover la autonomía tecnológica.',
    icono: 'inclusion',
    color: '#805AD5',
    imagen: '/images/capa-neblina.png'
  }
];

const getIcon = (icono) => {
  switch (icono) {
    case 'education': return <IconEducation />;
    case 'security': return <IconSecurity />;
    case 'business': return <IconBusiness />;
    case 'inclusion': return <IconInclusion />;
    default: return <IconEducation />;
  }
};

const AreaCard = ({ area, index }) => {
  return (
    <motion.div
      className="area-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
    >
      <div className="area-image">
        <OptimizedImage src={area.imagen} alt={area.titulo} loading="lazy" />
        <div className="area-image-overlay" style={{ backgroundColor: `${area.color}CC` }} />
      </div>
      <div className="area-content">
        <div 
          className="area-icon"
          style={{ backgroundColor: area.color, color: '#fff' }}
        >
          {getIcon(area.icono)}
        </div>
        <h3 className="area-titulo">{area.titulo}</h3>
        <p className="area-descripcion">{area.descripcion}</p>
      </div>
    </motion.div>
  );
};

const QueHacemos = () => {
  return (
    <div className="que-hacemos-container">
      {/* Hero Section - Solo Imagen */}
      <section className="qh-hero">
        <div className="qh-hero-image">
          <OptimizedImage src="/images/que_hacemos1.png" alt="Qué Hacemos" loading="eager" />
        </div>
      </section>

      {/* Header Section - Texto fuera de la imagen */}
      <section className="qh-header">
        <div className="qh-header-content">
          <motion.span 
            className="qh-label dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NUESTRO TRABAJO
          </motion.span>
          <motion.h1 
            className="qh-title dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Qué Hacemos
          </motion.h1>
          <motion.p 
            className="qh-description dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Trabajamos para democratizar el acceso a la tecnología en las comunidades 
            vulnerables de Chile, convirtiendo la Inteligencia Artificial en una herramienta 
            de protección, educación y progreso comunitario.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="qh-stats">
        <div className="qh-stats-grid">
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="stat-number">+5,000</span>
            <span className="stat-label">Personas capacitadas</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="stat-number">+50</span>
            <span className="stat-label">Talleres realizados</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="stat-number">+20</span>
            <span className="stat-label">Barrios intervenidos</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="stat-number">95%</span>
            <span className="stat-label">Satisfacción</span>
          </motion.div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="qh-areas">
        <div className="qh-areas-header">
          <motion.span 
            className="qh-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            LÍNEAS DE ACCIÓN
          </motion.span>
          <motion.h2 
            className="qh-areas-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Nuestras Áreas de Trabajo
          </motion.h2>
        </div>
        <div className="areas-grid">
          {areasTrabajo.map((area, index) => (
            <AreaCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="qh-approach">
        <div className="qh-approach-content">
          <motion.div 
            className="approach-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="qh-label">NUESTRO ENFOQUE</span>
            <h2>Trabajo en Terreno</h2>
            <p>
              No creemos en soluciones desde un escritorio. Nuestro equipo va directamente 
              a las sedes vecinales, instalando laboratorios móviles donde la comunidad 
              se reúne. Trabajamos codo a codo con vecinos, dirigentes y familias para 
              entender sus necesidades reales y co-crear soluciones tecnológicas prácticas.
            </p>
            <div className="approach-features">
              <div className="feature-item">
                <span className="feature-dot" style={{ backgroundColor: '#3182CE' }} />
                <span>Talleres prácticos y cortos</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" style={{ backgroundColor: '#38A169' }} />
                <span>Aprender haciendo</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" style={{ backgroundColor: '#805AD5' }} />
                <span>En tu propio barrio</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot" style={{ backgroundColor: '#E53E3E' }} />
                <span>Con tus vecinos</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="approach-image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <OptimizedImage src="/images/que_hacemos1.png" alt="Trabajo en terreno" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="qh-cta">
        <motion.div 
          className="qh-cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Quieres que trabajemos en tu comunidad?</h2>
          <p>
            Ya sea que representes a una junta de vecinos, un municipio o una empresa, 
            hay muchas formas de colaborar.
          </p>
          <button className="qh-cta-button">
            Contáctanos
            <IconArrowRight />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default QueHacemos;
