import React, { useState, useEffect } from 'react';
import SidebarMenu from './SidebarMenu.jsx';
import './Layout.css';

/**
 * Layout - Componente de layout compartido para todas las páginas
 * 
 * Proporciona:
 * - Sidebar integrado en el layout flex
 * - Área de contenido que se ajusta dinámicamente
 * - Responsive: sidebar es parte del layout en desktop, overlay en mobile
 */
const Layout = ({ children, isHome = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      // En tablet (768-1023px), iniciar colapsado
      if (width >= 768 && width < 1024) {
        setIsCollapsed(true);
      } else if (width >= 1024) {
        // En desktop, iniciar expandido
        setIsCollapsed(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`app-layout ${isCollapsed ? 'sidebar-collapsed' : ''} ${isMobile ? 'mobile' : ''} ${isHome ? 'home-layout' : ''}`}>
      <SidebarMenu 
        isInterior={!isHome}
        isHome={isHome}
        collapsed={isCollapsed}
        onCollapsedChange={setIsCollapsed}
      />
      <main id="main-content" className={isHome ? 'home-main' : 'interior-main'}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
