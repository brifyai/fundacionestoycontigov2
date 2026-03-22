import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import validator from 'validator';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de seguridad
app.use(helmet());

// CORS configuración
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // límite de 10 requests por IP
  message: {
    error: 'Demasiadas solicitudes. Por favor, intenta más tarde.'
  }
});
app.use('/api/', limiter);

// Parse JSON y URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Ruta de health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Ruta de contacto
app.post('/api/contact', async (req, res) => {
  try {
    const { nombre, email, asunto, mensaje } = req.body;

    // Validar campos requeridos
    const errores = [];

    if (!nombre || validator.isEmpty(nombre.trim())) {
      errores.push('El nombre es requerido');
    }

    if (!email || validator.isEmpty(email.trim())) {
      errores.push('El email es requerido');
    } else if (!validator.isEmail(email)) {
      errores.push('El email no es válido');
    }

    if (!mensaje || validator.isEmpty(mensaje.trim())) {
      errores.push('El mensaje es requerido');
    }

    if (errores.length > 0) {
      return res.status(400).json({
        error: 'Campos inválidos',
        detalles: errores
      });
    }

    // Sanitizar datos
    const nombreSanitizado = validator.escape(nombre.trim());
    const emailSanitizado = validator.escape(email.trim());
    const asuntoSanitizado = validator.escape((asunto || 'Consulta General').trim());
    const mensajeSanitizado = validator.escape(mensaje.trim());

    // Configurar email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'contacto@estoycontigo.cl',
      replyTo: emailSanitizado,
      subject: `Nuevo mensaje de contacto - ${asuntoSanitizado} - Fundación Estoy Contigo`,
      text: `Nombre: ${nombreSanitizado}\nEmail: ${emailSanitizado}\nAsunto: ${asuntoSanitizado}\n\nMensaje:\n${mensajeSanitizado}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombreSanitizado}</p>
        <p><strong>Email:</strong> ${emailSanitizado}</p>
        <p><strong>Asunto:</strong> ${asuntoSanitizado}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${mensajeSanitizado}</p>
      `
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({
      error: 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
    });
  }
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores generales
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`);
  console.log(`📧 Email configurado para: ${process.env.CONTACT_EMAIL || 'contacto@estoycontigo.cl'}`);
});

export default app;