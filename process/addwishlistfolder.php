<?php
session_start();
require_once '../cms/models/model.php';
$objmodel = new model();

$objmodel->userid = $_SESSION['User_Info_ID'];

$objmodel->modelwishlistfolder_name = $_REQUEST['modelwishlistfolder_name'];

if(isset($_REQUEST['modelwishlistfolder_id'])){
    $objmodel->modelwishlistfolder_id = $_REQUEST['modelwishlistfolder_id'];
    $objmodel->updatewishlistfolder();
}
 else {
    $objmodel->addwishlistfolder();
}


header("Location: ../bookmarks.php")
?>
