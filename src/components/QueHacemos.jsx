import React from 'react';
import { motion } from 'framer-motion';
import './QueHacemos.css';

const areasTrabajo = [
  {
    id: 1,
    titulo: 'Educación Digital',
    descripcion: 'Capacitamos a estudiantes y adultos en herramientas tecnológicas e inteligencia artificial para potenciar sus oportunidades de desarrollo.',
    icono: 'education',
    color: '#3182CE',
    imagen: encodeURI('/images/Capa de edificios protagonistas (1).png')
  },
  {
    id: 2,
    titulo: 'Seguridad Barrial',
    descripcion: 'Protegemos a las familias de estafas digitales y ciberdelitos mediante talleres prácticos de alfabetización digital segura.',
    icono: 'security',
    color: '#E53E3E',
    imagen: encodeURI('/images/Capa de ciudad lejana _ skyline.png')
  },
  {
    id: 3,
    titulo: 'Emprendimiento Tech',
    descripcion: 'Empoderamos a dueñas de casa y emprendedores locales con herramientas digitales para hacer crecer sus negocios.',
    icono: 'business',
    color: '#38A169',
    imagen: encodeURI('/images/Capa de cordillera nevada lejana (1).png')
  },
  {
    id: 4,
    titulo: 'Inclusión Digital',
    descripcion: 'Trabajamos con adultos mayores y grupos vulnerables para reducir la brecha digital y promover la autonomía tecnológica.',
    icono: 'inclusion',
    color: '#805AD5',
    imagen: encodeURI('/images/Capa de montañas medias _ neblina atmosférica.png')
  }
];

const IconEducation = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

const IconSecurity = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const IconBusiness = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

const IconInclusion = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

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
        <img src={area.imagen} alt={area.titulo} />
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
          <img src="/images/que_hacemos1.png" alt="Qué Hacemos" />
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
            <img src="/images/que_hacemos1.png" alt="Trabajo en terreno" />
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
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default QueHacemos;
