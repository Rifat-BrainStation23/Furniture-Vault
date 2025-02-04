<?php
session_start();
require_once '../models/common.php';
$objcommon = new common();
$errors = array();

try {
    $objcommon->Category_ID = $_POST['category_id'];
} catch (Exception $ex) {
    $errors['category_id'] = $ex->getMessage();
}
try {
    $objcommon->Subcategory_Name = $_POST['subcategory_name'];
} catch (Exception $ex) {
    $errors['subcategory_name'] = $ex->getMessage();
}

try {
    $objcommon->createsubcategory();
    $_SESSION['msg'] = "Record added successfully";
    header("location:../createcategory.php");
} catch (Exception $ex) {
    $_SESSION['errors'] = "Please Check the Errors";
    header("location:../createcategory.php");
}
?>
