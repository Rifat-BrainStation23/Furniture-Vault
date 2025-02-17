<?php

require("PHPMailerAutoload.php");

function phpmail($to,$subject,$msg,$semail=false){
$mail = new PHPMailer();
//$mail->SMTPDebug = 2;
// $mail->IsSMTP();
// $mail->Mailer = "smtp";
// $mail->Host = "server.web-hosting.com";
// $mail->Port = "587"; // 8025, 587 and 25 can also be used. Use Port 465 for SSL.
// $mail->SMTPAuth = true;
// $mail->SMTPSecure = 'tls';
// $mail->Username = "email@website.com";//webiste email username
// $mail->Password = "password";//website email password

// $mail->From = "test@freemiumworld.com";
// $mail->FromName = "FURNITURE VAULT";
// $mail->AddAddress("$to", "Member");
// if($semail){
// $mail->AddAddress("$semail", "Member");
// }
// $mail->AddReplyTo("noreply@mywebsite.com", "no-reply");
// $mail->IsHTML(TRUE);
// $mail->Subject = "$subject";
// $mail->Body = "$msg";
// $mail->WordWrap = 50; 

// $mail->IsSMTP();
// $mail->Mailer = "smtp";
// $mail->Host = "ritz.websitewelcome.com";
// $mail->Port = "465"; // 8025, 587 and 25 can also be used. Use Port 465 for SSL.
// $mail->SMTPAuth = true;
// $mail->SMTPSecure = 'tls';
// $mail->Username = "filemanager@latitude-23.com";//webiste email username
// $mail->Password = "Latitude@23@Dhaka";//website email password

// $mail->From = "admin@freemiumworld.com";
// $mail->FromName = "FURNITURE VAULT";
// $mail->AddAddress("$to", "Member");
// if($semail){
// $mail->AddAddress("$semail", "Member");
// }
// $mail->AddReplyTo("noreply@mywebsite.com", "no-reply");
// $mail->IsHTML(TRUE);
// $mail->Subject = "$subject";
// $mail->Body = "$msg";
// $mail->WordWrap = 50;


$mail->IsSMTP();
$mail->Mailer = "smtp";
$mail->Host = "mail.latitude-23.com";
$mail->Port = "25"; // 8025, 587 and 25 can also be used. Use Port 465 for SSL.
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = "filemanager@latitude-23.com";//webiste email username
$mail->Password = "Latitude@23@Dhaka";//website email password

$mail->From = "admin@freemiumworld.com";
$mail->FromName = "FURNITURE VAULT";
$mail->AddAddress("$to", "Member");
if($semail){
$mail->AddAddress("$semail", "Member");
}
$mail->AddReplyTo("noreply@freemiumworld.com", "no-reply");
$mail->IsHTML(TRUE);
$mail->Subject = "$subject";
$mail->Body = "$msg";
$mail->WordWrap = 50; 

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
); 

if(!$mail->Send()) {
    die;
return FALSE;
} else {
return TRUE;
}
}
?>