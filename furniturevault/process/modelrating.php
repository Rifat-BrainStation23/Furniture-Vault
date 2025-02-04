<?php
session_start();
if(isset($_SESSION['User_Info_ID'])){
require_once '../cms/models/model.php';
$objmodel = new model();

$objmodel->id = $_REQUEST['id'];
$objmodel->userid = $_SESSION['User_Info_ID'];
$objmodel->modelrating_stars = $_REQUEST['rating'];

$objmodel->modelrating();

$average_rating = $objmodel->getmodelrating($objmodel->id);

echo $average_rating;
} else {
    echo 'failed';    
}
?>