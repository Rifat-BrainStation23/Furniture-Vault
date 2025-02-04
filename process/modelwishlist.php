<?php
session_start();
require_once '../cms/models/model.php';
$objmodel = new model();

$objmodel->id = $_REQUEST['id'];
$objmodel->userid = $_SESSION['User_Info_ID'];

//$objmodel->modelwishlist();
//print_r($_REQUEST['modelwishlistfolder_name']);
foreach ($_REQUEST['modelwishlistfolder_name'] as $value) {
    if($value!=''){
    $objmodel->modelwishlist($value);
    }
}
$url = $_SERVER['HTTP_REFERER'] ;
header("Location: $url")
?>
