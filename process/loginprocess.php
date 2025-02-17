<?php
session_start();

require_once $_SERVER['DOCUMENT_ROOT'] . '/models/user.php';

$objuser=new user();
$errors=array();
try
{
    $objuser->nickname=$_POST['nickname'];
}
catch(Exception $ex){
    $errors['nickname']=$ex->getMessage();
}
try{
    $objuser->password=$_POST['password'];
}
catch(Exception $ex)
{
    $errors['password']=$ex->getMessage();
}

if(count($errors)){
    $msg="Check your errors"; 
    $_SESSION['msg']=$msg;
    $_SESSION['objuser']=$objuser;
    $_SESSION['errors']=$errors;
    header("location:../login.php"); 
}
else
{
    if(isset($_SESSION['msg']))
    {
        unset($_SESSION['msg']);
    }
    if(isset($_SESSION['errors']))
    {
        unset($_SESSION['errors']);
    }
    if(isset($_SESSION['errormsg']))
    {
        unset($_SESSION['errormsg']);
    }
    if(isset($_SESSION['msgemail']))
    {
        unset($_SESSION['msgemail']);
    }

    try {
        $remember = isset($_POST['remember']) ? TRUE : FALSE;
        $objuser->signin($remember);
        header("Location:../index.php");
    } catch (Exception $ex) {
        $_SESSION['errormsg'] = $ex->getMessage();
        header("Location:../login.php");
    }
   
}
?>