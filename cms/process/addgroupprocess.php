<?php
session_start();
require_once '../models/common.php';
$objcommon = new common();
$errors = array();

try {
    $objcommon->usergroup_name = $_POST['group_name'];
} catch (Exception $ex) {
    $errors['group_name'] = $ex->getMessage();
}
try {
    $objcommon->view_model = $_POST['view_model'];
} catch (Exception $ex) {
    $errors['view_model'] = $ex->getMessage();
}
try {
    $objcommon->download_model = $_POST['download_model'];
} catch (Exception $ex) {
    $errors['download_model'] = $ex->getMessage();
}
try {
    $objcommon->upload_model = $_POST['upload_model'];
} catch (Exception $ex) {
    $errors['upload_model'] = $ex->getMessage();
}
try {
    $objcommon->delete_model = $_POST['delete_model'];
} catch (Exception $ex) {
    $errors['delete_model'] = $ex->getMessage();
}

if ($errors) {
    $_SESSION['msg'] = "Please Check the Errors";
    $_SESSION['objcommon'] = serialize($objcommon);
    $_SESSION['errors'] = "Please Check the Errors";
    header("location:../addcommon.php");
} else {
    try {
        $objcommon->addusergroup();
        try {
            $objcommon->addgrouppolicy();
        } catch (Exception $ex) {
            $_SESSION['errors'] = "Please Check the Errors";
            header("location:../addgroup.php");
        }
        $_SESSION['msg'] = "Record added successfully";
        header("location:../addgroup.php");
    } catch (Exception $ex) {
        $_SESSION['errors'] = "Please Check the Errors";
        header("location:../addgroup.php");
    }
}
?>