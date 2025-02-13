<?php 
if (isset($_POST['submit'])) {
    // Récupération des données et nettoyage
    $to = "bastien.lang11@gmail.com"; // Adresse email du destinataire
    $from = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL); // Email de l'expéditeur
    $first_name = htmlspecialchars(trim($_POST['firstName'])); // Prénom
    $last_name = htmlspecialchars(trim($_POST['lastName'])); // Nom
    $subject = "Formulaire de contact";
    $subject2 = "Contact Bastien Lang";
    $message = $first_name . " " . $last_name . " a écrit :" . "\n\n" . htmlspecialchars(trim($_POST['message'])); // Message principal
    $message2 = "Merci " . $first_name . ". Je vous recontacterai rapidement." . "\n\n";

    // En-têtes pour l'envoi de l'email
    $headers = "From: " . $from;
    $headers2 = "From: " . $to;

    // Envoi de l'email au destinataire
    if (mail($to, $subject, $message, $headers)) {
        // Envoi d'une copie à l'expéditeur
        mail($from, $subject2, $message2, $headers2);
        echo "Mail envoyé";
    } else {
        echo "Erreur lors de l'envoi du mail.";
    }
} else {
    echo "Le formulaire n'a pas été envoyé.";
}

// Redirection vers la page d'accueil
header("Location: /index.php");
exit();
?>
