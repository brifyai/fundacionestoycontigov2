# Backend - Fundación Estoy Contigo

API backend para el manejo de formularios de contacto y otras funcionalidades del sitio web.

## 🚀 Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express** - Framework web
- **Nodemailer** - Envío de emails
- **CORS** - Configuración de CORS
- **Helmet** - Seguridad HTTP
- **Express Rate Limit** - Rate limiting
- **Validator** - Validación de datos

## 📁 Estructura

```
backend/
├── api/
│   └── contacto.php          # Versión PHP (legacy)
├── server.js                 # Servidor Express principal
├── package.json              # Dependencias
├── .env.example              # Ejemplo de variables de entorno
└── README.md                 # Este archivo
```

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   cd backend
   npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Editar .env con tus configuraciones
   ```

3. **Iniciar el servidor:**
   ```bash
   # Modo desarrollo
   npm run dev
   
   # Modo producción
   npm start
   ```

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `PORT` | Puerto del servidor | 3001 |
| `FRONTEND_URL` | URL del frontend | http://localhost:5173 |
| `SMTP_HOST` | Servidor SMTP | smtp.gmail.com |
| `SMTP_PORT` | Puerto SMTP | 587 |
| `SMTP_USER` | Usuario SMTP | - |
| `SMTP_PASS` | Contraseña SMTP | - |
| `CONTACT_EMAIL` | Email de destino | contacto@estoycontigo.cl |

### Configuración de Gmail

Para usar Gmail como servidor SMTP:

1. Habilitar verificación en dos pasos en tu cuenta de Google
2. Generar una "App Password" en: Seguridad > Verificación en dos pasos > Contraseñas de aplicaciones
3. Usar esa contraseña en `SMTP_PASS`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Enviar Mensaje de Contacto
```
POST /api/contact
```

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "asunto": "Consulta General",
  "mensaje": "Hola, me gustaría saber más sobre..."
}
```

**Response Exitoso:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto."
}
```

**Response Error:**
```json
{
  "error": "Campos inválidos",
  "detalles": [
    "El nombre es requerido",
    "El email no es válido"
  ]
}
```

## 🔒 Seguridad

- **Helmet**: Protección contra vulnerabilidades HTTP comunes
- **Rate Limiting**: Máximo 10 requests por IP cada 15 minutos
- **CORS**: Configurado para aceptar solo el frontend autorizado
- **Validación**: Sanitización de todos los inputs
- **XSS Protection**: Escapado de caracteres especiales

## 🔄 Alternativas al Backend Propio

Si prefieres no mantener un backend propio, considera estas alternativas:

### Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="nombre" required>
  <input type="email" name="email" required>
  <textarea name="mensaje" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### Netlify Forms
```html
<form name="contacto" netlify>
  <input type="text" name="nombre" required>
  <input type="email" name="email" required>
  <textarea name="mensaje" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### EmailJS
```javascript
import emailjs from '@emailjs/browser';

emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form.current,
  'YOUR_PUBLIC_KEY'
);
```

## 📝 Notas

- El archivo `contacto.php` en `api/` es la versión legacy y se mantiene para compatibilidad
- Se recomienda usar el servidor Node.js para mejor seguridad y mantenibilidad
- El backend incluye validación de datos y protección contra spam

## 🐛 Debugging

Para ver logs detallados:
```bash
DEBUG=* npm run dev
```

Para probar el endpoint de contacto:
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test",
    "email": "test@ejemplo.com",
    "asunto": "Test",
    "mensaje": "Mensaje de prueba"
  }'