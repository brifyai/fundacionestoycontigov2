import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentView from './ContentView.jsx';
import SidebarMenu from './SidebarMenu.jsx';

const InteriorPage = ({ section }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <SidebarMenu isInterior={true} />
      <main id="main-content">
        <ContentView section={section} onClose={() => navigate('/')} />
      </main>
    </>
  );
};

export default InteriorPage;
