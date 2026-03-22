import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Configuración SEO por página
const seoConfig = {
  '/': {
    title: 'Fundación Estoy Contigo | Tecnología que une, futuro que incluye',
    description: 'Democratizamos el acceso a la Inteligencia Artificial en comunidades vulnerables de Chile. Protección, educación y progreso comunitario.',
    keywords: 'fundación estoy contigo, inteligencia artificial, comunidades vulnerables, Chile, educación digital, seguridad barrial, tecnología social',
    ogTitle: 'Fundación Estoy Contigo',
    ogDescription: 'Tecnología que une, futuro que incluye. Democratizando la IA en comunidades de Chile.',
    ogImage: '/images/Fundacion_estoy_contigov1.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonical: 'https://fundacionestoycontigo.cl',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Fundación Estoy Contigo',
      description: 'Democratizamos el acceso a la Inteligencia Artificial en comunidades vulnerables de Chile',
      url: 'https://fundacionestoycontigo.cl',
      logo: 'https://fundacionestoycontigo.cl/images/Fundacion_estoy_contigov1.png',
      sameAs: [
        'https://facebook.com/fundacionestoycontigo',
        'https://instagram.com/fundacionestoycontigo',
        'https://linkedin.com/company/fundacion-estoy-contigo'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Información General',
        email: 'contacto@fundacionestoycontigo.cl'
      }
    }
  },
  '/quienes-somos': {
    title: 'Quiénes Somos | Fundación Estoy Contigo',
    description: 'Conoce nuestra historia, misión, visión y equipo. Trabajamos para cerrar la brecha digital en Chile mediante la educación tecnológica.',
    keywords: 'quienes somos, fundación estoy contigo, misión, visión, equipo, brecha digital Chile',
    ogTitle: 'Quiénes Somos | Fundación Estoy Contigo',
    ogDescription: 'Conoce nuestra historia y el equipo que trabaja para cerrar la brecha digital en Chile.',
    ogImage: '/images/quienes_somos1.png',
    ogType: 'article',
    twitterCard: 'summary_large_image',
    canonical: 'https://fundacionestoycontigo.cl/quienes-somos',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Quiénes Somos - Fundación Estoy Contigo',
      description: 'Conoce nuestra historia, misión, visión y equipo',
      url: 'https://fundacionestoycontigo.cl/quienes-somos',
      mainEntity: {
        '@type': 'Organization',
        name: 'Fundación Estoy Contigo',
        description: 'Democratizamos el acceso a la Inteligencia Artificial en comunidades vulnerables de Chile'
      }
    }
  },
  '/nuestro-modelo': {
    title: 'Nuestro Modelo | Fundación Estoy Contigo',
    description: 'Descubre nuestro modelo operativo descentralizado y territorial. Sedes sociales transformadas en nodos digitales.',
    keywords: 'modelo operativo, nodo digital, sede vecinal, talleres tecnológicos, Chile',
    ogTitle: 'Nuestro Modelo | Fundación Estoy Contigo',
    ogDescription: 'Modelo descentralizado que lleva la tecnología directamente a las comunidades.',
    ogImage: '/images/nuestro_modelo1.png',
    ogType: 'article',
    twitterCard: 'summary_large_image',
    canonical: 'https://fundacionestoycontigo.cl/nuestro-modelo',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      name: 'Nuestro Modelo - Fundación Estoy Contigo',
      description: 'Modelo operativo descentralizado y territorial',
      url: 'https://fundacionestoycontigo.cl/nuestro-modelo'
    }
  },
  '/que-hacemos': {
    title: 'Qué Hacemos | Fundación Estoy Contigo',
    description: 'Conoce nuestros programas: alfabetización digital, seguridad online, emprendimiento digital y más. Transformando vidas con tecnología.',
    keywords: 'qué hacemos, programas, alfabetización digital, seguridad online, emprendimiento digital, talleres',
    ogTitle: 'Qué Hacemos | Fundación Estoy Contigo',
    ogDescription: 'Programas de alfabetización digital, seguridad online y emprendimiento para comunidades.',
    ogImage: '/images/que_hacemos1.png',
    ogType: 'article',
    twitterCard: 'summary_large_image',
    canonical: 'https://fundacionestoycontigo.cl/que-hacemos',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Programas Fundación Estoy Contigo',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Alfabetización Digital',
          description: 'Talleres para adultos mayores y personas con baja familiaridad tecnológica'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Seguridad Online',
          description: 'Protección contra estafas y fraudes digitales'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Emprendimiento Digital',
          description: 'Capacitación para dueñas de casa y emprendedores'
        }
      ]
    }
  },
  '/conocimiento': {
    title: 'Conocimiento | Fundación Estoy Contigo',
    description: 'Accede a nuestras guías, manuales, videos y recursos educativos gratuitos sobre tecnología y transformación digital comunitaria.',
    keywords: 'conocimiento, recursos educativos, guías, manuales, videos, alfabetización digital, descargas gratuitas',
    ogTitle: 'Conocimiento | Fundación Estoy Contigo',
    ogDescription: 'Recursos educativos gratuitos: guías, manuales y videos sobre tecnología para comunidades.',
    ogImage: '/images/conocimiento1.png',
    ogType: 'article',
    twitterCard: 'summary_large_image',
    canonical: 'https://fundacionestoycontigo.cl/conocimiento',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Centro de Conocimiento - Fundación Estoy Contigo',
      description: 'Recursos educativos gratuitos sobre tecnología y transformación digital',
      url: 'https://fundacionestoycontigo.cl/conocimiento',
      hasPart: [
        {
          '@type': 'DigitalDocument',
          name: 'Guía de Alfabetización Digital para Adultos Mayores',
          description: 'Manual práctico con ejercicios paso a paso'
        },
        {
          '@type': 'VideoObject',
          name: 'Cómo Identificar Estafas Online',
          description: 'Serie de videos educativos sobre seguridad digital'
        }
      ]
    }
  },
  '/noticias': {
    title: 'Noticias | Fundación Estoy Contigo',
    description: 'Entérate de nuestras últimas actividades, alianzas, reconocimientos y novedades sobre nuestro trabajo en terreno.',
    keywords: 'noticias, novedades, actividades, alianzas, reconocimientos, fundación estoy contigo',
    ogTitle: 'Noticias | Fundación Estoy Contigo',
    ogDescription: 'Últimas novedades, actividades y reconocimientos de nuestra fundación.',
    ogImage: '/images/noticias1.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonical: 'https://fundacionestoycontigo.cl/noticias',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Noticias Fundación Estoy Contigo',
      description: 'Últimas novedades y actividades',
      url: 'https://fundacionestoycontigo.cl/noticias'
    }
  },
  '/contacto': {
    title: 'Contacto | Fundación Estoy Contigo',
    description: '¿Quieres colaborar con nosotros? Contáctanos para alianzas, voluntariado, donaciones o llevar nuestros programas a tu comunidad.',
    keywords: 'contacto, voluntariado, donaciones, alianzas, colaborar, sede vecinal, Chile',
    ogTitle: 'Contacto | Fundación Estoy Contigo',
    ogDescription: 'Contáctanos para alianzas, voluntariado o llevar nuestros programas a tu comunidad.',
    ogImage: '/images/contacto1.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonical: 'https://fundacionestoycontigo.cl/contacto',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contacto - Fundación Estoy Contigo',
      description: 'Formulario de contacto y información',
      url: 'https://fundacionestoycontigo.cl/contacto',
      mainEntity: {
        '@type': 'Organization',
        name: 'Fundación Estoy Contigo',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Información General',
          email: 'contacto@fundacionestoycontigo.cl'
        }
      }
    }
  }
};

const SEO = ({ path }) => {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const config = seoConfig[currentPath] || seoConfig['/'];

  useEffect(() => {
    // Actualizar título
    document.title = config.title;

    // Meta tags helper
    const setMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Meta tags básicos
    setMetaTag('description', config.description);
    setMetaTag('keywords', config.keywords);
    setMetaTag('robots', config.robots);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);

    // Open Graph
    setMetaTag('og:title', config.ogTitle, true);
    setMetaTag('og:description', config.ogDescription, true);
    setMetaTag('og:image', config.ogImage, true);
    setMetaTag('og:type', config.ogType, true);
    setMetaTag('og:url', config.canonical, true);
    setMetaTag('og:locale', 'es_CL', true);
    setMetaTag('og:site_name', 'Fundación Estoy Contigo', true);

    // Twitter Card
    setMetaTag('twitter:card', config.twitterCard);
    setMetaTag('twitter:title', config.ogTitle);
    setMetaTag('twitter:description', config.ogDescription);
    setMetaTag('twitter:image', config.ogImage);

    // Schema.org JSON-LD
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(config.schema);

    // Viewport (si no existe)
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

    // Theme color
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#1a365d');

    // Apple mobile web app
    let appleMobile = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleMobile) {
      appleMobile = document.createElement('meta');
      appleMobile.setAttribute('name', 'apple-mobile-web-app-capable');
      appleMobile.setAttribute('content', 'yes');
      document.head.appendChild(appleMobile);
    }

    // Author
    setMetaTag('author', 'Fundación Estoy Contigo');

    // Language
    document.documentElement.lang = 'es';

    // Cleanup
    return () => {
      // No eliminamos los meta tags al desmontar para mantener consistencia
    };
  }, [config, currentPath]);

  return null;
};

export default SEO;
