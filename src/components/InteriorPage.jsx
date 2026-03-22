import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentView from './ContentView.jsx';
import SidebarMenu from './SidebarMenu.jsx';

const InteriorPage = ({ section }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <SidebarMenu isInterior={true} />
      <ContentView section={section} onClose={() => navigate('/')} />
    </>
  );
};

export default InteriorPage;
