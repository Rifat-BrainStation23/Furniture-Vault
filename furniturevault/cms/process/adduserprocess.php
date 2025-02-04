<?php
session_start();
require_once '../../models/user.php';
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
 try{
    $objuser->usergroup_id=$_POST['usergroup_id'];
 } 
 catch (Exception $ex){
     $errors['usergroup_id']=$ex->getMessage();
 }


if(count($errors))
{
    
    $_SESSION['errors']=$errors;
    $_SESSION['objuser']=serialize($objuser);
    header("location:../adduser.php");
   
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
         $_SESSION['msg'] = "Record added successfully";
    header("location:../adduser.php");
    } catch (Exception $ex)
    {
        $_SESSION['objuser']=serialize($objuser);
         $_SESSION['errors'] =$ex->getMessage();
       
        header("location:../adduser.php");
    }
   
}
?>