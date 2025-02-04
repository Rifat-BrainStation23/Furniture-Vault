<?php

session_start();
require_once '../models/user.php';
require_once '../phpmailer/phpmailer.php';
$objuser=new user;
$errors = array();
$company = "FURNITURE VAULT";
if (isset($_POST['forgotpassword'])) {
    try {
        $objuser->email = $_POST['email'];
    } catch (Exception $ex) {
        $errors['email'] = $ex->getMessage();
    }
    if (count($errors)) {
        $_SESSION['errors'] = $errors;
        header("location:../forgotpassword.php");
    } else {

        if (isset($_SESSION['msg'])) {
            unset($_SESSION['msg']);
        }

        try {
            $resetcode = md5(sha1(rand()));
            $userInfo = $objuser->forgot($resetcode);

            // print_r($userInfo);

            $_SESSION['msg'] = $emailText = "Hi <b>" . (empty($userInfo['fname']) ? $userInfo['nickname'] : $userInfo['fname']) . "</b>," . 
            "<br /><br />Your " . (empty($userInfo['fname']) ? "email address is " . $userInfo['email'] : "username is " . $userInfo['nickname']) . 
            "<br /><br />Forgot your password? It's okay -- we haven't forgotten you! Click on the following link to reset your password." .
            "<br /><br /><a href='http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]?resetcode=$resetcode&email=$objuser->email'>Reset Password Lnk</a>" . 
            "<br /><br />If clicking doesn't seem to work, you can copy and paste the link into your browser's address bar." .
            "<br /><br />If you didn not ask to reset your password, you can just ignore this email." .
            "<br /><br />Cheers," .
            "<br /><b>$company</b> Team";


            // print_r($emailText);
            // exit();

            // $_SESSION['msg']=$reselink = "clcik to <a href='http://debugger.ga/3dsky/process/forgotpasswordprocess.php?resetcode=$resetcode&email=$objuser->email'>link</a>Reset password";
           
            if(phpmail($objuser->email, "$company - Forgot password request", $emailText))
             {
                 $_SESSION['msg'] ='Please check your email for instructions';
             }
            header("location:../forgotpassword.php");
        } catch (Exception $ex) {
            echo $_SESSION['msg'] = $ex->getMessage();
            header("location:../forgotpassword.php");
        }
    }
}
if (isset($_GET['resetcode'])) {
    try {
        $objuser->email=$_GET['email'];
        $resetcode=$_GET['resetcode'];
        $objuser->resetpassword($resetcode);
        $_SESSION['objuser']=$objuser;
        $_SESSION['userid']=$objuser->userid;
        
        header("Location:../resetpassword.php");
    } catch (Exception $ex) {
         echo  $ex->getMessage();
    }
}
if(isset($_POST['resetpassword'])){
  
    $errors=array();
   
try{
    user::checkpassword($_POST['password']);
}
catch (Exception $ex){
    $errors['password']=$ex->getMessage();
} 
try{
    user::comparepassword($_POST['password'],$_POST['cpassword']);
}
catch (Exception $ex){
    $errors['cpassword']=$ex->getMessage();
} 
if(count($errors))
{
    $msg="";
    $_SESSION['msg']=$errors['password'];
    $_SESSION['errors']=$errors['cpassword'];
    $_SESSION['objuser']=$objuser;
    header("location:../resetpassword.php");
   
}
 else {
     
    if(isset($_SESSION['msg'])){
        unset($_SESSION['msg']);
    }
    if(isset($_SESSION['errors'])){
        unset($_SESSION['errors']);
    }
    try{
        $objuser->userid=$_SESSION['userid'];
        $objuser->newpassword($_POST['password']);
        unset($_SESSION['userid']);
        $_SESSION['msg']="Successfully reset password";
        header("location:../login.php");
    } catch (Exception $ex)
    {
        
        $_SESSION['msg']=$ex->getMessage();
        header("location:../resetpassword.php");
    }

 }
}
?>