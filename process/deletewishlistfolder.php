<?php
session_start();
require_once '../cms/models/model.php';
$objmodel = new model();

$folder = $_REQUEST['folder'];
$objmodel->userid = $_SESSION['User_Info_ID'];


    $objmodel->deletemodelwishlistfolder($folder);
    header("Location: ../bookmarks.php")

?>
