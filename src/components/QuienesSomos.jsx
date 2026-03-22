import React from 'react';
import { motion } from 'framer-motion';
import './QuienesSomos.css';
import {
  IconInclusion,
  IconSecurity,
  IconCoConstruction,
  IconTransparency,
  IconLocation,
  IconHandshake,
  IconMethod,
  IconBuilding,
  IconDirectorio,
  IconCoordinadores,
  IconVoluntarios
} from './Icons';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      {/* Header Section con imagen de fondo */}
      <section className="qs-header" style={{ backgroundImage: `url('/images/quienes_somos1.png')`, height: '500px' }}>
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
