<?php
session_start();
require_once '../models/user.php';
$objuser= unserialize($_SESSION['objUser']);

try {
    
    $objuser->setprofileImage($_FILES['image']);
    header("location: ../editprofile.php");

} catch (Exception $ex) {
      $_SESSION['msg']=$ex->getMessage();
      header("location: ../editprofile.php");
}



?>