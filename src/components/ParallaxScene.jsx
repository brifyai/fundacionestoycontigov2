import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './ParallaxScene.css';
import SidebarMenu from './SidebarMenu.jsx';

// Las imágenes están en la carpeta public/images
// Usamos rutas absolutas desde la raíz para acceder a ellas
// Nombres de archivo simplificados sin espacios ni caracteres especiales
const imgCielo = '/images/capa-cielo.png';
const imgCordillera = '/images/capa-cordillera.png';
const imgNeblina = '/images/capa-neblina.png';
const imgCiudadLejana = '/images/capa-ciudad.png';
const imgEdificios = '/images/capa-edificios.png';
const imgVegetacion = '/images/capa-vegetacion.png';

const ParallaxScene = () => {
  const containerRef = useRef(null);

  // Valores de movimiento del ratón
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Suavizado del movimiento usando físicas de resorte (Spring)
  const springConfig = { damping: 50, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Función que captura el movimiento del ratón
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculamos la posición del ratón respecto al centro (-0.5 a 0.5)
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Configuración de las capas y su velocidad de movimiento (factor)
  // Valores más altos = mayor movimiento (primer plano)
  const layers = [
    { src: imgCielo, factor: 0.02, zIndex: 1, name: 'Cielo' },
    { src: imgCordillera, factor: 0.05, zIndex: 2, name: 'Cordillera' },
    { src: imgNeblina, factor: 0.08, zIndex: 3, name: 'Neblina' },
    { src: imgCiudadLejana, factor: 0.12, zIndex: 4, name: 'Ciudad Lejana' },
    { src: imgEdificios, factor: 0.2, zIndex: 5, name: 'Edificios' },
    { src: imgVegetacion, factor: 0.35, zIndex: 6, name: 'Vegetación' },
  ];

  return (
    <>
      <SidebarMenu isInterior={false} />
      
      {/* Escena Parallax - Contenido principal */}
      <motion.main 
        id="main-content"
        ref={containerRef} 
        className="parallax-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          // Vuelve al centro al sacar el ratón
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        {layers.map((layer, index) => {
          // Transformamos el valor de 0 a un valor en píxeles basado en el factor
          const xOffset = useTransform(smoothX, [ -0.5, 0.5 ], [ -(layer.factor * 100), (layer.factor * 100) ]);
          const yOffset = useTransform(smoothY, [ -0.5, 0.5 ], [ -(layer.factor * 50), (layer.factor * 50) ]);

          return (
            <motion.img
              key={index}
              src={layer.src}
              className="parallax-layer"
              style={{
                x: xOffset,
                y: yOffset,
                zIndex: layer.zIndex,
              }}
              alt={`Capa ${layer.name}`}
            />
          );
        })}
      </motion.main>
    </>
  );
};

export default ParallaxScene;
