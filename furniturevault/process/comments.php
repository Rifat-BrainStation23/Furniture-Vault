<?php
session_start();
require_once '../cms/models/model.php';
$objmodel = new model();
$errors = array();

try {
   $comment = $_POST['comment'];
    $modelid = $_POST['modelid'];
} catch (Exception $ex) {
    $errors['comment'] = $ex->getMessage();
}

$objmodel->savecomment($comment,$modelid);
header("location:../detail.php?m=".$modelid);