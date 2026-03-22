/**
 * Servicio para manejar el envío de formularios de contacto
 * Soporta múltiples backends: Node.js/Express, PHP, o servicios de terceros
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const USE_PHP_BACKEND = import.meta.env.VITE_USE_PHP_BACKEND === 'true';

/**
 * Envía un mensaje de contacto al backend
 * @param {Object} formData - Datos del formulario
 * @param {string} formData.nombre - Nombre del remitente
 * @param {string} formData.email - Email del remitente
 * @param {string} formData.asunto - Asunto del mensaje
 * @param {string} formData.mensaje - Contenido del mensaje
 * @returns {Promise<Object>} - Respuesta del servidor
 */
export const sendContactMessage = async (formData) => {
  try {
    // Validar datos antes de enviar
    const validation = validateContactData(formData);
    if (!validation.isValid) {
      return {
        success: false,
        error: 'Campos inválidos',
        detalles: validation.errors
      };
    }

    // Determinar qué backend usar
    if (USE_PHP_BACKEND) {
      return await sendToPHPBackend(formData);
    } else {
      return await sendToNodeBackend(formData);
    }
  } catch (error) {
    console.error('Error en contactService:', error);
    return {
      success: false,
      error: 'Error de conexión. Por favor, intenta nuevamente.'
    };
  }
};

/**
 * Envía datos al backend Node.js/Express
 */
const sendToNodeBackend = async (formData) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Error al enviar el mensaje');
  }

  return data;
};

/**
 * Envía datos al backend PHP (legacy)
 */
const sendToPHPBackend = async (formData) => {
  const formDataEncoded = new URLSearchParams();
  Object.keys(formData).forEach(key => {
    formDataEncoded.append(key, formData[key]);
  });

  const response = await fetch('/contacto.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formDataEncoded,
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Error al enviar el mensaje');
  }

  return data;
};

/**
 * Valida los datos del formulario de contacto
 */
const validateContactData = (formData) => {
  const errors = [];

  if (!formData.nombre || formData.nombre.trim() === '') {
    errors.push('El nombre es requerido');
  }

  if (!formData.email || formData.email.trim() === '') {
    errors.push('El email es requerido');
  } else if (!isValidEmail(formData.email)) {
    errors.push('El email no es válido');
  }

  if (!formData.mensaje || formData.mensaje.trim() === '') {
    errors.push('El mensaje es requerido');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Valida formato de email
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Verifica la salud del backend
 * @returns {Promise<Object>} - Estado del backend
 */
export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/api/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return { status: 'ERROR', message: 'Backend no responde' };
    }

    return await response.json();
  } catch (error) {
    return { status: 'ERROR', message: 'No se puede conectar al backend' };
  }
};

export default {
  sendContactMessage,
  checkBackendHealth
};