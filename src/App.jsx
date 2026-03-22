import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ParallaxScene from './components/ParallaxScene.jsx'
import InteriorPage from './components/InteriorPage.jsx'
import Layout from './components/Layout.jsx'
import SEO from './components/SEO.jsx'

const AppContent = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  
  return (
    <>
      <SEO />
      <Layout isHome={isHome}>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<ParallaxScene />} />
          
          {/* Páginas interiores */}
          <Route path="/quienes-somos" element={<InteriorPage section="quienes-somos" />} />
          <Route path="/nuestro-modelo" element={<InteriorPage section="nuestro-modelo" />} />
          <Route path="/que-hacemos" element={<InteriorPage section="que-hacemos" />} />
          <Route path="/conocimiento" element={<InteriorPage section="conocimiento" />} />
          <Route path="/noticias" element={<InteriorPage section="noticias" />} />
          <Route path="/contacto" element={<InteriorPage section="contacto" />} />
          
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </>
  )
}

const App = () => {
  return <AppContent />
}

export default App
