<?php
session_start();
require_once '../models/user.php';

$objuser= unserialize($_SESSION['objUser']);
$errors=array();
try{
    $objuser->fname=$_POST['fname'];
}
 catch (Exception $ex){
     $errors['fname']=$ex->getMessage();
 }
 
 try{
    $objuser->location=$_POST['location'];
 } 
 catch (Exception $ex){
     $errors['location']=$ex->getMessage();
 }
 try{
    $objuser->email=$_POST['email'];
 } 
 catch (Exception $ex){
     $errors['email']=$ex->getMessage();
 }
 try{
    $objuser->specialization=$_POST['specialization'];
 } 
 catch (Exception $ex){
     $errors['specialization']=$ex->getMessage();
 }
 try{
    $objuser->site=$_POST['site'];
 } 
 catch (Exception $ex){
     $errors['site']=$ex->getMessage();
 }

 try {
    $objuser->birthday=$_POST['birthday'];
} catch (Exception $ex) {
     $errors['birthday']=$ex->getMessage();
}
 try {
    $objuser->signature=$_POST['signature'];
} catch (Exception $ex) {
     $errors['signature']=$ex->getMessage();
}
 try {
    $objuser->gender=$_POST['gender'];
} catch (Exception $ex) {
     $errors['gender']=$ex->getMessage();
}

if(count($errors))
{
    $msg="*Check Your Errors-All fields are Required";
    $_SESSION['msg']=$msg;
    $_SESSION['errors']=$errors;
    $_SESSION['objuser']=$objuser;
    echo 'test';
    header("location:../profile.php");
   
}
 else {
     
    if(isset($_SESSION['msg'])){
        unset($_SESSION['msg']);
    }
    if(isset($_SESSION['errors'])){
        unset($_SESSION['errors']);
    }
    try{
        $objuser->updateprofile();
        
         $_SESSION['msg']="Successfully updated";
    header("location:../profile.php");
    } catch (Exception $ex)
    {
        
        $_SESSION['msg']=$ex->getMessage();
        header("location:../profile.php");
    }

 }

?>