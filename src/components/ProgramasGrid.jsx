import React from 'react';
import { motion } from 'framer-motion';
import './ProgramasGrid.css';

const programasData = [
  {
    id: 1,
    titulo: 'Barrio Seguro Digital',
    descripcion: 'Talleres prácticos para proteger a las familias de estafas telefónicas, phishing y clonación de voz usando IA.',
    icono: 'shield',
    color: '#E74C3C'
  },
  {
    id: 2,
    titulo: 'Educación 4.0',
    descripcion: 'Acompañamiento escolar con herramientas de IA para estudiantes y padres que quieren potenciar el aprendizaje.',
    icono: 'school',
    color: '#27AE60'
  },
  {
    id: 3,
    titulo: 'Emprende Tech',
    descripcion: 'Capacitación en herramientas digitales para dueñas de casa y emprendedores de barrio.',
    icono: 'rocket',
    color: '#9B59B6'
  },
  {
    id: 4,
    titulo: 'Conecta Mayor',
    descripcion: 'Programa de alfabetización digital para adultos mayores, enfocado en autonomía y seguridad.',
    icono: 'heart',
    color: '#3498DB'
  }
];

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const IconSchool = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5s-4.5 2.02-4.5 8.5c0 1.74.5 3.5 1.5 5L12 22l3-5.5c1-1.5 1.5-3.26 1.5-5 0-6.48-4.5-8.5-4.5-8.5zm0 11c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const getIcon = (icono) => {
  switch (icono) {
    case 'shield': return <IconShield />;
    case 'school': return <IconSchool />;
    case 'rocket': return <IconRocket />;
    case 'heart': return <IconHeart />;
    default: return <IconShield />;
  }
};

const ProgramaCard = ({ programa, index }) => {
  return (
    <motion.div
      className="programa-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
    >
      <div 
        className="programa-icon-wrapper"
        style={{ backgroundColor: `${programa.color}15`, color: programa.color }}
      >
        {getIcon(programa.icono)}
      </div>
      <h3 className="programa-titulo">{programa.titulo}</h3>
      <p className="programa-descripcion">{programa.descripcion}</p>
      <a href="#" className="programa-link" style={{ color: programa.color }}>
        Conoce más
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      </a>
    </motion.div>
  );
};

const ProgramasGrid = () => {
  return (
    <div className="programas-section">
      <div className="programas-container">
        <motion.div 
          className="programas-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="programas-titulo-principal">Nuestro Modelo</h2>
          <p className="programas-subtitulo">
            Un enfoque integral y sostenible
          </p>
        </motion.div>
        
        <div className="programas-grid">
          {programasData.map((programa, index) => (
            <ProgramaCard key={programa.id} programa={programa} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramasGrid;
