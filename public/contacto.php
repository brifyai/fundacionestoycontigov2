<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Obtener datos del formulario
$nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$asunto = isset($_POST['asunto']) ? trim($_POST['asunto']) : 'Consulta General';
$mensaje = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : '';

// Validar campos requeridos
$errores = [];

if (empty($nombre)) {
    $errores[] = 'El nombre es requerido';
}

if (empty($email)) {
    $errores[] = 'El email es requerido';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores[] = 'El email no es válido';
}

if (empty($mensaje)) {
    $errores[] = 'El mensaje es requerido';
}

if (!empty($errores)) {
    http_response_code(400);
    echo json_encode(['error' => 'Campos inválidos', 'detalles' => $errores]);
    exit;
}

// Sanitizar datos
$nombre = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$asunto = htmlspecialchars($asunto, ENT_QUOTES, 'UTF-8');
$mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');

// Configurar email
$to = 'contacto@estoycontigo.cl';
$subject = "Nuevo mensaje de contacto - $asunto - Fundación Estoy Contigo";

$body = "Nombre: $nombre\n";
$body .= "Email: $email\n";
$body .= "Asunto: $asunto\n\n";
$body .= "Mensaje:\n$mensaje\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar email
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el mensaje. Por favor, intenta nuevamente.']);
}
?>