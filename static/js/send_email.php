<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Adresse email de réception
    $email_to = "propentatech@gmail.com";
    $email_subject = "MESSAGE SUR LE SITE PROPENTA";
    
    $email_message = "Détails du message :\n\n";
    $email_message .= "OBJET: " . $subject . "\n";
    $email_message .= "Email: " . $email . "\n";
    $email_message .= "Message:\n" . $message . "\n";
    
    // Envoi de l'email
    mail($email_to, $email_subject, $email_message);
    echo "Email envoyé avec succès !";
} else {
    echo "Une erreur s'est produite lors de l'envoi de l'email. Veuillez réessayer.";
}
?>
