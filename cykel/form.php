<?php 

//One.com SETUP
ini_set("SMTP", "mailout.one.com");
ini_set("smtp_port","587");
ini_set("sendmail_from", "info@cykelatervinning.com");

$to = "info@cykelatervinning.com";
$subject = "Nytt meddelande";
$name = $_POST['namn'];
$mobilnummer = $_POST['mobilnummer'];
$mail = $_POST['mail'];
$adress = $_POST['adress'];
$arende = $_POST['arende'];
$meddelande = $_POST['meddelande'];
$message =  "<p>Namn: $name</p>\n <p>Mobilnummer: $mobilnummer</p>\n <p>Mail: $mail</p>\n <p>Adress:  $adress</p>\n <p>Ärende: $arende</p>\n <p>Meddelande: $meddelande</p>"; 

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "From: $name\r\nReply-To: $name\r\nReturn-Path: $name\r\n";

if (mail ($to, $subject, $message, $headers))
 
header('Location: tack-kontakt.html');

else
 echo "Error 404.";
 

?>