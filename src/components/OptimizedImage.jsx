import { useState, useEffect, useRef } from 'react'
import './OptimizedImage.css'

/**
 * Componente de imagen optimizada con lazy loading
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo
 * @param {string} className - Clases CSS adicionales
 * @param {string} loading - 'lazy' | 'eager'
 * @param {object} style - Estilos inline
 * @param {function} onLoad - Callback cuando la imagen carga
 * @param {function} onError - Callback cuando hay error
 */
const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  style = {},
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(loading === 'eager')
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true)
      return
    }

    // Configurar Intersection Observer para lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observerRef.current?.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Cargar imagen 50px antes de entrar en viewport
        threshold: 0.01,
      }
    )

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [loading])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Generar srcset para diferentes tamaños si es una imagen local
  const generateSrcSet = () => {
    if (!src || src.startsWith('http')) return undefined
    
    // Para imágenes locales, asumimos que Vite generará versiones optimizadas
    // En producción, esto se manejará automáticamente
    return undefined
  }

  return (
    <div
      ref={imgRef}
      className={`optimized-image-container ${className} ${isLoaded ? 'loaded' : ''} ${hasError ? 'error' : ''}`}
      style={style}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className="optimized-image"
          onLoad={handleLoad}
          onError={handleError}
          srcSet={generateSrcSet()}
          {...props}
        />
      )}
      
      {/* Placeholder mientras carga */}
      {!isLoaded && !hasError && (
        <div className="optimized-image-placeholder" />
      )}
      
      {/* Estado de error */}
      {hasError && (
        <div className="optimized-image-error">
          <span>⚠️</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage
