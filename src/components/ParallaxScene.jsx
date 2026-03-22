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
  const [accelStatus, setAccelStatus] = useState('pending'); // 'pending' | 'active' | 'denied' | 'unsupported'
  const [showStatus, setShowStatus] = useState(true);

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

  // Ocultar indicadores después de 3 segundos
  useEffect(() => {
    if (accelStatus === 'active' || accelStatus === 'denied' || accelStatus === 'unsupported') {
      const timer = setTimeout(() => {
        setShowStatus(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [accelStatus]);

  // Función que captura el movimiento del ratón
  const handleMouseMove = (e) => {
    if (isMobile) return; // No usar mouse en móvil
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculamos la posición del ratón respecto al centro (-1 a 1)
    // Multiplicamos por 2 para coincidir con el rango del acelerómetro
    const x = ((clientX / innerWidth) - 0.5) * 2;
    const y = ((clientY / innerHeight) - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Efecto para manejar el acelerómetro en dispositivos móviles
  useEffect(() => {
    if (!isMobile) return;

    let isActive = true;

    // Handler para el evento de orientación del dispositivo - DEFINIR PRIMERO
    const handleDeviceOrientation = (event) => {
      // gamma: inclinación izquierda/derecha (-90 a 90)
      // beta: inclinación adelante/atrás (-180 a 180)
      const { gamma, beta } = event;
      
      if (gamma !== null && beta !== null && isActive) {
        // AUMENTAR SENSIBILIDAD: Usar rango más amplio para mejor efecto
        // gamma: -45 a 45 grados → mapear a -1 a 1
        // beta: -45 a 45 grados → mapear a -1 a 1
        const x = Math.max(-1, Math.min(1, gamma / 45));
        const y = Math.max(-1, Math.min(1, beta / 45));
        
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    // Solicitar permiso para iOS 13+ (requiere interacción del usuario)
    const requestPermission = async () => {
      if (typeof DeviceOrientationEvent === 'undefined') {
        setAccelStatus('unsupported');
        console.log('❌ DeviceOrientationEvent no soportado');
        return;
      }
      
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
            setAccelStatus('active');
            console.log('✅ Acelerómetro activado en iOS');
          } else {
            setAccelStatus('denied');
            console.log('❌ Permiso de acelerómetro denegado');
          }
        } catch (error) {
          setAccelStatus('denied');
          console.log('❌ Error al solicitar permiso:', error);
        }
      } else {
        // Android y otros dispositivos no requieren permiso explícito
        window.addEventListener('deviceorientation', handleDeviceOrientation);
        setAccelStatus('active');
        console.log('✅ Acelerómetro activado (Android/otros)');
      }
    };

    // Intentar solicitar permiso inmediatamente
    requestPermission();

    // También agregar listener para el primer toque (para iOS)
    const handleFirstTouch = () => {
      requestPermission();
    };
    document.addEventListener('touchstart', handleFirstTouch, { once: true });

    return () => {
      isActive = false;
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
      {/* Indicador de estado del acelerómetro (solo en móvil) */}
      {isMobile && accelStatus === 'pending' && (
        <div className="accel-indicator accel-pending">
          📱 Toca para activar el efecto parallax
        </div>
      )}
      {isMobile && accelStatus === 'active' && showStatus && (
        <div className="accel-indicator accel-active">
          ✅ Inclina tu dispositivo para mover las capas
        </div>
      )}
      {isMobile && accelStatus === 'denied' && showStatus && (
        <div className="accel-indicator accel-denied">
          📱 Efecto parallax no disponible en este dispositivo
        </div>
      )}
      
      {layers.map((layer, index) => {
        // Transformamos el valor de 0 a un valor en píxeles basado en el factor
        // Ahora usamos rango -1 a 1 para acelerómetro (más sensible)
        // y -0.5 a 0.5 para mouse
        const xOffset = useTransform(smoothX, [ -1, 1 ], [ -(layer.factor * 200), (layer.factor * 200) ]);
        const yOffset = useTransform(smoothY, [ -1, 1 ], [ -(layer.factor * 100), (layer.factor * 100) ]);

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
