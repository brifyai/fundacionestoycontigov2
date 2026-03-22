import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import './NoticiasGrid.css';

const noticiasData = [
  {
    id: 1,
    categoria: 'ALERTA',
    categoriaColor: '#E74C3C',
    subcategoria: 'SEGURIDAD',
    titulo: '3 Estafas con IA que ya están en Chile',
    descripcion: 'Conoce el "Cuento del Tío 2.0" y cómo la clonación de voz está afectando a familias en todo el país.',
    imagen: '/images/que_hacemos1.png'
  },
  {
    id: 2,
    categoria: 'EDUCACIÓN',
    categoriaColor: '#27AE60',
    subcategoria: 'FAMILIA',
    titulo: 'Cómo usar ChatGPT para ayudar a tu hijo con la tarea',
    descripcion: 'Guía práctica para padres: convierte la IA en un tutor de matemáticas y no en una máquina de hacer trampa.',
    imagen: '/images/nuestro_modelo1.png'
  },
  {
    id: 3,
    categoria: 'EMPRENDIMIENTO',
    categoriaColor: '#9B59B6',
    subcategoria: 'PYMES',
    titulo: 'Digitaliza tu pyme de barrio en 2 horas',
    descripcion: 'Herramientas gratuitas para crear logos, redactar posts de Instagram y organizar tu inventario con el celular.',
    imagen: '/images/caminos_globales1.png'
  },
  {
    id: 4,
    categoria: 'COMUNIDAD',
    categoriaColor: '#3498DB',
    subcategoria: 'VECINOS',
    titulo: 'Cómo crear un grupo de WhatsApp seguro para tu edificio',
    descripcion: 'Configuraciones de privacidad y reglas básicas para mantener la seguridad de tu comunidad.',
    imagen: '/images/conocimiento1.png'
  },
  {
    id: 5,
    categoria: 'TECNOLOGÍA',
    categoriaColor: '#F39C12',
    subcategoria: 'ADULTOS MAYORES',
    titulo: '5 apps que todo adulto mayor debería conocer',
    descripcion: 'Desde recordatorios de medicamentos hasta videollamadas familiares: tecnología al alcance de todos.',
    imagen: '/images/quienes_somos1.png'
  },
  {
    id: 6,
    categoria: 'ALIANZAS',
    categoriaColor: '#1ABC9C',
    subcategoria: 'MUNICIPIOS',
    titulo: 'Providencia y Estoy Contigo firman convenio de colaboración',
    descripcion: 'La alianza permitirá llevar talleres de alfabetización digital a 15 sedes vecinales del municipio.',
    imagen: '/images/contacto1.png'
  }
];
const NoticiaCard = ({ noticia, index }) => {
  return (
    <motion.article
      className="noticia-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div className="noticia-imagen-container">
        <OptimizedImage 
          src={noticia.imagen} 
          alt={noticia.titulo}
          className="noticia-imagen"
          loading="lazy"
        />
        <span 
          className="noticia-categoria-badge"
          style={{ backgroundColor: noticia.categoriaColor }}
        >
          {noticia.categoria}
        </span>
      </div>
      <div className="noticia-content">
        <span className="noticia-subcategoria">{noticia.subcategoria}</span>
        <h3 className="noticia-titulo">{noticia.titulo}</h3>
        <p className="noticia-descripcion">{noticia.descripcion}</p>
        <a href="#" className="noticia-leer-mas">
          Leer más 
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

const NoticiasGrid = () => {
  return (
    <div className="noticias-section">
      <motion.h2 
        className="noticias-titulo-principal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Novedades y Consejos
      </motion.h2>
      <div className="noticias-grid">
        {noticiasData.map((noticia, index) => (
          <NoticiaCard key={noticia.id} noticia={noticia} index={index} />
        ))}
      </div>
    </div>
  );
};

export default NoticiasGrid;
