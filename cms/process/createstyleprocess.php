<?php
session_start();
require_once '../models/common.php';
$objcommon = new common();
$errors = array();

try {
    $objcommon->style_name = $_POST['style_name'];
} catch (Exception $ex) {
    $errors['style_name'] = $ex->getMessage();
}

try {
    $objcommon->createstyle();
    $_SESSION['msg'] = "Record added successfully";
    header("location:../createstyle.php");
} catch (Exception $ex) {
    $_SESSION['errors'] = "Please Check the Errors";
    header("location:../createstyle.php");
}
?>
