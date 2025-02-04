<?php
session_start();
require_once '../cms/models/model.php';
$objmodel = new model();

if(isset($_SESSION['User_Info_ID'])){
    $objmodel->modeldonwloadincrement($_REQUEST['id']);
}      

?>