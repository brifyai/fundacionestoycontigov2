import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContentView.css';
import QuienesSomos from './QuienesSomos';
import NoticiasGrid from './NoticiasGrid';
import ProgramasGrid from './ProgramasGrid';
import QueHacemos from './QueHacemos';
import Conocimiento from './Conocimiento';
import { 
  IconPerson, 
  IconEmail, 
  IconPhone, 
  IconMessage, 
  IconSend, 
  IconSuccess, 
  IconError, 
  IconUsers, 
  IconLocation, 
  IconBusiness,
  IconClose
} from './Icons';

// Componente de tarjeta de información de contacto
const ContactInfoCard = ({ icon, title, description }) => (
  <motion.div 
    className="contact-info-card"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="contact-info-icon-wrapper">
      {icon}
    </div>
    <div className="contact-info-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </motion.div>
);

// Componente de formulario de contacto
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: 'Consulta General',
    mensaje: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const formDataObj = new FormData();
      formDataObj.append('nombre', formData.nombre);
      formDataObj.append('email', formData.email);
      formDataObj.append('asunto', formData.asunto);
      formDataObj.append('mensaje', formData.mensaje);

      const response = await fetch('/contacto.php', {
        method: 'POST',
        body: formDataObj
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message });
        setFormData({ nombre: '', email: '', asunto: 'Consulta General', mensaje: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.error || 'Error al enviar el mensaje' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Error de conexión. Por favor, intenta nuevamente.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="contact-section-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Columna izquierda - Información */}
      <div className="contact-info-column">
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hablemos
        </motion.h2>
        
        <motion.p 
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Ya seas un vecino que quiere traer el programa a su barrio, un alcalde interesado en una alianza, o un joven que quiere ser voluntario, queremos escucharte.
        </motion.p>
        
        <motion.p 
          className="contact-description-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Completa el formulario y un coordinador territorial se pondrá en contacto contigo a la brevedad.
        </motion.p>

        <div className="contact-info-cards">
          <ContactInfoCard 
            icon={<IconUsers />}
            title="Vecinos y Dirigentes"
            description="¿Quieres que la fundación vaya a tu sede social?"
          />
          <ContactInfoCard 
            icon={<IconLocation />}
            title="Municipios (DIDECO)"
            description="Convenios para implementar 'Barrio Seguro' en tu comuna."
          />
          <ContactInfoCard 
            icon={<IconBusiness />}
            title="Empresas (RSE)"
            description="Donación de equipamiento y alianzas estratégicas."
          />
        </div>
      </div>

      {/* Columna derecha - Formulario */}
      <motion.div 
        className="contact-form-wrapper"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <form className="contact-form-modern" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`form-status ${status.type}`}>
              <span className="form-status-icon">
                {status.type === 'success' ? <IconSuccess /> : <IconError />}
              </span>
              {status.message}
            </div>
          )}

          <div className="contact-form-row">
            <div className="form-group-modern">
              <label htmlFor="nombre">NOMBRE</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Juan Pérez"
              />
            </div>

            <div className="form-group-modern">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="juan@ejemplo.com"
              />
            </div>
          </div>

          <div className="form-group-modern">
            <label htmlFor="asunto">ASUNTO</label>
            <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            >
              <option value="Consulta General">Consulta General</option>
              <option value="Vecinos y Dirigentes">Vecinos y Dirigentes</option>
              <option value="Municipios">Municipios (DIDECO)</option>
              <option value="Empresas">Empresas (RSE)</option>
              <option value="Voluntariado">Voluntariado</option>
            </select>
          </div>

          <div className="form-group-modern">
            <label htmlFor="mensaje">MENSAJE</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Cuéntanos cómo podemos ayudarte..."
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn-modern"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Enviando...'
            ) : (
              <>
                Enviar Mensaje <IconSend />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

// Contenido de cada sección
const sectionContent = {
  inicio: {
    title: 'Bienvenidos a Fundación Estoy Contigo',
    subtitle: 'Transformando vidas en Santiago',
    content: `Somos una organización dedicada a mejorar la calidad de vida de las personas en nuestra comunidad. 
    
A través de programas innovadores y un enfoque humano, trabajamos para crear un impacto positivo y sostenible en Santiago y sus alrededores.

Nuestra misión es acompañar a las personas en sus procesos de desarrollo personal y comunitario, brindando herramientas y recursos que les permitan alcanzar su máximo potencial.`,
    image: '/images/capa-edificios.png'
  },
  programas: {
    title: 'Nuestros Programas',
    subtitle: 'Iniciativas que transforman',
    content: `**Programa de Acompañamiento Integral**

Ofrecemos apoyo personalizado a individuos y familias que enfrentan diversos desafíos. Nuestro equipo de profesionales trabaja de manera cercana y empática para brindar las herramientas necesarias para superar obstáculos.

**Talleres de Desarrollo Personal**

Espacios de aprendizaje y crecimiento donde las personas pueden adquirir nuevas habilidades, fortalecer su autoestima y construir redes de apoyo mutuo.

**Intervención Comunitaria**

Trabajamos directamente en los barrios de Santiago, identificando necesidades específicas y co-creando soluciones con los residentes locales.`,
    image: '/images/capa-ciudad.png'
  },
  metodo: {
    title: 'Nuestro Método',
    subtitle: 'Un enfoque basado en la cercanía',
    content: `**Escucha Activa**

Todo comienza con escuchar. Nos tomamos el tiempo necesario para comprender las necesidades reales de cada persona y comunidad con la que trabajamos.

**Acompañamiento Continuo**

No creemos en soluciones rápidas. Estamos presentes durante todo el proceso de transformación, ajustando nuestras intervenciones según las necesidades que surgen.

**Trabajo en Red**

Colaboramos con diversas organizaciones, instituciones y actores locales para maximizar el impacto de nuestras acciones y crear ecosistemas de apoyo sostenibles.

**Evaluación y Aprendizaje**

Medimos constantemente nuestros resultados para mejorar y adaptar nuestras metodologías a los contextos cambiantes.`,
    image: '/images/capa-cordillera.png'
  },
  impacto: {
    title: 'Nuestro Impacto',
    subtitle: 'Resultados que hablan',
    content: `**+5,000 Personas Acompañadas**

Desde nuestra fundación, hemos trabajado directamente con miles de personas, brindándoles herramientas para mejorar su calidad de vida.

**+50 Talleres Realizados**

Hemos desarrollado decenas de talleres y capacitaciones que han equipado a nuestra comunidad con habilidades prácticas y conocimientos valiosos.

**+20 Barrios Intervenidos**

Nuestro trabajo comunitario ha llegado a múltiples sectores de Santiago, creando redes de apoyo y fortaleciendo el tejido social local.

**95% Satisfacción**

Las personas que participan en nuestros programas reportan alta satisfacción y perciben mejoras significativas en su bienestar.`,
    image: '/images/capa-neblina.png'
  },
  'quienes-somos': {
    title: 'Quiénes Somos',
    subtitle: '"Tecnología que une, futuro que incluye."',
    content: `**La Brecha Invisible**

En Chile, la digitalización avanza rápido, pero deja a muchos atrás. No es solo un problema de tener internet o un celular; es un problema de saber usarlo para mejorar la calidad de vida.

Vimos cómo nuestros adultos mayores eran vulnerables a estafas cada vez más sofisticadas. Vimos a dueñas de casa con emprendimientos increíbles que no sabían vender online. Vimos a estudiantes con talento que usaban la tecnología solo para redes sociales y no para crear.

Así nació Fundación Estoy Contigo: para convertir la tecnología en una herramienta de protección, educación y progreso comunitario.

---

**Nuestra Misión**

Democratizar el acceso a la Inteligencia Artificial en las comunidades vulnerables de Chile, proporcionando herramientas tecnológicas y educación práctica para fortalecer la seguridad barrial, potenciar la educación escolar y reconstruir el tejido social.

• **Inclusión Radical**: Hablamos "en humano".
• **Seguridad Ante Todo**: Proteger a la familia.

---

**Nuestra Visión**

Un Chile donde cada sede vecinal sea un nodo de innovación, donde la tecnología proteja a las familias y nivele las oportunidades, sin importar el código postal.

• **Co-Construcción**: Trabajamos CON la Junta de Vecinos.
• **Transparencia**: Cuentas claras e impacto medible.

---

**Modelo Operativo**

**DESCENTRALIZADO Y TERRITORIAL**

No gastamos en oficinas lujosas en barrios financieros. Nuestro modelo es eficiente y va directo al problema.

• **El Nodo**: Operamos instalando laboratorios móviles o fijos directamente en Sedes Sociales y Juntas de Vecinos. La sede se transforma en el aula.
• **La Alianza**: Firmamos convenios con Municipios (DIDECO) para el acceso al territorio y con Empresas para la donación de hardware (RSE).
• **El Método**: Talleres prácticos, cortos y al grano. Aprender haciendo, en tu mismo barrio y con tus vecinos.

**Sede Social = Nodo Digital**
Llevamos la tecnología a donde está la gente.

---

**Nuestro Equipo**

• **Directorio**: Liderazgo Estratégico
• **Coordinadores**: Gestión Territorial
• **Voluntarios**: Facilitadores en Terreno

---

**Sé parte del cambio**

Si eres un municipio, empresa o vecino interesado, hay un lugar para ti en nuestra misión.`,
    image: '/images/quienes_somos1.png'
  },
  'nuestro-modelo': {
    title: '',
    subtitle: '',
    content: `**Modelo de Acompañamiento**

Nuestro modelo se basa en tres pilares fundamentales: la escucha activa, el acompañamiento continuo y el trabajo colaborativo. Creemos que cada persona tiene potencialidades únicas que merecen ser descubiertas y potenciadas.

**Estrategia de Intervención**

Trabajamos desde un enfoque de derechos, reconociendo a cada individuo como sujeto de derechos y agente de cambio en su propia vida y en su comunidad. Nuestras intervenciones son personalizadas y adaptadas a cada contexto.

**Sostenibilidad**

Buscamos generar procesos de cambio que perduren en el tiempo. Por eso, trabajamos en fortalecer las capacidades de las personas y comunidades para que puedan autogestionar sus propios procesos de desarrollo.

**Innovación Social**

Constantemente exploramos nuevas metodologías y herramientas que nos permitan mejorar nuestro impacto. Estamos abiertos a aprender de otras experiencias y a compartir las nuestras.`,
    image: '/images/nuestro_modelo1.png'
  },
  'que-hacemos': {
    title: 'Qué Hacemos',
    subtitle: 'Nuestras acciones transforman vidas',
    content: `**Programas de Acompañamiento**

Desarrollamos programas personalizados de acompañamiento psicosocial para personas en situación de vulnerabilidad. Trabajamos de manera integral, considerando todas las dimensiones de la persona.

**Talleres y Capacitaciones**

Ofrecemos talleres de habilidades para la vida, emprendimiento, arte y cultura. Nuestros espacios de aprendizaje son inclusivos y accesibles para todos.

**Intervención Comunitaria**

Trabajamos directamente en los territorios, articulando con organizaciones locales, municipios y otras instituciones para crear redes de apoyo sólidas.

**Incidencia y Advocacy**

Participamos en espacios de incidencia política para visibilizar las necesidades de las comunidades con las que trabajamos y promover cambios estructurales.`,
    image: '/images/que_hacemos1.png'
  },
  'caminos-globales': {
    title: 'Caminos Globales',
    subtitle: 'Conectando con el mundo',
    content: `**Alianzas Internacionales**

Colaboramos con organizaciones de distintos países para intercambiar experiencias, metodologías y buenas prácticas en el ámbito del trabajo social y comunitario.

**Proyectos de Cooperación**

Participamos en proyectos de cooperación internacional que nos permiten ampliar nuestro impacto y aprender de contextos diversos.

**Redes de Aprendizaje**

Formamos parte de redes globales de organizaciones que trabajan por el desarrollo humano y la justicia social, compartiendo conocimientos y recursos.

**Visión Global, Acción Local**

Creemos que los desafíos locales están conectados con dinámicas globales. Por eso, buscamos comprender el contexto internacional para mejorar nuestras intervenciones locales.`,
    image: '/images/caminos_globales1.png'
  },
  conocimiento: {
    title: 'Conocimiento',
    subtitle: 'Aprendizajes y buenas prácticas',
    content: `**Investigación y Desarrollo**

Realizamos investigaciones sobre temáticas sociales relevantes para nuestra comunidad. Generamos conocimiento que contribuye al desarrollo del trabajo social en Chile.

**Publicaciones**

Elaboramos documentos, guías y manuales que sistematizan nuestra experiencia y pueden ser útiles para otras organizaciones y profesionales del área.

**Biblioteca Digital**

Contamos con una biblioteca de recursos abiertos que incluye artículos, videos, podcasts y otros materiales sobre desarrollo comunitario y trabajo social.

**Capacitaciones para Organizaciones**

Ofrecemos asesoría y capacitación a otras organizaciones que deseen fortalecer sus procesos de intervención comunitaria.`,
    image: '/images/conocimiento1.png'
  },
  noticias: {
    title: '',
    subtitle: '',
    content: `**Nuevos Talleres de Verano**

Este verano lanzamos una nueva serie de talleres gratuitos para jóvenes de la comuna. Inscripciones abiertas hasta el 15 de enero.

**Alianza con Municipalidad**

Firmamos un convenio de colaboración con la Municipalidad de Providencia para ampliar nuestros programas de acompañamiento en el territorio.

**Reconocimiento Nacional**

Nuestra fundación fue galardonada con el Premio al Impacto Social 2024 por nuestra trayectoria y contribución al desarrollo comunitario.

**Lanzamiento de App**

Pronto lanzaremos nuestra aplicación móvil para facilitar el acceso a nuestros recursos y programas. Mantente atento a las novedades.`,
    image: '/images/noticias1.png'
  },
  contacto: {
    title: '',
    subtitle: '',
    content: '',
    image: '/images/contacto1.png'
  }
};

// Componente wrapper que maneja el scroll
const ContentViewWrapper = ({ children, section, onClose }) => {
  const contentViewRef = useRef(null);

  // Efecto para hacer scroll al inicio cuando cambia la sección
  useEffect(() => {
    if (contentViewRef.current) {
      contentViewRef.current.scrollTop = 0;
    }
  }, [section]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={contentViewRef}
        key={section}
        className="content-view"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Botón de cerrar */}
        <motion.button
          className="content-close-btn"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconClose />
        </motion.button>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ContentView = ({ section, onClose }) => {
  const content = sectionContent[section] || sectionContent.inicio;

  // Si es la sección quienes-somos, usar el componente especial
  if (section === 'quienes-somos') {
    return (
      <ContentViewWrapper section={section} onClose={onClose}>
        <QuienesSomos />
      </ContentViewWrapper>
    );
  }

  // Si es la sección de contacto, mostrar con hero y formulario
  if (section === 'contacto') {
    return (
      <ContentViewWrapper section={section} onClose={onClose}>
        {/* Imagen de fondo */}
        <div className="content-hero">
          <motion.img
            src={content.image}
            alt={content.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="content-hero-overlay" />
          <div className="content-hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {content.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {content.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <ContactForm />
      </ContentViewWrapper>
    );
  }

  // Si es la sección de noticias, mostrar con hero y grid de noticias
  if (section === 'noticias') {
    return (
      <ContentViewWrapper section={section} onClose={onClose}>
        {/* Imagen de fondo */}
        <div className="content-hero">
          <motion.img
            src={content.image}
            alt={content.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="content-hero-overlay" />
          <div className="content-hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {content.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {content.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Grid de noticias */}
        <NoticiasGrid />
      </ContentViewWrapper>
    );
  }

  // Si es la sección nuestro-modelo, mostrar el grid de programas
  if (section === 'nuestro-modelo') {
    return (
      <ContentViewWrapper section={section} onClose={onClose}>
        {/* Imagen de fondo */}
        <div className="content-hero">
          <motion.img
            src={content.image}
            alt={content.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="content-hero-overlay" />
          <div className="content-hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {content.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {content.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Grid de programas */}
        <ProgramasGrid />
      </ContentViewWrapper>
    );
  }

  // Si es la sección que-hacemos, usar el componente especial
  if (section === 'que-hacemos') {
    return (
      <ContentViewWrapper section={section} onClose={onClose}>
        <QueHacemos />
      </ContentViewWrapper>
    );
  }

  // Si es la sección conocimiento, usar el componente especial
  if (section === 'conocimiento') {
    return (
      <ContentViewWrapper section={section} onClose={onClose}>
        <Conocimiento />
      </ContentViewWrapper>
    );
  }

  return (
    <ContentViewWrapper section={section} onClose={onClose}>
      {/* Imagen de fondo */}
      <div className="content-hero">
        <motion.img
          src={content.image}
          alt={content.title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="content-hero-overlay" />
        <div className="content-hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {content.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Contenido */}
      <motion.div
        className="content-body"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="content-text">
          {content.content.split('\n\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {paragraph.startsWith('**') ? (
                <strong>{paragraph.replace(/\*\*/g, '')}</strong>
              ) : (
                paragraph
              )}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </ContentViewWrapper>
  );
};

export default ContentView;
