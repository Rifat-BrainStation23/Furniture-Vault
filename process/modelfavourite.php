<?php
session_start();
require_once '../cms/models/model.php';
$objmodel = new model();

$objmodel->id = $_REQUEST['id'];
$objmodel->userid = $_SESSION['User_Info_ID'];

$objmodel->modelfavourite();

?>