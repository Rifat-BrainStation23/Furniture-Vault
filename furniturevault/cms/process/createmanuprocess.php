<?php
session_start();
require_once '../models/common.php';
$objcommon = new common();
$errors = array();

try {
    $objcommon->manufacturer_name = $_POST['manufacturer_name'];
} catch (Exception $ex) {
    $errors['manufacturer_name'] = $ex->getMessage();
}

try {
    $objcommon->createmanufacturer();
    $_SESSION['msg'] = "Record added successfully";
    header("location:../createmanu.php");
} catch (Exception $ex) {
    $_SESSION['errors'] = "Please Check the Errors";
    header("location:../createmanu.php");
}
?>
