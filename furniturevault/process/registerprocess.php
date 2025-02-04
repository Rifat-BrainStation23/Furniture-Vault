<?php
session_start();
require_once '../models/user.php';
$objuser=new user();
$errors=array();
try{
    $objuser->nickname=$_POST['nickname'];
}
 catch (Exception $ex){
     $errors['nickname']=$ex->getMessage();
 }
 
 try{
    $objuser->email=$_POST['email'];
 } 
 catch (Exception $ex){
     $errors['email']=$ex->getMessage();
 }
 try{
    $objuser->password=$_POST['password'];
 } 
 catch (Exception $ex){
     $errors['password']=$ex->getMessage();
 }
 try{
    $objuser->cpassword=$_POST['cpassword'];
 } 
 catch (Exception $ex){
     $errors['cpassword']=$ex->getMessage();
 }
 $objuser->usergroup_id='5';

if(count($errors))
{
    $msg="*Check Your Errors-All fields are Required";
    $_SESSION['msg']=$msg;
    $_SESSION['errors']=$errors;
    $_SESSION['objuser']=serialize($objuser);
    header("location:../register.php");
   
}
 else {
     
    if(isset($_SESSION['msg'])){
        unset($_SESSION['msg']);
    }
    if(isset($_SESSION['errors'])){
        unset($_SESSION['errors']);
    }
    if(isset($_SESSION['signup'])){
        unset($_SESSION['signup']);
    }
    if(isset($_SESSION['objuser'])){
        unset($_SESSION['objuser']);
    }
    try{
         $actcode= md5(sha1(rand()));
        $objuser->signup();
        
    header("location:../welcome.php");
    } catch (Exception $ex)
    {
        $_SESSION['msg']=$ex->getMessage();
        header("location:../register.php");
    }
   
}
?>