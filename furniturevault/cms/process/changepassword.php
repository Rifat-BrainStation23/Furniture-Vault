<?php
session_start();
require_once '../models/admin.php';
$objadmin = unserialize($_SESSION['objadmin']);
$errors = array();
//print_r($_POST);
//die;
try {
    $objadmin->password = $_POST['opassword'];
} catch (Exception $ex) {
    $errors['opassword'] = $ex->getMessage();
}
try {
    admin::checkpassword($_POST['password']);
} catch (Exception $ex) {
    $errors['password'] = $ex->getMessage();
}
try {
    admin::comparepassword($_POST['password'], $_POST['cpassword']);
} catch (Exception $ex) {
    $errors['cpassword'] = $ex->getMessage();
}

if (count($errors)) {
    $msg = "*Check Your Errors-All fields are Required";
    $_SESSION['msg'] = $msg;
    $_SESSION['errors'] = $errors;
    header("location:../adminprofile.php");
} else {

    if (isset($_SESSION['msg'])) {
        unset($_SESSION['msg']);
    }
    if (isset($_SESSION['errors'])) {
        unset($_SESSION['errors']);
    }
    try {

        $objadmin->changepassword($_POST['password']);
        $_SESSION['msg'] = "Success Fully updated password";
        $objadmin->logout();
        header("location:../index.php");
    } catch (Exception $ex) {
        $_SESSION['msg'] = $ex->getMessage();
        header("location:../adminprofile.php");
    }
}
?>