<?php
session_start();
require_once '../models/admin.php';
if(isset($_SESSION['objadmin'])){
     $objadmin= unserialize($_SESSION['objadmin']);
}else{
    $objadmin=new admin();
}
     $objadmin->logout();
   header("location:../index.php");

?>