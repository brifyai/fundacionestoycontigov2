import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import './SidebarMenu.css';
import { 
  HomeIcon, 
  ProgramsIcon, 
  MethodIcon, 
  AboutIcon, 
  ContactIcon, 
  KnowledgeIcon, 
  NewsIcon
} from './MaterialIcons.jsx';

// Items del menú con sus iconos y rutas
const menuItems = [
  { id: 'inicio', label: 'Inicio', Icon: HomeIcon, path: '/' },
  { id: 'quienes-somos', label: 'Quiénes somos', Icon: AboutIcon, path: '/quienes-somos' },
  { id: 'nuestro-modelo', label: 'Nuestro modelo', Icon: MethodIcon, path: '/nuestro-modelo' },
  { id: 'que-hacemos', label: 'Qué hacemos', Icon: ProgramsIcon, path: '/que-hacemos' },
  { id: 'conocimiento', label: 'Conocimiento', Icon: KnowledgeIcon, path: '/conocimiento' },
  { id: 'noticias', label: 'Noticias', Icon: NewsIcon, path: '/noticias' },
  { id: 'contacto', label: 'Contacto', Icon: ContactIcon, path: '/contacto' },
];

/**
 * SidebarMenu - Componente de navegación lateral con estilo Glassmorphism Artístico
 * 
 * Características:
 * - Diseño translúcido con backdrop blur
 * - Paleta de colores inspirada en acuarela de Santiago
 * - Responsive: Desktop (fijo), Tablet (colapsable), Mobile (drawer)
 * - Transiciones suaves y elegantes
 * - Accesible (ARIA labels, foco visible)
 */
const SidebarMenu = ({ onNavigate, isInterior = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Detectar item activo basado en la ruta actual
  const currentPath = location.pathname;
  const activeItem = currentPath === '/' ? 'inicio' : currentPath.replace('/', '');

  // Detectar tamaño de pantalla para responsive
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsCollapsed(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Cerrar menú mobile al cambiar de ruta
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Manejar navegación
  const handleItemClick = (item) => {
    navigate(item.path);
    if (onNavigate) {
      onNavigate(item.id);
    }
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Toggle del menú mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle colapso en tablet
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Botón hamburguesa para mobile */}
      {isMobile && (
        <motion.button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>
      )}

      {/* Overlay para mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar principal */}
      <motion.aside
        className={`sidebar-glass ${isCollapsed ? 'collapsed' : ''} ${isMobile ? 'mobile' : ''}`}
        initial={isMobile ? { x: -280 } : { x: 0 }}
        animate={{ 
          x: isMobile ? (isOpen ? 0 : -280) : 0,
          width: isCollapsed ? 72 : 280
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        role="navigation"
        aria-label="Menú principal"
      >
        {/* Header del sidebar */}
        <header className="sidebar-header">
          {/* Logo multicolor */}
          <div className="sidebar-logo-container">
            <div className="sidebar-logo-circle" aria-hidden="true">
              <div className="logo-gradient"></div>
            </div>
            
            {/* Títulos (ocultos cuando está colapsado) */}
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  className="sidebar-titles"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h1 className="sidebar-title">Fundación Estoy Contigo</h1>
                  <p className="sidebar-subtitle">Apoyo y Comunidad</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Botón colapsar/expandir (solo tablet/desktop) */}
          {!isMobile && (
            <button
              className="collapse-toggle"
              onClick={toggleCollapse}
              aria-label={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
              title={isCollapsed ? 'Expandir' : 'Colapsar'}
            >
              <svg 
                viewBox="0 0 24 24" 
                className={`collapse-icon ${isCollapsed ? 'collapsed' : ''}`}
                aria-hidden="true"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
          )}
        </header>

        {/* Separador */}
        <div className="sidebar-divider" aria-hidden="true"></div>

        {/* Navegación */}
        <nav className="sidebar-nav">
          <ul className="sidebar-menu-list" role="menubar">
            {menuItems.map((item, index) => {
              const IconComponent = item.Icon;
              const isActive = activeItem === item.id;
              
              return (
                <motion.li
                  key={item.id}
                  role="none"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    className={`sidebar-menu-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleItemClick(item)}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    title={isCollapsed ? item.label : undefined}
                  >
                    {/* Indicador activo */}
                    {isActive && (
                      <motion.div
                        className="active-indicator"
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                      />
                    )}
                    
                    {/* Icono */}
                    <span className="menu-item-icon" aria-hidden="true">
                      <IconComponent />
                    </span>
                    
                    {/* Label (oculto cuando colapsado) */}
                    <AnimatePresence mode="wait">
                      {!isCollapsed && (
                        <motion.span
                          className="menu-item-label"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Tooltip para modo colapsado */}
                    {isCollapsed && (
                      <span className="menu-item-tooltip" role="tooltip">
                        {item.label}
                      </span>
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="sidebar-footer">
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="footer-text">Fundación Estoy Contigo</p>
                <p className="footer-copyright">© 2025</p>
              </motion.div>
            )}
          </AnimatePresence>
        </footer>
      </motion.aside>
    </>
  );
};

export default SidebarMenu;
