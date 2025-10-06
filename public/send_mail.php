<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // CORS pour accès depuis le front
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Gestion requête OPTIONS (prévol CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Récupération des données POST
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

// Vérification des champs
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'error' => 'Tous les champs sont obligatoires.']);
    exit;
}

$mail = new PHPMailer(true);
try {
    // Config SMTP (exemple Gmail)
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'houssamelbouamraoui@gmail.com'; // Ton email
    $mail->Password = 'sytv hvpo crjv puyq'; // Ton mot de passe d'application Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('houssamelbouamraoui@gmail.com', $name); // FROM = ton email
    $mail->addAddress('houssamelbouamraoui@gmail.com'); // Destinataire
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'Nouveau message depuis le portfolio';
    $mail->Body    = "<b>Nom :</b> $name<br><b>Email :</b> $email<br><b>Message :</b><br>" . nl2br($message);

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
