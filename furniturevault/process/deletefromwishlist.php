<?php
session_start();
require_once '../cms/models/model.php';
$objmodel = new model();

$objmodel->id = $_REQUEST['id'];
$folder = $_REQUEST['folder'];
$objmodel->userid = $_SESSION['User_Info_ID'];


    $objmodel->deletemodelwishlist($folder);

?>
