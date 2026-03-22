import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './ParallaxScene.css';

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
  const [isMobile, setIsMobile] = useState(false);

  // Valores de movimiento del ratón/acelerómetro
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Suavizado del movimiento usando físicas de resorte (Spring)
  const springConfig = { damping: 50, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  // Función que captura el movimiento del ratón
  const handleMouseMove = (e) => {
    if (isMobile) return; // No usar mouse en móvil
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculamos la posición del ratón respecto al centro (-0.5 a 0.5)
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Efecto para manejar el acelerómetro en dispositivos móviles
  useEffect(() => {
    if (!isMobile) return;

    // Solicitar permiso para iOS 13+ (requiere interacción del usuario)
    const requestPermission = async () => {
      if (typeof DeviceOrientationEvent !== 'undefined' && 
          typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        } catch (error) {
          console.log('Permiso de acelerómetro denegado:', error);
        }
      } else {
        // Android y otros dispositivos no requieren permiso explícito
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    // Handler para el evento de orientación del dispositivo
    const handleDeviceOrientation = (event) => {
      // gamma: inclinación izquierda/derecha (-90 a 90)
      // beta: inclinación adelante/atrás (-180 a 180)
      const { gamma, beta } = event;
      
      if (gamma !== null && beta !== null) {
        // Normalizar valores a rango -0.5 a 0.5
        // gamma: -45 a 45 grados (rango práctico para uso)
        // beta: -45 a 45 grados (rango práctico para uso)
        const x = Math.max(-0.5, Math.min(0.5, gamma / 90));
        const y = Math.max(-0.5, Math.min(0.5, beta / 90));
        
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    // Intentar solicitar permiso inmediatamente (puede fallar sin interacción)
    requestPermission();

    // También agregar listener para el primer toque (para iOS)
    const handleFirstTouch = () => {
      requestPermission();
      document.removeEventListener('touchstart', handleFirstTouch);
    };
    document.addEventListener('touchstart', handleFirstTouch, { once: true });

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      document.removeEventListener('touchstart', handleFirstTouch);
    };
  }, [isMobile, mouseX, mouseY]);

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
    <motion.div 
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
    </motion.div>
  );
};

export default ParallaxScene;
