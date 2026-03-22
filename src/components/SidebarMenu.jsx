import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './SidebarMenu.css';
import { 
  HomeIcon, 
  ProgramsIcon, 
  MethodIcon, 
  ImpactIcon, 
  AboutIcon, 
  ContactIcon, 
  HeartIcon,
  GlobeIcon,
  KnowledgeIcon,
  NewsIcon
} from './MaterialIcons.jsx';

const menuItems = [
  { id: 'quienes-somos', label: 'Quiénes somos', Icon: AboutIcon, path: '/quienes-somos' },
  { id: 'nuestro-modelo', label: 'Nuestro modelo', Icon: MethodIcon, path: '/nuestro-modelo' },
  { id: 'que-hacemos', label: 'Qué hacemos', Icon: ProgramsIcon, path: '/que-hacemos' },
  { id: 'conocimiento', label: 'Conocimiento', Icon: KnowledgeIcon, path: '/conocimiento' },
  { id: 'noticias', label: 'Noticias', Icon: NewsIcon, path: '/noticias' },
  { id: 'contacto', label: 'Contacto', Icon: ContactIcon, path: '/contacto' },
];

const SidebarMenu = ({ onNavigate, isInterior = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determinar el item activo basado en la URL actual
  const currentPath = location.pathname;
  const activeItem = currentPath === '/' ? 'inicio' : currentPath.replace('/', '');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsOpen(false); // Cerrar el menú al hacer clic
    navigate(item.path);
    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  return (
    <>
      {/* Contenedor del botón y logo */}
      <div className={`menu-header-container ${isOpen ? 'open' : ''}`}>
        {/* Botón con logo */}
        <motion.button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/images/logo_menu.png" 
            alt="Menú" 
            className="menu-logo-img"
          />
        </motion.button>

        {/* Logo de la fundación - cambia según estado del menú o si estamos en interiores */}
        <Link to="/" className="fundacion-logo-link">
          <motion.img
            src={(isOpen || isInterior) ? "/images/Fundacion_estoy_contigo_menu_expandido.png" : "/images/Fundacion_estoy_contigov1.png"}
            alt="Fundación Estoy Contigo"
            className="fundacion-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          />
        </Link>
      </div>

      {/* Overlay para cerrar al hacer clic fuera */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menú lateral */}
      <motion.nav
        className="sidebar-menu"
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Header del menú */}
        <div className="menu-header">
          <div className="menu-logo">
            <span className="logo-text">Bienvenid@s</span>
          </div>
        </div>

        {/* Items del menú */}
        <div className="menu-items">
          {menuItems.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <motion.button
                key={item.id}
                className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="menu-item-icon">
                  <IconComponent />
                </span>
                <span className="menu-item-label">{item.label}</span>
                {activeItem === item.id && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Footer del menú */}
        <div className="menu-footer">
          <p className="footer-text">Fundación Estoy Contigo</p>
          <p className="footer-subtext">© 2025</p>
        </div>
      </motion.nav>
    </>
  );
};

export default SidebarMenu;
