<?php
session_start();
require_once '../models/model.php';
$objmodel = new model();
$errors = array();
// ini_set('memory_limit','16M');


try {
    $objmodel->title = $_POST['title'];
} catch (Exception $ex) {
    $errors['title'] = $ex->getMessage();
}
try {
    $objmodel->categoryid = $_POST['category'];
} catch (Exception $ex) {
    $errors['category'] = $ex->getMessage();
}
try {
    $objmodel->subcategoryid = $_POST['subcategory'];
} catch (Exception $ex) {
    $errors['subcategory'] = $ex->getMessage();
}
try {
    $objmodel->tags = $_POST['tags'];
} catch (Exception $ex) {
    $errors['tags'] = $ex->getMessage();
}
try {
    $objmodel->styleid = $_POST['style'];
} catch (Exception $ex) {
    $errors['style'] = $ex->getMessage();
}
try {
    $text= trim($_POST['description']);
    $url_regex = '~(http|ftp)s?://[a-z0-9.-]+\.[a-z]{2,3}(/\S*)?~i';
    $output = preg_replace($url_regex, '<a href="$0">$0</a>', $text);
    $objmodel->description = $output;
    
} catch (Exception $ex) {
    $errors['description'] = $ex->getMessage();
}
try {
    $objmodel->manufacturerid = trim($_POST['manufacturer']);
} catch (Exception $ex) {
    $errors['manufacturer'] = $ex->getMessage();
}


if (isset($_REQUEST['usermodel'])){
try {
    $objmodel->usermodelupload();
    if(isset($_SESSION['objmodel'])){
        unset($_SESSION['objmodel']);
    }
    $_SESSION['msg'] = "Model Uploaded successfully";
    header("location:../../uploadmodel.php");
} catch (Exception $ex) {
    $_SESSION['objmodel']= serialize($objmodel);
    $_SESSION['errors'] = $ex->getMessage();
    header("location:../../uploadmodel.php");
}    
}else{
try {
    $response = $objmodel->btchmodelupload();
    if(isset($_SESSION['objmodel'])){
        unset($_SESSION['objmodel']);
    }
    $_SESSION['msg'] = "Record added successfully";
    echo 'success';
    //header("location:../approvemodels.php");
} catch (Exception $ex) {
    $_SESSION['objmodel']= serialize($objmodel);
    $_SESSION['errors'] = $ex->getMessage();
    echo 'failed';
    //header("location:../addmodels.php");
}
}
 
?>
