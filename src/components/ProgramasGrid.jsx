import React from 'react';
import { motion } from 'framer-motion';
import './ProgramasGrid.css';
import { IconShield, IconSchool, IconRocket, IconHeart, IconChevronRight } from './Icons';

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
        <IconChevronRight />
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
