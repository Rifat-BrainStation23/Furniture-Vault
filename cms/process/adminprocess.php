<?php
session_start();
require_once '../models/admin.php';
$objuser = new admin();
$errors = array();
try {
    $objuser->username = $_POST['username'];
} catch (Exception $ex) {
    $errors['username'] = $ex->getMessage();
}
try {
    $objuser->password = $_POST['password'];
} catch (Exception $ex) {
    $errors['password'] = $ex->getMessage();
}

if (count($errors)) {
    $msg = "Check your errors";
    $_SESSION['msg'] = $msg;
    $_SESSION['objuser'] = $objuser;
    print_r($_SESSION['errors'] = $errors);
    header("location:../index.php");
} else {
    echo "no error";
    if (isset($_SESSION['msg'])) {
        unset($_SESSION['msg']);
    }
    if (isset($_SESSION['errors'])) {
        unset($_SESSION['errors']);
    }

    try {     
        $objuser->signin();
        if($_SESSION['cms_model']==2){
            header("location:../models.php");
        } else {
            header("location:../dashboard.php");
        }        
    } catch (Exception $ex) {
        echo $_SESSION['errormsg'] = $ex->getMessage();
        header("location:../index.php");
    }
}
?>