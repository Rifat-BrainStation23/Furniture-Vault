<?php
require_once '../phpmailer/phpmailer.php';
require_once '../cms/models/admin.php';
$objadmin=new admin();
$objadmin->getsettings();

 $name=$_REQUEST['name'];
 $from=$_REQUEST['email'];
 $subject=$_REQUEST['subject'];
 $subject."Contact form Subject-".$subject;
 $message=$_REQUEST['message'];
$to=$objadmin->email;
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= 'From: ' . $from . "\r\n";
$headers .= 'Reply-To: ' .$from . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$fullmessage="You just receive a contact form from your site below are the details \n";
$fullmessage.="name=$name \n";
$fullmessage.="email=$from \n";
$fullmessage.="subject=$subject \n";
$fullmessage.="message=$message \n";
if(phpmail($to, $subject, $fullmessage))
{
     echo "true";
 }else{
     echo "false";
 }
 return;