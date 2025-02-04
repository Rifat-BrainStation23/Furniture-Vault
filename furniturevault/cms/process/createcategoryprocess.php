<?php
session_start();
require_once '../models/common.php';
$objcommon = new common();
$errors = array();

try {
    $objcommon->Category_Name = $_POST['category_name'];
} catch (Exception $ex) {
    $errors['category_name'] = $ex->getMessage();
}

try {
    $objcommon->createcategory();
    $_SESSION['msg'] = "Record added successfully";
    header("location:../createcategory.php");
} catch (Exception $ex) {
    $_SESSION['errors'] = "Please Check the Errors";
    header("location:../createcategory.php");
}
?>
