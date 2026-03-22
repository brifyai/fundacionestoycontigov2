import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import './Conocimiento.css';
import { IconDocument, IconVideo, IconBook, IconDownload, IconArrowRight } from './Icons';

// Datos de recursos
const recursosData = [
  {
    id: 1,
    titulo: 'Guía de Alfabetización Digital para Adultos Mayores',
    descripcion: 'Manual práctico con ejercicios paso a paso para aprender a usar el celular y navegar por internet de forma segura.',
    categoria: 'documento',
    tipo: 'PDF',
    fecha: 'Enero 2025',
    imagen: '/images/conocimiento1.png'
  },
  {
    id: 2,
    titulo: 'Video: Cómo Identificar Estafas Online',
    descripcion: 'Serie de videos educativos que enseñan a reconocer los principales tipos de fraudes digitales y cómo protegerse.',
    categoria: 'video',
    tipo: 'Video',
    fecha: 'Diciembre 2024',
    imagen: '/images/que_hacemos1.png'
  },
  {
    id: 3,
    titulo: 'Manual del Emprendedor Digital',
    descripcion: 'Guía completa para dueñas de casa y emprendedores que quieren llevar su negocio al mundo digital.',
    categoria: 'documento',
    tipo: 'PDF',
    fecha: 'Noviembre 2024',
    imagen: '/images/nuestro_modelo1.png'
  },
  {
    id: 4,
    titulo: 'Podcast: Historias de Transformación Digital',
    descripcion: 'Testimonios reales de vecinos que han mejorado su calidad de vida gracias a la tecnología.',
    categoria: 'audio',
    tipo: 'Audio',
    fecha: 'Octubre 2024',
    imagen: '/images/quienes_somos1.png'
  },
  {
    id: 5,
    titulo: 'Informe de Impacto 2024',
    descripcion: 'Resultados medibles de nuestros programas en terreno: personas capacitadas, barrios intervenidos y casos de éxito.',
    categoria: 'documento',
    tipo: 'PDF',
    fecha: 'Septiembre 2024',
    imagen: '/images/noticias1.png'
  },
  {
    id: 6,
    titulo: 'Curso: Herramientas de IA para la Vida Diaria',
    descripcion: 'Material didáctico para talleres sobre cómo usar la inteligencia artificial en tareas cotidianas.',
    categoria: 'documento',
    tipo: 'PDF',
    fecha: 'Agosto 2024',
    imagen: '/images/contacto1.png'
  }
];

// Categorías
const categorias = [
  { id: 'todos', label: 'Todos', icon: IconDocument },
  { id: 'documento', label: 'Documentos', icon: IconBook },
  { id: 'video', label: 'Videos', icon: IconVideo },
  { id: 'audio', label: 'Podcasts', icon: IconDocument }
];

const Conocimiento = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const recursosFiltrados = categoriaActiva === 'todos' 
    ? recursosData 
    : recursosData.filter(r => r.categoria === categoriaActiva);

  return (
    <div className="conocimiento-container">
      {/* Hero Section - Solo imagen */}
      <section className="conocimiento-hero" style={{ backgroundImage: `url('/images/conocimiento1.png')` }}>
        <div className="conocimiento-hero-overlay" />
      </section>

      {/* Título y descripción fuera de la imagen */}
      <section className="conocimiento-header">
        <motion.div 
          className="conocimiento-header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Conocimiento</h1>
          <p>Recursos, investigaciones y aprendizajes para la transformación digital comunitaria</p>
        </motion.div>
      </section>

      {/* Introducción */}
      <section className="conocimiento-intro">
        <div className="conocimiento-intro-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            En Fundación Estoy Contigo creemos que el conocimiento debe ser accesible para todos. 
            Por eso compartimos nuestras investigaciones, manuales y recursos educativos de forma gratuita 
            para que otras organizaciones y comunidades puedan replicar nuestras metodologías.
          </motion.p>
        </div>
      </section>

      {/* Filtros de Categoría */}
      <section className="conocimiento-filtros">
        <div className="conocimiento-filtros-container">
          {categorias.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <motion.button
                key={cat.id}
                className={`conocimiento-filtro-btn ${categoriaActiva === cat.id ? 'active' : ''}`}
                onClick={() => setCategoriaActiva(cat.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconComponent />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Grid de Recursos */}
      <section className="conocimiento-grid-section">
        <div className="conocimiento-grid">
          {recursosFiltrados.map((recurso, index) => (
            <motion.article
              key={recurso.id}
              className="conocimiento-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="conocimiento-card-image">
                <OptimizedImage 
                  src={recurso.imagen} 
                  alt={recurso.titulo}
                  loading="lazy"
                />
                <span className="conocimiento-card-tipo">{recurso.tipo}</span>
              </div>
              <div className="conocimiento-card-content">
                <span className="conocimiento-card-fecha">{recurso.fecha}</span>
                <h3>{recurso.titulo}</h3>
                <p>{recurso.descripcion}</p>
                <button className="conocimiento-card-btn">
                  <span>Descargar</span>
                  <IconDownload />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Sección de Newsletter */}
      <section className="conocimiento-newsletter">
        <motion.div 
          className="conocimiento-newsletter-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Mantente actualizado</h2>
          <p>Suscríbete para recibir nuestras últimas publicaciones y recursos directamente en tu correo.</p>
          <div className="conocimiento-newsletter-form">
            <input 
              type="email" 
              placeholder="Tu correo electrónico"
              className="conocimiento-newsletter-input"
            />
            <button className="conocimiento-newsletter-btn">
              Suscribirse
              <IconArrowRight />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Sección de Colaboración */}
      <section className="conocimiento-colaboracion">
        <div className="conocimiento-colaboracion-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2>¿Tienes material para compartir?</h2>
            <p>
              Si eres investigador, académico o profesional del área social y tienes 
              recursos que puedan aportar a la comunidad, nos encantaría conocerlos.
            </p>
            <button className="conocimiento-colaboracion-btn">
              Proponer colaboración
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Conocimiento;
