import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentView from './ContentView.jsx';
import './InteriorPage.css';

/**
 * InteriorPage - Página interior con contenido
 * 
 * El layout (sidebar + estructura) ahora está manejado por el componente Layout
 * Este componente solo se enfoca en el contenido específico de la página
 */
const InteriorPage = ({ section }) => {
  const navigate = useNavigate();

  return (
    <div className="interior-page">
      <ContentView section={section} onClose={() => navigate('/')} />
    </div>
  );
};

export default InteriorPage;
