import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentView from './ContentView.jsx';
import SidebarMenu from './SidebarMenu.jsx';
import './InteriorPage.css';

const InteriorPage = ({ section }) => {
  const navigate = useNavigate();
  
  return (
    <div className="interior-page">
      <SidebarMenu isInterior={true} />
      <main id="main-content">
        <ContentView section={section} onClose={() => navigate('/')} />
      </main>
    </div>
  );
};

export default InteriorPage;
