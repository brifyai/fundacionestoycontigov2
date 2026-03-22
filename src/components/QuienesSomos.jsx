import React from 'react';
import { motion } from 'framer-motion';
import './QuienesSomos.css';

// Iconos Material Design 3
const IconInclusion = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const IconSecurity = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const IconCoConstruction = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const IconTransparency = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon qs-icon-large">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const IconHandshake = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon qs-icon-large">
    <path d="M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-4.05 4.05c-.39.39-1.04.39-1.43 0-.39-.39-.39-1.04 0-1.43l4.46-4.46c.39-.39 1.04-.39 1.43 0l4.47 4.46 4.05-4.05c.39-.39 1.04-.39 1.43 0 .39.39.39 1.04 0 1.43l-4.46 4.46c-.39.39-1.04.39-1.43 0zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const IconMethod = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon qs-icon-large">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

const IconBuilding = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon qs-icon-xl">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

const IconDirectorio = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon qs-icon-avatar">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const IconCoordinadores = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon qs-icon-avatar">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const IconVoluntarios = () => (
  <svg viewBox="0 0 24 24" className="qs-material-icon qs-icon-avatar">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      {/* Header Section con imagen de fondo */}
      <section className="qs-header" style={{ backgroundImage: `url('/images/quienes_somos1.png')` }}>
        <div className="qs-header-overlay" />
        <motion.div 
          className="qs-header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
      </section>

      {/* La Brecha Invisible */}
      <section className="qs-section qs-brecha">
        <div className="qs-section-inner">
          <motion.div 
            className="qs-text-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>La Brecha Invisible</h2>
            <p>
              En Chile, la digitalización avanza rápido, pero deja a muchos atrás. No es solo un problema 
              de tener internet o un celular; es un problema de saber usarlo para mejorar la calidad de vida.
            </p>
            <p>
              Vimos cómo nuestros adultos mayores eran vulnerables a estafas cada vez más sofisticadas. 
              Vimos a dueñas de casa con emprendimientos increíbles que no sabían vender online. Vimos a 
              estudiantes con talento que usaban la tecnología solo para redes sociales y no para crear.
            </p>
            <p className="qs-highlight">
              Así nació Fundación Estoy Contigo: para convertir la tecnología en una herramienta de 
              protección, educación y progreso comunitario.
            </p>
          </motion.div>
          <motion.div 
            className="qs-image-content"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="qs-image-placeholder">
              <span>Imagen ilustrativa</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="qs-section qs-mision-vision">
        <div className="qs-two-columns">
          <motion.div 
            className="qs-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Nuestra Misión</h2>
            <p>
              Democratizar el acceso a la Inteligencia Artificial en las comunidades vulnerables de Chile, 
              proporcionando herramientas tecnológicas y educación práctica para fortalecer la seguridad 
              barrial, potenciar la educación escolar y reconstruir el tejido social.
            </p>
            <div className="qs-pilares">
              <div className="qs-pilar">
                <span className="qs-pilar-icon"><IconInclusion /></span>
                <span className="qs-pilar-text">Inclusión Radical: Hablamos "en humano".</span>
              </div>
              <div className="qs-pilar">
                <span className="qs-pilar-icon"><IconSecurity /></span>
                <span className="qs-pilar-text">Seguridad Ante Todo: Proteger a la familia.</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="qs-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>Nuestra Visión</h2>
            <p>
              Un Chile donde cada sede vecinal sea un nodo de innovación, donde la tecnología proteja a 
              las familias y nivele las oportunidades, sin importar el código postal.
            </p>
            <div className="qs-pilares">
              <div className="qs-pilar">
                <span className="qs-pilar-icon"><IconCoConstruction /></span>
                <span className="qs-pilar-text">Co-Construcción: Trabajamos CON la Junta de Vecinos.</span>
              </div>
              <div className="qs-pilar">
                <span className="qs-pilar-icon"><IconTransparency /></span>
                <span className="qs-pilar-text">Transparencia: Cuentas claras e impacto medible.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modelo Operativo */}
      <section className="qs-section qs-modelo">
        <div className="qs-section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Modelo Operativo
          </motion.h2>
          <motion.span 
            className="qs-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            DESCENTRALIZADO Y TERRITORIAL
          </motion.span>
        </div>
        
        <div className="qs-modelo-content">
          <motion.div 
            className="qs-modelo-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="qs-modelo-intro">
              No gastamos en oficinas lujosas en barrios financieros. Nuestro modelo es eficiente y va directo al problema.
            </p>
            
            <div className="qs-modelo-items">
              <div className="qs-modelo-item">
                <div className="qs-modelo-icon"><IconLocation /></div>
                <div className="qs-modelo-item-content">
                  <h3>El Nodo</h3>
                  <p>Operamos instalando laboratorios móviles o fijos directamente en Sedes Sociales y Juntas de Vecinos. La sede se transforma en el aula.</p>
                </div>
              </div>
              
              <div className="qs-modelo-item">
                <div className="qs-modelo-icon"><IconHandshake /></div>
                <div className="qs-modelo-item-content">
                  <h3>La Alianza</h3>
                  <p>Firmamos convenios con Municipios (DIDECO) para el acceso al territorio y con Empresas para la donación de hardware (RSE).</p>
                </div>
              </div>
              
              <div className="qs-modelo-item">
                <div className="qs-modelo-icon"><IconMethod /></div>
                <div className="qs-modelo-item-content">
                  <h3>El Método</h3>
                  <p>Talleres prácticos, cortos y al grano. Aprender haciendo, en tu mismo barrio y con tus vecinos.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="qs-modelo-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="qs-modelo-card-icon"><IconBuilding /></div>
            <h3>Sede Social = Nodo Digital</h3>
            <p>Llevamos la tecnología a donde está la gente.</p>
          </motion.div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="qs-section qs-equipo">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Nuestro Equipo
        </motion.h2>
        
        <div className="qs-equipo-grid">
          <motion.div 
            className="qs-equipo-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="qs-equipo-avatar"><IconDirectorio /></div>
            <h3>Directorio</h3>
            <p>Liderazgo Estratégico</p>
          </motion.div>
          
          <motion.div 
            className="qs-equipo-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="qs-equipo-avatar"><IconCoordinadores /></div>
            <h3>Coordinadores</h3>
            <p>Gestión Territorial</p>
          </motion.div>
          
          <motion.div 
            className="qs-equipo-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <div className="qs-equipo-avatar"><IconVoluntarios /></div>
            <h3>Voluntarios</h3>
            <p>Facilitadores en Terreno</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="qs-section qs-cta">
        <motion.div 
          className="qs-cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2>Sé parte del cambio</h2>
          <p>Si eres un municipio, empresa o vecino interesado, hay un lugar para ti en nuestra misión.</p>
          <button className="qs-cta-button">Contáctanos</button>
        </motion.div>
      </section>
    </div>
  );
};

export default QuienesSomos;
