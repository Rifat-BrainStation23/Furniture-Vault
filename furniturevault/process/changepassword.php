<?php
session_start();

require_once '../models/user.php';
$objuser= unserialize($_SESSION['objUser']);
$errors=array();
try{
    $objuser->password=$_POST['opassword'];
 } 
 catch (Exception $ex){
     $errors['opassword']=$ex->getMessage();
 }
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
    $msg="*Check Your Errors-All fields are Required";
    $_SESSION['msg']=$msg;
    $_SESSION['errors']=$errors;
    $_SESSION['objuser']=$objuser;
    echo 'test';
    header("location:../editprofile.php");
   
}
 else {
     
    if(isset($_SESSION['msg'])){
        unset($_SESSION['msg']);
    }
    if(isset($_SESSION['errors'])){
        unset($_SESSION['errors']);
    }
    try{
       
        $objuser->changepassword($_POST['password']);
         $_SESSION['msg']="Success Fully updated password";
         $objuser->signout();
    header("location:../login.php");
    } catch (Exception $ex)
    {
        
        $_SESSION['msg']=$ex->getMessage();
        header("location:../editprofile.php");
    }

 }
?>